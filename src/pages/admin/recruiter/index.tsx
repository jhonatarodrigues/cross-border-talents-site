import React, { useEffect, useCallback, useState } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';

import {
  DeleteRecruiter,
  GetRecruiters,
  IRecruiter,
} from '../../../hooks/admin/useRecruiters';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';
import Modal from '../../../components/modal';
import Default from '../../../default';
import { InvisibleButton } from './style';

export default function Recruiter(): JSX.Element {
  const navigate = useNavigate();
  const [recruiters, setRecruiters] = useState<IRecruiter[]>([]);
  const rows: GridRowsProp = recruiters.map((recruiter: IRecruiter) => ({
    id: recruiter.id,
    department: recruiter.interestSkills,
    teamleaderid: recruiter.userTeamLeader.id,

    name: `${recruiter.user.name} ${recruiter.user.lastName || ''}`,
    lastName: recruiter.user.lastName,
    email: recruiter.user.email,
    phone: recruiter.user.phone,
    status: recruiter.user.status,
    teamLeader: recruiter.userTeamLeader.user.name,
  }));

  const handleGetUser = useCallback(async () => {
    const response = await GetRecruiters();
    if (response && response.recruiters) {
      setRecruiters(response.recruiters);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const handleDeleteRecruiter = useCallback(
    async (id: string) => {
      const response = await DeleteRecruiter(id);

      try {
        if (response) {
          Modal({
            keyType: 'removeRecruiter',
            icon: 'success',
          });
          handleGetUser();
        } else {
          Modal({
            keyType: 'removeRecruiter',
            icon: 'error',
          });
        }
      } catch {
        Modal({
          keyType: 'removeRecruiter',
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
              keyType: 'removeRecruiter',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => handleDeleteRecruiter(e.row.id),
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Deletar"
          onClick={() => {
            navigate('/admin/recruiter/register', {
              state: { recruiter: e.row },
            });
          }}
        >
          <FontAwesomeIcon icon={faEdit} color={Default.color.blue} />
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'id', hide: true, filterable: false },
    { field: 'department', hide: true, filterable: false },
    { field: 'teamleaderid', hide: true, filterable: false },

    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'teamLeader', headerName: 'Team Leader', flex: 1 },
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

  return (
    <ContentPage
      title={Language.page.recruiter.listRecruiter}
      buttonNewLabel={Language.page.recruiter.newRecruiter}
      buttonNewClick={() => navigate('/admin/recruiter/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
