import React, { useEffect, useCallback, useState } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import {
  GetTalentPools,
  ITalentPools,
} from '../../../hooks/admin/useTalentPool';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';
import Default from '../../../default';
import { InvisibleButton } from './style';

export default function TalentPool(): JSX.Element {
  const [talentPool, setTalentPool] = useState<ITalentPools[]>([]);

  const rows: GridRowsProp = talentPool.map((item: ITalentPools) => {
    return {
      allRow: item,

      id: item.id,
      profile: item.profile,
      education: item.education,
      languages: item.languages,
      charge: item.charge,
    };
  });

  const handleGetTalentPool = useCallback(async () => {
    const response = await GetTalentPools();
    if (response && response.talentPools) {
      setTalentPool(response.talentPools);
    }
  }, []);

  const renderActionCell = (e: GridCellParams) => {
    return (
      <InvisibleButton
        title="Update"
        onClick={() => {
          console.log('asdasda----', e);
        }}
      >
        <FontAwesomeIcon icon={faEye} color={Default.color.blue} />
      </InvisibleButton>
    );
  };

  const columns: GridColDef[] = [
    { field: 'allRow', hide: true, filterable: false },

    { field: 'profile', headerName: 'Profile', flex: 1 },
    { field: 'education', headerName: 'education', flex: 1 },
    { field: 'languages', headerName: 'Languages', flex: 1 },
    { field: 'charge', headerName: 'Charge', flex: 1 },

    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: renderActionCell,
    },
  ];

  useEffect(() => {
    handleGetTalentPool();
  }, [handleGetTalentPool]);

  return (
    <ContentPage title={Language.page.talentPool.listTalentPool}>
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
