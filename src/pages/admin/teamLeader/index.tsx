import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import {
  GetTeamLeaders,
  ITeamLeader,
} from '../../../hooks/admin/useTeamLeader';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function TeamLeader(): JSX.Element {
  const navigate = useNavigate();
  const [teamLeaders, setTeamLeaders] = useState<ITeamLeader[]>([]);
  const rows: GridRowsProp = teamLeaders.map((user: ITeamLeader) => ({
    id: user.id,
    name: user.user.name,
    email: user.user.email,
    phone: user.user.phone,
    status: user.user.status,
  }));

  const columns: GridColDef[] = [
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
  ];

  const handleGetUser = useCallback(async () => {
    const response = await GetTeamLeaders();
    if (response && response.teamLeaders) {
      setTeamLeaders(response.teamLeaders);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

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
