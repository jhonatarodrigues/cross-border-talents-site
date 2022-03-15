import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { GetUsers, IUser } from '../../../hooks/admin/useUser';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function User(): JSX.Element {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const rows: GridRowsProp = users.map((user: IUser) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    status: user.status,
  }));

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => (
        <LabelDestached text={row.status ? 'Active' : 'Inactive'} />
      ),
    },
  ];

  const handleGetUser = useCallback(async () => {
    const response = await GetUsers();
    if (response && response.users) {
      setUsers(response.users);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

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
