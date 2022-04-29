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

import {
  GetCompanies,
  ICompany,
  DeleteCompany,
} from '../../../hooks/admin/useCompanies';
import { GetCountries, ICountrie } from '../../../hooks/admin/useCountry';
import LabelDestached from '../../../components/labelDestached';
import Modal from '../../../components/modal';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';
import Default from '../../../default';
import { InvisibleButton } from './style';

export default function Companies(): JSX.Element {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [countries, setCountries] = useState<ICountrie[]>([]);

  const rows: GridRowsProp = companies.map((company: ICompany) => {
    let countrie = '';
    const countrieFilter = countries.filter(
      (country: ICountrie) => country.code === company.country,
    );

    if (countrieFilter && countrieFilter[0]) {
      countrie = countrieFilter[0].name;
    }

    return {
      allRow: company,

      id: company.id,
      name: `${company.user.name} ${company.user.lastName || ''}`,
      email: company.user.email,
      phone: company.user.phone,
      status: company.user.status,
      country: countrie,
    };
  });

  const handleGetUser = useCallback(async () => {
    const response = await GetCompanies();
    if (response && response.companies) {
      setCompanies(response.companies);
    }
  }, []);

  const handleDeleteCompany = useCallback(
    async (id: string) => {
      const response = await DeleteCompany(id);

      try {
        if (response) {
          Modal({
            keyType: 'removeCompany',
            icon: 'success',
          });
          handleGetUser();
        } else {
          Modal({
            keyType: 'removeCompany',
            icon: 'error',
          });
        }
      } catch {
        Modal({
          keyType: 'removeCompany',
          icon: 'error',
        });
      }
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
              keyType: 'removeCompany',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => {
                handleDeleteCompany(e.row.allRow.id);
              },
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Deletar"
          onClick={() => {
            navigate('/admin/companies/register', {
              state: { company: e.row.allRow },
            });
          }}
        >
          <FontAwesomeIcon icon={faEdit} color={Default.color.blue} />
        </InvisibleButton>
      </>
    );
  };

  const columns: GridColDef[] = [
    { field: 'allRow', hide: true, filterable: false },

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
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

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
