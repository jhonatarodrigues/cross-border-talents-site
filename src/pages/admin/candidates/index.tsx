import React, { useEffect, useCallback, useState, useRef } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit, faHand } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';
import { useSelector } from 'react-redux';

import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import Section from '../../../components/section';
import ContentInput from '../../../components/contentInput';
import { ApplicationState } from '../../../store';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import {
  GetLanguages,
  IResponseLanguages,
} from '../../../hooks/admin/useLanguages';
import {
  GetRecruiters,
  GetRecruitersIdUser,
} from '../../../hooks/admin/useRecruiters';
import {
  GetListCandidates,
  ICandidate,
  DeleteCandidate,
  AddTeamLeaderToCandidate,
} from '../../../hooks/admin/useCandidates';
import Button from '../../../components/button';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';
import Default from '../../../default';
import { InvisibleButton } from './style';

interface IFilter {
  search?: string;
  department?: string;
  recruiter?: string;
  candidate?: string;
  teamLeader?: string;
}

export default function Candidates(): JSX.Element {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);
  const { auth } = useSelector((state: ApplicationState) => state);
  const formRef = useRef<FormHandles>(null);
  const [filter, setFilter] = useState<IFilter>({
    candidate: auth && auth.user.accessLevel === 5 ? auth.user.id : '',
  });
  const [nativeLanguage, setNativeLanguage] = useState<IResponseLanguages>(
    {} as IResponseLanguages,
  );
  const [recruiterInitial, setRecruiterInitial] = useState('');
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsRecruiter, setOptionsRecruiter] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [optionsTeamLeader, setOptionsTeamLeader] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  useEffect(() => {
    const response = GetLanguages();
    setNativeLanguage(response);
  }, []);

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

  const handleGetUserRecruiter = useCallback(async () => {
    if (auth && auth.user.accessLevel === 3) {
      const response = await GetRecruitersIdUser({
        idUser: auth.user.id,
      });

      setRecruiterInitial(response.recruiters[0] && response.recruiters[0].id);
    }
  }, [auth]);
  useEffect(() => {
    handleGetUserRecruiter();
  }, [handleGetUserRecruiter]);
  useEffect(() => {
    if (recruiterInitial) {
      formRef.current?.setFieldValue('recruiter', recruiterInitial);
      setFilter({
        recruiter: recruiterInitial,
      });
    }
  }, [recruiterInitial]);

  const rows: GridRowsProp = candidates.map((candidate: ICandidate) => {
    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) => country.countryShortCode === candidate.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].countryName;
    }

    let approachedBy = '';
    if (
      candidate &&
      candidate.userTeamLeader &&
      candidate.userTeamLeader.user
    ) {
      approachedBy = `${candidate.userTeamLeader.user.name} ${candidate.userTeamLeader.user.lastName}`;
    } else if (candidate && candidate.userRecruiter) {
      approachedBy = `${candidate.userRecruiter.user.name} ${candidate.userRecruiter.user.lastName}`;
    }

    return {
      allRow: candidate,

      id: candidate.id,
      name: `${candidate.user.name} ${candidate.user.lastName || ''}`,
      email: candidate.user.email,
      country: countrie,
      nativeLanguage: candidate.nativeLanguage
        ? nativeLanguage.languages.find(
            language => language.code === candidate.nativeLanguage,
          )?.name
        : '',
      englishLevel: candidate.englishLevel,
      status: candidate.user.status,
      approachedBy,
      talentPool: !!(candidate.allowTalentPool && candidate.talentPoolVerify),
      birthDate: Moment(candidate.birthDate).format('DD/MM/YYYY'),
    };
  });

  const handleGetUser = useCallback(async () => {
    const response = await GetListCandidates(filter);
    if (response && response.candidates) {
      setCandidates(response.candidates);
    }
  }, [filter]);

  const handleDeleteCandidate = useCallback(
    async (id: string) => {
      const response = await DeleteCandidate(id);

      try {
        if (response) {
          Modal({
            keyType: 'removeCandidate',
            icon: 'success',
          });
          handleGetUser();
        } else {
          Modal({
            keyType: 'removeCandidate',
            icon: 'error',
          });
        }
      } catch {
        Modal({
          keyType: 'removeCandidate',
          icon: 'error',
        });
      }
    },
    [handleGetUser],
  );

  const handleSetTeamLeader = useCallback(
    async (id: string) => {
      const response = await AddTeamLeaderToCandidate({
        idCandidate: id,
      });

      if (response.data.addTeamLeader) {
        Modal({
          keyType: 'addTeamLeaderCandidate',
          icon: 'success',
        });

        handleGetUser();
      } else {
        Modal({
          keyType: 'addTeamLeaderCandidate',
          icon: 'error',
        });
      }
    },
    [handleGetUser],
  );

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Deletar"
          onClick={() => {
            Modal({
              keyType: 'removeCandidate',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => {
                handleDeleteCandidate(e.row.allRow.id);
              },
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Update"
          onClick={() => {
            navigate('/admin/candidates/register', {
              state: { candidate: e.row.allRow },
            });
          }}
        >
          <FontAwesomeIcon icon={faEdit} color={Default.color.blue} />
        </InvisibleButton>
        {auth &&
          auth.user &&
          auth.user.accessLevel === 2 &&
          e.row &&
          e.row.allRow.userTeamLeader &&
          e.row.allRow.userTeamLeader.user &&
          e.row.allRow.userTeamLeader.user.id !== auth.user.id && (
            <InvisibleButton
              title="Approached By"
              onClick={() => {
                handleSetTeamLeader(e.row.allRow.id);
              }}
            >
              <FontAwesomeIcon icon={faHand} color={Default.color.blue} />
            </InvisibleButton>
          )}
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'allRow', hide: true, filterable: false },

    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'nativeLanguage', headerName: 'Native Language', flex: 1 },
    { field: 'approachedBy', headerName: 'Approached By', flex: 1 },
    { field: 'birthDate', headerName: 'Date', flex: 1 },

    {
      field: 'talentPool',
      headerName: 'Talent Pool',
      renderCell: ({ row }) => (
        <LabelDestached
          text={row.talentPool ? 'Active' : 'Inactive'}
          type={row.talentPool ? 'default' : 'info'}
        />
      ),
    },

    {
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => (
        <LabelDestached
          text={row.status ? 'Active' : 'Inactive'}
          type={row.status ? 'default' : 'info'}
        />
      ),
    },
    {
      hide: auth && auth.user.accessLevel === 5,
      filterable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

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

  const getRecruiters = useCallback(async () => {
    const { recruiters } = await GetRecruiters();

    if (recruiters) {
      const options: IOptionsDropdown[] = recruiters.map(recruiter => {
        return {
          value: recruiter.id,
          label: recruiter.user.name,
        };
      });
      setOptionsRecruiter(options);
    } else {
      Modal({ keyType: 'getRecruiter', icon: 'error' });
    }
  }, []);

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
    getRecruiters();
  }, [getRecruiters]);

  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    setFilter({
      search: data.search,
      recruiter: data.recruiter,
      department: data.interestSkills,
      teamLeader: data.teamLeader,
    });
  }, []);

  return (
    <ContentPage
      title={Language.page.candidates.listCandidates}
      buttonNewLabel={Language.page.candidates.newCandidates}
      buttonNewClick={() => navigate('/admin/candidates/register')}
    >
      {auth && auth.user.accessLevel !== 5 ? (
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          onClick={() => formRef.current?.setErrors({})}
        >
          <Section label={Language.page.filter}>
            <ContentInput>
              <Input name="search" label={Language.fields.search} />
            </ContentInput>
            <ContentInput>
              <InputDropDown
                name="interestSkills"
                label={Language.fields.department}
                options={[
                  { label: 'Select', value: '' },
                  ...optionsInterestSkills,
                ]}
              />
              <InputDropDown
                name="teamLeader"
                label={Language.fields.teamLeader}
                options={[{ label: 'Select', value: '' }, ...optionsTeamLeader]}
                value={auth && auth.user.accessLevel === 3 ? auth.user.id : ''}
              />
              <InputDropDown
                name="recruiter"
                label={Language.fields.recruiter}
                options={[{ label: 'Select', value: '' }, ...optionsRecruiter]}
                value={auth && auth.user.accessLevel === 3 ? auth.user.id : ''}
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
      ) : (
        <div />
      )}
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
