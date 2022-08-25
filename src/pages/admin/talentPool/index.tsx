import React, { useEffect, useCallback, useState, useRef } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useSelector } from 'react-redux';

import { htmlURIDecode } from '../../../util/format';
import {
  GetTeamLeaders,
  GetTeamLeader,
} from '../../../hooks/admin/useTeamLeader';
import { ApplicationState } from '../../../store';
import { GetCompanie } from '../../../hooks/admin/useCompanies';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import Section from '../../../components/section';
import ContentInput from '../../../components/contentInput';
import {
  GetTalentPools,
  ITalentPools,
} from '../../../hooks/admin/useTalentPool';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';
import Default from '../../../default';
import Button from '../../../components/button';
import {
  AddTalentPoolInterest,
  CheckTalentPoolInterest,
} from '../../../hooks/admin/useTalentPoolInterest';
import CustomModal from '../../../components/CustomModal';
import {
  GetLanguages,
  IResponseLanguages,
} from '../../../hooks/admin/useLanguages';
import Logo from '../../../assets/images/logo.png';
import LogoBranco from '../../../assets/images/logoWhiteFull.png';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import {
  InvisibleButton,
  ContentModal,
  ModalImage,
  ModalScroll,
  InformationModal,
  TitleModal,
  InfoModal,
  ModalLine,
  TitleSectionModal,
} from './style';

interface IFilter {
  search?: string;
  department?: string;
  teamLeader?: string;
}

