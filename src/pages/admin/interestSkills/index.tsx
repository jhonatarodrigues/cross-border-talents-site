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
  GetInterestSkills,
  IInterestSkills,
  DeleteInterestSkills,
} from '../../../hooks/admin/useInterestSkills';
import ContentPage from '../../../components/contentPage';
import Language from '../../../language';
import Default from '../../../default';
import Modal from '../../../components/modal';
import { InvisibleButton } from './style';

export default function InterestSkills(): JSX.Element {
  const navigate = useNavigate();
  const [interestSkills, setInterestSkills] = useState<IInterestSkills[]>([]);
  const rows: GridRowsProp = interestSkills.map((item: IInterestSkills) => ({
    id: item.id,
    name: item.name,
  }));
  const handleGetInterestSkills = useCallback(async () => {
    const response = await GetInterestSkills();
    if (response && response.interestSkills) {
      setInterestSkills(response.interestSkills);
    }
  }, []);

  const handleDeleteInterest = useCallback(
    (id: string) => {
      DeleteInterestSkills(id)
        .then(response => {
          if (response.data.removeInterestSkill) {
            Modal({
              keyType: 'removeInterestSkills',
              icon: 'success',
            });
            handleGetInterestSkills();
          } else {
            Modal({
              keyType: 'removeInterestSkills',
              icon: 'error',
            });
          }
        })
        .catch(() => {
          Modal({
            keyType: 'removeInterestSkills',
            icon: 'error',
          });
        });
    },
    [handleGetInterestSkills],
  );

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Delete"
          onClick={() => {
            Modal({
              keyType: 'removeUser',
              icon: 'info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes',
              onClick: () => handleDeleteInterest(e.row.id),
            });
          }}
        >
          <FontAwesomeIcon icon={faClose} color={Default.color.red} />
        </InvisibleButton>
        <InvisibleButton
          title="Update"
          onClick={() => {
            navigate('/admin/departament/register', {
              state: { departament: e.row },
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
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

  useEffect(() => {
    handleGetInterestSkills();
  }, [handleGetInterestSkills]);

  return (
    <ContentPage
      title={Language.page.interestSkills.listInterestSkills}
      buttonNewLabel={Language.page.interestSkills.newInterestSkills}
      buttonNewClick={() => navigate('/admin/departament/register')}
    >
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
