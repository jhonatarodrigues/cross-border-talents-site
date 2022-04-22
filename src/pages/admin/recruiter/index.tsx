import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { GetRecruiters, IRecruiter } from '../../../hooks/admin/useRecruiters';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function Recruiter(): JSX.Element {
  const navigate = useNavigate();
  const [recruiters, setRecruiters] = useState<IRecruiter[]>([]);
  const rows: GridRowsProp = recruiters.map((recruiter: IRecruiter) => ({
    id: recruiter.id,
    name: recruiter.user.name,
    email: recruiter.user.email,
    phone: recruiter.user.phone,
    status: recruiter.user.status,
    teamLeader: recruiter.userTeamLeader.user.name,
  }));

  const columns: GridColDef[] = [
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
  ];

  const handleGetUser = useCallback(async () => {
    const response = await GetRecruiters();
    if (response && response.recruiters) {
      setRecruiters(response.recruiters);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

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
