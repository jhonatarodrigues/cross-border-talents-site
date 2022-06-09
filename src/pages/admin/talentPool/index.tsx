import React, { useEffect, useCallback, useState } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

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
import Logo from '../../../assets/images/logo.png';
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

export default function TalentPool(): JSX.Element {
  const [talentPool, setTalentPool] = useState<ITalentPools[]>([]);
  const [modalDetails, setModalDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ITalentPools>();
  const [checkTalentPoolInterest, setCheckTalentPoolInterest] = useState(false);
  const [countries, setCountries] = useState<ICountrie[]>([]);

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
    };
  });

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

  const handleGetTalentPool = useCallback(async () => {
    const response = await GetTalentPools();
    if (response && response.talentPools) {
      setTalentPool(response.talentPools);
    }
  }, []);

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

  const handleOpenModalDetails = useCallback(async () => {
    if (!selectedRow) {
      return;
    }
    setCheckTalentPoolInterest(false);

    const response = await CheckTalentPoolInterest({
      idTalentPool: selectedRow.id,
    });

    setCheckTalentPoolInterest(response.data.talentPoolInterests);
    setModalDetails(true);
  }, [selectedRow]);

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Have Interest"
          onClick={() => {
            handleHaveInterest(e.row.allRow);
          }}
        >
          <FontAwesomeIcon icon={faPlus} color={Default.color.blue} />
        </InvisibleButton>
        <InvisibleButton
          title="Information"
          onClick={() => {
            setSelectedRow(e.row.allRow);

            handleOpenModalDetails();
          }}
        >
          <FontAwesomeIcon icon={faEye} color={Default.color.blue} />
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'allRow', hide: true, filterable: false },

    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'profile', headerName: 'Profile', flex: 1 },
    { field: 'country', headerName: 'Country of Residence', flex: 1 },
    { field: 'languages', headerName: 'Languages', flex: 1 },

    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

  useEffect(() => {
    handleGetTalentPool();
  }, [handleGetTalentPool]);

  const renderModalDetails = useCallback(() => {
    if (!modalDetails || !selectedRow) {
      return <div />;
    }

    const name = checkTalentPoolInterest ? selectedRow?.user.name : '******';
    const lastName = checkTalentPoolInterest
      ? selectedRow?.user.lastName
      : '******';
    const email = checkTalentPoolInterest ? selectedRow?.user.email : '******';
    const phone = checkTalentPoolInterest ? selectedRow?.user.phone : '******';

    console.log('aaa --', selectedRow);

    return (
      <CustomModal noPadding onClose={() => setModalDetails(false)}>
        <ContentModal>
          <ModalScroll>
            <ModalImage />
            <InformationModal>
              <Default.Column>
                <Default.Row>
                  <Default.Column style={{ minWidth: '70%' }}>
                    <Default.Row>
                      <TitleModal>Name</TitleModal>
                      <InfoModal>{`${name} ${lastName}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>E-mail</TitleModal>
                      <InfoModal>{email}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Gender</TitleModal>
                      <InfoModal>{name}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Phone</TitleModal>
                      <InfoModal>{phone}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                  </Default.Column>
                  <Default.Column alignItens="flex-end">
                    <Button style={{ background: Default.color.success }}>
                      See all information
                    </Button>
                  </Default.Column>
                </Default.Row>

                <ModalLine />
                <Default.Row>
                  <Default.Column>
                    <TitleSectionModal>Personal information</TitleSectionModal>
                    <Default.Space h="1.875rem" />
                    <Default.Row>
                      <TitleModal>Native Language</TitleModal>
                      <InfoModal>{`${selectedRow?.candidate.nativeLanguage}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Country of residence</TitleModal>
                      <InfoModal>{`${selectedRow?.candidate.country}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>English level</TitleModal>
                      <InfoModal>{`${selectedRow?.candidate.englishLevel}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Observations</TitleModal>
                      <InfoModal>{`${selectedRow?.observation}`}</InfoModal>
                    </Default.Row>
                  </Default.Column>
                </Default.Row>

                <ModalLine />
                <Default.Row>
                  <Default.Column>
                    <TitleSectionModal>Business information</TitleSectionModal>
                    <Default.Space h="1.875rem" />
                    <Default.Row>
                      <TitleModal>Profile:</TitleModal>
                      <InfoModal>{`${selectedRow?.profile}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Role</TitleModal>
                      <InfoModal>{`${selectedRow?.charge}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Softwares</TitleModal>
                      <InfoModal>{`${selectedRow?.softwares}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Education</TitleModal>
                      <InfoModal>{`${selectedRow?.education}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="5rem" />

                    <Default.Row>
                      <TitleModal>Languages</TitleModal>
                      <InfoModal>{`${selectedRow?.languages}`}</InfoModal>
                    </Default.Row>
                    <Default.Space h="1.1875rem" />
                    <Default.Row>
                      <TitleModal>Work experience</TitleModal>
                      <InfoModal
                        dangerouslySetInnerHTML={{
                          __html: selectedRow?.experience,
                        }}
                      />
                    </Default.Row>
                  </Default.Column>
                </Default.Row>
                <ModalLine />
                <Default.Row>
                  <Default.Column>
                    <Default.Title2 color={Default.color.blueOriginal}>
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
          </ModalScroll>
        </ContentModal>
      </CustomModal>
    );
  }, [modalDetails, selectedRow, checkTalentPoolInterest]);

  return (
    <ContentPage title={Language.page.talentPool.listTalentPool}>
      {renderModalDetails()}
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