export default function TalentPool(): JSX.Element {
  const [talentPool, setTalentPool] = useState<ITalentPools[]>([]);
  const [modalDetails, setModalDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ITalentPools>();
  const [countries, setCountries] = useState<ICountrie[]>([]);
  const [hidePrintPdf, setHidePrintPdf] = useState(false);
  const [filter, setFilter] = useState<IFilter>();
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsTeamLeader, setOptionsTeamLeader] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [nativeLanguage, setNativeLanguage] = useState<IResponseLanguages>(
    {} as IResponseLanguages,
  );
  const { auth } = useSelector((state: ApplicationState) => state);
  const formRef = useRef<FormHandles>(null);

  const rows: GridRowsProp = talentPool.map((item: ITalentPools) => {
    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) =>
        country.countryShortCode === item.candidate.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].countryName;
    }

    return {
      allRow: item,

      id: item.id,
      profile: item.profile,
      education: item.education,
      languages: item.languages,
      charge: item.charge,
      country: countrie,
      teamLeader:
        item.teamLeader && item.teamLeader.user && item.teamLeader.user.name
          ? `${item.teamLeader.user.name} ${item.teamLeader.user.lastName}`
          : '',
    };
  });

  const getInterestSkills = useCallback(async () => {
    const { interestSkills } = await GetInterestSkills();
    if (interestSkills) {
      const options: IOptionsDropdown[] = interestSkills.map(item => {
        return {
          value: item.id,
          label: item.name,
        };
      });
      setOptionsInterestSkills(options);
    } else {
      Modal({ keyType: 'getInterestSkills', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

  useEffect(() => {
    const response = GetLanguages();
    setNativeLanguage(response);
  }, []);

  const handleGetCountries = useCallback(() => {
    GetCountries()
      .then(response => {
        setCountries(response.countries);
      })
      .catch(() => {
        Modal({
          icon: 'error',
          keyType: 'getCountries',
        });
      });
  }, []);

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

  const getTeamLeaders = useCallback(async () => {
    const { teamLeaders } = await GetTeamLeaders();
    if (teamLeaders) {
      const options: IOptionsDropdown[] = teamLeaders.map(teamLeader => {
        return {
          value: teamLeader.id,
          label: teamLeader.user.name,
        };
      });
      setOptionsTeamLeader(options);
    } else {
      Modal({ keyType: 'getTeamLeaders', icon: 'error' });
    }
  }, []);
  useEffect(() => {
    getTeamLeaders();
  }, [getTeamLeaders]);

  const handleGetTalentPool = useCallback(async () => {
    const response = await GetTalentPools({ ...filter });

    if (response && response.talentPools) {
      setTalentPool(response.talentPools);
    }
  }, [filter]);

  const handleHaveInterest = useCallback(async (item: ITalentPools) => {
    const response = await AddTalentPoolInterest({
      idTalentPool: item.id,
    });

    if (response.data.addTalentPoolInterest.id) {
      Modal({
        title: 'Success',
        icon: 'success',
        keyType: 'addTalentPoolInterest',
      });
    }
  }, []);

  const handleOpenModalDetails = useCallback(async (row: ITalentPools) => {
    if (!row) {
      return;
    }
    setSelectedRow(row);
    const response = await CheckTalentPoolInterest({
      idTalentPool: row.id,
    });

    setModalDetails(true);
  }, []);

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Have Interest"
          onClick={() => {
            handleHaveInterest(e.row.allRow);
          }}
        >
          <Button
            variant="contained"
            type="submit"
            size="small"
            onClick={() => {
              handleHaveInterest(e.row.allRow);
            }}
          >
            Have Interest
          </Button>
        </InvisibleButton>
        <InvisibleButton
          title="Information"
          onClick={() => {
            handleOpenModalDetails(e.row.allRow);
          }}
        >
          <Button variant="contained" type="submit" size="small">
            Blind CV
          </Button>
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'allRow', hide: true, filterable: false },

    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'profile', headerName: 'Profile', flex: 1 },
    { field: 'teamLeader', headerName: 'Team Leader', flex: 1 },
    { field: 'country', headerName: 'Country of Residence', flex: 1 },
    { field: 'languages', headerName: 'Languages', flex: 1 },

    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
      flex: 1,
    },
  ];

  const renderModalDetails = useCallback(() => {
    if (!modalDetails || !selectedRow) {
      return <div />;
    }

    return (
      <CustomModal noPadding onClose={() => setModalDetails(false)}>
        <ContentModal>
          <ModalScroll>
            <Default.Column id="capturePdf">
              <ModalImage>
                <Default.Column>
                  <Default.Row>
                    <Default.Column>
                      <img src={LogoBranco} alt="Cross Border Talents" />
                    </Default.Column>
                    <Default.Column alignItens="flex-end">
                      {!hidePrintPdf && (
                        <Button
                          variant="outlined"
                          style={{
                            borderColor: Default.color.white,
                            color: Default.color.white,
                          }}
                          onClick={() => {
                            setHidePrintPdf(true);
                            const documentHtml = document.querySelector(
                              '#capturePdf',
                            ) as HTMLElement;

                            if (document) {
                              setTimeout(() => {
                                html2canvas(documentHtml).then(canvas => {
                                  document.body.appendChild(canvas); // if you want see your screenshot in body.
                                  const imgData = canvas.toDataURL('image/png');

                                  const pdfDOC = new JsPDF('p', 'pt', [
                                    documentHtml.offsetWidth,
                                    documentHtml.offsetHeight,
                                  ]);

                                  pdfDOC.addImage(
                                    imgData,
                                    'PNG',
                                    0,
                                    0,
                                    documentHtml.offsetWidth,
                                    documentHtml.offsetHeight,
                                  );
                                  pdfDOC.save('Blind-CV.pdf');
                                  setHidePrintPdf(false);
                                  canvas.remove();
                                });
                              }, 500);
                            } else {
                              setHidePrintPdf(false);
                            }
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            color={Default.color.white}
                          />
                          &nbsp; Print Blind CV
                        </Button>
                      )}
                    </Default.Column>
                  </Default.Row>
                  <Default.Space h="4.375rem" />
                  <Default.Row>
                    <Default.TitleH3 color={Default.color.white}>
                      {selectedRow?.profile}
                    </Default.TitleH3>
                  </Default.Row>
                </Default.Column>
              </ModalImage>
              <InformationModal>
                <Default.Column>
                  <Default.Row>
                    <Default.Column>
                      <TitleSectionModal>
                        Personal information
                      </TitleSectionModal>
                      <Default.Space h="1.875rem" />
                      <Default.Row>
                        <InfoModal
                          className="textEditor"
                          dangerouslySetInnerHTML={{
                            __html: htmlURIDecode(selectedRow?.observation),
                          }}
                        />
                      </Default.Row>
                      <Default.Space h="3.125rem" />
                      <Default.Row>
                        <TitleModal>Nationality</TitleModal>
                        <InfoModal>
                          {selectedRow?.candidate.nativeLanguage &&
                            nativeLanguage.languages.find(
                              language =>
                                language.code ===
                                selectedRow?.candidate.nativeLanguage,
                            )?.name}
                        </InfoModal>
                      </Default.Row>
                      <Default.Space h="1.1875rem" />
                      <Default.Row>
                        <TitleModal>Country of residence</TitleModal>
                        <InfoModal>
                          {selectedRow?.candidate.country &&
                            countries.find(
                              country =>
                                country.countryShortCode ===
                                selectedRow?.candidate.country,
                            )?.countryName}
                        </InfoModal>
                      </Default.Row>
                      <Default.Space h="1.1875rem" />
                      <Default.Row>
                        <TitleModal>Degree</TitleModal>
                        <InfoModal>{`${selectedRow?.charge}`}</InfoModal>
                      </Default.Row>
                      <Default.Space h="1.1875rem" />
                      <Default.Row>
                        <TitleModal>Languages</TitleModal>
                        <InfoModal>{`${selectedRow?.languages}`}</InfoModal>
                      </Default.Row>
                      <Default.Space h="1.1875rem" />
                      <Default.Row>
                        <TitleModal>Software</TitleModal>
                        <InfoModal>{`${selectedRow?.softwares}`}</InfoModal>
                      </Default.Row>
                    </Default.Column>
                  </Default.Row>

                  <ModalLine />
                  <Default.Row>
                    <Default.Column>
                      <TitleSectionModal>Education</TitleSectionModal>
                      <Default.Space h="1.875rem" />
                      <Default.Row>
                        <TitleModal>Education</TitleModal>
                        <InfoModal>{`${selectedRow?.education}`}</InfoModal>
                      </Default.Row>
                    </Default.Column>
                  </Default.Row>

                  <ModalLine />
                  <Default.Row>
                    <Default.Column>
                      <TitleSectionModal>
                        Professional experience
                      </TitleSectionModal>
                      <Default.Space h="1.875rem" />
                      <Default.Row>
                        <TitleModal>Work experience</TitleModal>
                        <InfoModal
                          className="textEditor"
                          dangerouslySetInnerHTML={{
                            __html: htmlURIDecode(selectedRow?.experience),
                          }}
                        />
                      </Default.Row>
                    </Default.Column>
                  </Default.Row>
                  <ModalLine />
                  <Default.Row>
                    <Default.Column>
                      <Default.Title2 color={Default.color.gray}>
                        Top candidates.
                        <br />
                        Exclusive for companies.
                      </Default.Title2>
                    </Default.Column>
                    <Default.Column alignItens="flex-end">
                      <img src={Logo} alt="Cross Border Talents" />
                    </Default.Column>
                  </Default.Row>
                </Default.Column>
              </InformationModal>
            </Default.Column>
          </ModalScroll>
        </ContentModal>
      </CustomModal>
    );
  }, [modalDetails, selectedRow, hidePrintPdf, countries, nativeLanguage]);

  const handleGetCompanie = useCallback(async () => {
    const response = await GetCompanie({
      idUser: auth.user.id,
    });

    if (response.companie && response.companie.interestSkills.id) {
      formRef.current?.setFieldValue(
        'interestSkills',
        response.companie.interestSkills.id,
      );
      setTimeout(() => {
        formRef.current?.submitForm();
      }, 500);
    }
  }, [auth]);
  useEffect(() => {
    if (auth && auth.user.accessLevel === 4) {
      handleGetCompanie();
    }
  }, [handleGetCompanie, auth]);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    setFilter({
      search: data.search,
      department: data.interestSkills,
      teamLeader: data.teamLeader,
    });
  }, []);

  useEffect(() => {
    handleGetTalentPool();
  }, [handleGetTalentPool]);

  const handleTeamLeaderUnique = useCallback(async () => {
    const response = await GetTeamLeader({
      idUser: auth.user.id,
    });

    if (response.teamLeader.id) {
      formRef.current?.setFieldValue('teamLeader', response.teamLeader.id);
      setTimeout(() => {
        formRef.current?.submitForm();
      }, 500);
    }
  }, [auth]);

  useEffect(() => {
    if (auth && auth.user.accessLevel === 2) {
      handleTeamLeaderUnique();
    }
  }, [handleTeamLeaderUnique, auth]);

  return (
    <ContentPage title={Language.page.talentPool.listTalentPool}>
      {renderModalDetails()}

      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.filter}>
          <ContentInput>
            <Input name="search" label={Language.fields.search} />

            <InputDropDown
              name="teamLeader"
              label={Language.fields.teamLeader}
              options={[{ label: 'Select', value: '' }, ...optionsTeamLeader]}
              value={auth && auth.user.accessLevel === 3 ? auth.user.id : ''}
            />

            <InputDropDown
              name="interestSkills"
              label={Language.fields.department}
              options={[
                { label: 'Select', value: '' },
                ...optionsInterestSkills,
              ]}
              disabled={auth && auth.user.accessLevel === 4}
            />

            <div>
              <Button
                variant="contained"
                type="submit"
                style={{ minWidth: '100px' }}
              >
                Search
              </Button>
            </div>
          </ContentInput>
        </Section>
      </Form>

      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        disableColumnSelector
        checkboxSelection={false}
      />
    </ContentPage>
  );
}
