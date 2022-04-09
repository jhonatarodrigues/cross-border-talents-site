import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment';

import {
  GetTestimonials,
  ITestimonials,
} from '../../../hooks/admin/useTestimonials';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function Testimonials(): JSX.Element {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);

  const rows: GridRowsProp = testimonials.map((item: ITestimonials) => {
    const timeStamp: number = parseInt(item.date, 10);

    return {
      id: item.id,
      name: item.name,
      date: Moment(timeStamp).format('DD/MM/YYYY HH:mm'),
      observations: item.observations,
      country: item.country,
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
