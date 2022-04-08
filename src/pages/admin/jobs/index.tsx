import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { GetJobs, IJobs } from '../../../hooks/admin/useJobs';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function Jobs(): JSX.Element {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const rows: GridRowsProp = jobs.map((item: IJobs) => ({
    id: item.id,
    jobTitle: item.jobTitle,
    level: item.level,
    country: item.country,
    interestSkill: item.interestSkills.name,
  }));

  const columns: GridColDef[] = [
    { field: 'jobTitle', headerName: 'Title', flex: 1 },
    { field: 'level', headerName: 'Level', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'interestSkill', headerName: 'Interest Skill', flex: 1 },
  ];

  const handleGetJobs = useCallback(async () => {
    const response = await GetJobs();
    if (response && response.jobs) {
      setJobs(response.jobs);
    }
  }, []);

  useEffect(() => {
    handleGetJobs();
  }, [handleGetJobs]);

  return (
    <ContentPage
      title={Language.page.jobs.listJobs}
      buttonNewLabel={Language.page.jobs.newJobs}
      buttonNewClick={() => navigate('/admin/jobs/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
