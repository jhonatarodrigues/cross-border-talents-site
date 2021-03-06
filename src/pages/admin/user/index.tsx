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

import { GetUsers, IUser, DeleteUser } from '../../../hooks/admin/useUser';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';
import Default from '../../../default';
import Modal from '../../../components/modal';
import { InvisibleButton } from './style';

export default function User(): JSX.Element {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const rows: GridRowsProp = users.map((user: IUser) => ({
    id: user.id,
    name: `${user.name} ${user.lastName || ''}`,
    email: user.email,
    phone: user.phone,
    status: user.status,
    lastName: user.lastName,
  }));

  const handleGetUser = useCallback(async () => {
    const response = await GetUsers();
    if (response && response.users) {
      setUsers(response.users);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const handleDeleteUser = useCallback(
    (id: string) => {
      DeleteUser(id)
        .then(response => {
          if (response.data.removeUser) {
            Modal({
              keyType: 'removeUser',
              icon: 'success',
            });
            handleGetUser();
          } else {
            Modal({
              keyType: 'removeUser',
              icon: 'error',
            });
          }
        })
        .catch(() => {
          Modal({
            keyType: 'removeUser',
            icon: 'error',
          });
        });
    },
    [handleGetUser],
  );

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Delete"
          onClick={() => {
            Modal({
              keyType: 'removeUser',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => handleDeleteUser(e.row.id),
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Update"
          onClick={() => {
            navigate('/admin/user/register', { state: { user: e.row } });
          }}
        >
          <FontAwesomeIcon icon={faEdit} color={Default.color.blue} />
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'lastName', headerName: 'lastName', hide: true },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
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
      title={Language.page.user.listUser}
      buttonNewLabel={Language.page.user.newUser}
      buttonNewClick={() => navigate('/admin/user/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
