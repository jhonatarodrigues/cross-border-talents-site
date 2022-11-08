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

import { GetJobs, IJobs, DeleteJobs } from '../../../hooks/admin/useJobs';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';
import Default from '../../../default';
import { InvisibleButton } from './style';

export default function Jobs(): JSX.Element {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);

  const rows: GridRowsProp = jobs.map((item: IJobs) => {
    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) => country.countryShortCode === item.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].countryName;
    }

    return {
      id: item.id,
      countryId: item.country,
      description: item.description,
      interestSkills: item.interestSkills,
      date: item.date,

      jobTitle: item.jobTitle,
      level: item.level,
      country: countrie,
      department: item.interestSkills.name,

      requirements: item.requirements,
      benefits: item.benefits,
      userRecruiter: item?.userRecruiter || '',
      userTeamLeader: item?.userTeamLeader || '',
    };
  });

  const handleGetJobs = useCallback(async () => {
    const response = await GetJobs();
    if (response && response.jobs) {
      setJobs(response.jobs);
    }
  }, []);

  const handleDeleteJobs = useCallback(
    (id: string) => {
      DeleteJobs(id)
        .then(response => {
          if (response.data.removeJobs) {
            Modal({
              keyType: 'removeJobs',
              icon: 'success',
            });
            handleGetJobs();
          } else {
            Modal({
              keyType: 'removeJobs',
              icon: 'error',
            });
          }
        })
        .catch(() => {
          Modal({
            keyType: 'removeJobs',
            icon: 'error',
          });
        });
    },
    [handleGetJobs],
  );

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Delete"
          onClick={() => {
            Modal({
              keyType: 'removeJobs',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => handleDeleteJobs(e.row.id),
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Update"
          onClick={() => {
            navigate('/admin/jobs/register', { state: { jobs: e.row } });
          }}
        >
          <FontAwesomeIcon icon={faEdit} color={Default.color.blue} />
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'jobTitle', headerName: 'Title', flex: 1 },
    { field: 'level', headerName: 'Level', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'department', headerName: 'Department', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

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
