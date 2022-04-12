import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment-timezone';

import {
  GetTestimonials,
  ITestimonials,
} from '../../../hooks/admin/useTestimonials';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import Modal from '../../../components/modal';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function Testimonials(): JSX.Element {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);

  const rows: GridRowsProp = testimonials.map((item: ITestimonials) => {
    const timeStamp: number = parseInt(item.date, 10);

    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) => country.code === item.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].name;
    }

    return {
      id: item.id,
      name: item.name,
      date: Moment(timeStamp).format('DD/MM/YYYY HH:mm'),
      observations: item.observations,
      country: countrie,
    };
  });

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'observations', headerName: 'Obeservation', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
  ];

  const handleGetUser = useCallback(async () => {
    const response = await GetTestimonials();
    if (response && response.testimonials) {
      setTestimonials(response.testimonials);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

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
      title={Language.page.testimonials.listTestimonials}
      buttonNewLabel={Language.page.testimonials.newTestimonials}
      buttonNewClick={() => navigate('/admin/testimonials/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
