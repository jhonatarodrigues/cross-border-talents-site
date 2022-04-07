import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import {
  GetInterestSkills,
  IInterestSkills,
} from '../../../hooks/admin/useInterestSkills';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function InterestSkills(): JSX.Element {
  const navigate = useNavigate();
  const [interestSkills, setInterestSkills] = useState<IInterestSkills[]>([]);
  const rows: GridRowsProp = interestSkills.map((item: IInterestSkills) => ({
    id: item.id,
    name: item.name,
  }));

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
  ];

  const handleGetInterestSkills = useCallback(async () => {
    const response = await GetInterestSkills();
    if (response && response.interestSkills) {
      setInterestSkills(response.interestSkills);
    }
  }, []);

  useEffect(() => {
    handleGetInterestSkills();
  }, [handleGetInterestSkills]);

  return (
    <ContentPage
      title={Language.page.interestSkills.listInterestSkills}
      buttonNewLabel={Language.page.interestSkills.newInterestSkills}
      buttonNewClick={() => navigate('/admin/interestSkills/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
