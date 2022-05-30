import React, { useEffect, useCallback, useState } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit, faHand } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../../store';
import {
  GetListCandidates,
  ICandidate,
  DeleteCandidate,
  AddTeamLeaderToCandidate,
} from '../../../hooks/admin/useCandidates';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';
import Default from '../../../default';
import { InvisibleButton } from './style';

export default function Candidates(): JSX.Element {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);
  const { auth } = useSelector((state: ApplicationState) => state);

  const rows: GridRowsProp = candidates.map((candidate: ICandidate) => {
    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) => country.code === candidate.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].name;
    }

    let approachedBy = '';
    if (
      candidate &&
      candidate.userTeamLeader &&
      candidate.userTeamLeader.user
    ) {
      approachedBy = `${candidate.userTeamLeader.user.name} ${candidate.userTeamLeader.user.lastName}`;
    }

    return {
      allRow: candidate,

      id: candidate.id,
      name: `${candidate.user.name} ${candidate.user.lastName || ''}`,
      email: candidate.user.email,
      country: countrie,
      nativeLanguage: candidate.nativeLanguage,
      englishLevel: candidate.englishLevel,
      status: candidate.user.status,
      approachedBy,
      birthDate: Moment(candidate.birthDate).format('DD/MM/YYYY'),
    };
  });

  const handleGetUser = useCallback(async () => {
    const response = await GetListCandidates();
    if (response && response.candidates) {
      setCandidates(response.candidates);
    }
  }, []);

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
              keyType: 'removeCompany',
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
        {auth.user.accessLevel === 2 &&
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

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  return (
    <ContentPage
      title={Language.page.candidates.listCandidates}
      buttonNewLabel={Language.page.candidates.newCandidates}
      buttonNewClick={() => navigate('/admin/candidates/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
