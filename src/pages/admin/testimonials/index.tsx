import React, { useEffect, useCallback, useState } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit } from '@fortawesome/free-solid-svg-icons';

import {
  GetTestimonials,
  ITestimonials,
  DeleteTestimonial,
} from '../../../hooks/admin/useTestimonials';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import Modal from '../../../components/modal';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';
import Default from '../../../default';
import { InvisibleButton } from './style';

export default function Testimonials(): JSX.Element {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);

  const rows: GridRowsProp = testimonials.map((item: ITestimonials) => {
    const timeStamp: number = parseInt(item.date, 10);

    let countryName = '';
    const countryFilter = countries.filter(
      (country: ICountrie) => country.countryShortCode === item.country,
    );

    if (countryFilter && countryFilter[0]) {
      countryName = countryFilter[0].countryName;
    }

    return {
      allData: item,

      id: item.id,
      name: item.name,
      date: Moment(timeStamp).format('DD/MM/YYYY HH:mm'),
      observations: item.observations,
      country: countryName,
    };
  });

  const handleGetUser = useCallback(async () => {
    const response = await GetTestimonials();
    if (response && response.testimonials) {
      setTestimonials(response.testimonials);
    }
  }, []);

  const handleDeleteTestimonial = useCallback(
    (id: string) => {
      DeleteTestimonial(id)
        .then(response => {
          if (response.data.removeTestimonial) {
            Modal({
              keyType: 'removeTestimonial',
              icon: 'success',
            });
            handleGetUser();
          } else {
            Modal({
              keyType: 'removeTestimonial',
              icon: 'error',
            });
          }
        })
        .catch(() => {
          Modal({
            keyType: 'removeTestimonial',
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
          title="Deletar"
          onClick={() => {
            Modal({
              keyType: 'removeTestimonials',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => handleDeleteTestimonial(e.row.id),
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Update"
          onClick={() => {
            navigate('/admin/testimonials/register', {
              state: { testimonial: e.row.allData },
            });
          }}
        >
          <FontAwesomeIcon icon={faEdit} color={Default.color.blue} />
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'observations', headerName: 'Observation', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  const handleGetCountries = useCallback(() => {
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
    handleGetCountries();
  }, [handleGetCountries]);

  return (
    <ContentPage
      title={Language.page.testimonials.listTestimonials}
      buttonNewLabel={Language.page.testimonials.newTestimonials}
      buttonNewClick={() => navigate('/admin/testimonials/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
