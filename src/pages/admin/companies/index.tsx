import React, { useEffect, useCallback, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { GetCompanies, ICompany } from '../../../hooks/admin/useCompanies';
import LabelDestached from '../../../components/labelDestached';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';

export default function Companies(): JSX.Element {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const rows: GridRowsProp = companies.map((company: ICompany) => ({
    id: company.id,
    name: company.user.name,
    email: company.user.email,
    phone: company.user.phone,
    status: company.user.status,
    country: company.country,
  }));

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
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
    const response = await GetCompanies();
    if (response && response.companies) {
      setCompanies(response.companies);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  return (
    <ContentPage
      title={Language.page.companies.listCompanies}
      buttonNewLabel={Language.page.companies.newCompanies}
      buttonNewClick={() => navigate('/admin/companies/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
