import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import {
  GetListCandidates,
  ICandidate,
} from '../../../hooks/admin/useCandidates';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function Candidates(): JSX.Element {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const rows: GridRowsProp = candidates.map((candidate: ICandidate) => ({
    id: candidate.id,
    name: candidate.user.name,
    email: candidate.user.email,
    country: candidate.country,
    nativeLanguage: candidate.nativeLanguage,
    englishLevel: candidate.englishLevel,
    status: candidate.user.status,
  }));

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'nativeLanguage', headerName: 'Native Language', flex: 1 },
    { field: 'englishLevel', headerName: 'English Level', flex: 1 },
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
    const response = await GetListCandidates();
    if (response && response.candidates) {
      setCandidates(response.candidates);
    }
  }, []);

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
