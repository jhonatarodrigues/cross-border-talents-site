import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { GetJobs, IJobs } from '../../../hooks/admin/useJobs';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';

export default function Jobs(): JSX.Element {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);

  const rows: GridRowsProp = jobs.map((item: IJobs) => {
    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) => country.code === item.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].name;
    }

    return {
      id: item.id,
      jobTitle: item.jobTitle,
      level: item.level,
      country: countrie,
      department: item.interestSkills.name,
    };
  });

  const columns: GridColDef[] = [
    { field: 'jobTitle', headerName: 'Title', flex: 1 },
    { field: 'level', headerName: 'Level', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'department', headerName: 'Department', flex: 1 },
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

  const hangleGetCountries = useCallback(() => {
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
    hangleGetCountries();
  }, [hangleGetCountries]);

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
