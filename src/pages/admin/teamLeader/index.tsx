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
  GetTeamLeaders,
  ITeamLeader,
  DeleteTeamLeader,
} from '../../../hooks/admin/useTeamLeader';
import {
  GetInterestSkills,
  IInterestSkills,
} from '../../../hooks/admin/useInterestSkills';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';
import Default from '../../../default';
import Modal from '../../../components/modal';
import { InvisibleButton } from './style';

export default function TeamLeader(): JSX.Element {
  const navigate = useNavigate();
  const [teamLeaders, setTeamLeaders] = useState<ITeamLeader[]>([]);
  const [interestSkills, setInterestSkills] = useState<IInterestSkills[]>([]);
  const rows: GridRowsProp = teamLeaders.map((user: ITeamLeader) => {
    const departmentName = interestSkills.find(
      (item: IInterestSkills) => item.id === user.department,
    );

    return {
      id: user.id,
      department: user.department,
      departmentName: departmentName ? departmentName.name : '',
      lastName: user.user.lastName,

      name: `${user.user.name} ${user.user.lastName || ''}`,
      email: user.user.email,
      status: user.user.status,
    };
  });

  const handleGetInterestSkills = useCallback(async () => {
    const response = await GetInterestSkills();
    if (response && response.interestSkills) {
      setInterestSkills(response.interestSkills);
    }
  }, []);
  useEffect(() => {
    handleGetInterestSkills();
  }, [handleGetInterestSkills]);

  const handleGetUser = useCallback(async () => {
    const response = await GetTeamLeaders();
    if (response && response.teamLeaders) {
      setTeamLeaders(response.teamLeaders);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const handleDeleteTeamLeader = useCallback(
    async (id: string) => {
      const response = await DeleteTeamLeader(id);

      try {
        if (response) {
          Modal({
            keyType: 'removeTeamLeader',
            icon: 'success',
          });
          handleGetUser();
        } else {
          Modal({
            keyType: 'removeTeamLeader',
            icon: 'error',
          });
        }
      } catch {
        Modal({
          keyType: 'removeTeamLeader',
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
              keyType: 'removeTeamLeader',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => handleDeleteTeamLeader(e.row.id),
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Deletar"
          onClick={() => {
            navigate('/admin/teamLeader/register', {
              state: { teamleader: e.row },
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

    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'departmentName', headerName: 'Department', flex: 1 },
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
      title={Language.page.teamLeader.listTeamLeader}
      buttonNewLabel={Language.page.teamLeader.newTeamLeader}
      buttonNewClick={() => navigate('/admin/teamLeader/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
