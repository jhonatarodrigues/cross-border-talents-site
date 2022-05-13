import React, { useEffect, useCallback, useState } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridCellParams,
} from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  GetTalentPools,
  ITalentPools,
} from '../../../hooks/admin/useTalentPool';
import ContentPage from '../../../components/contentPage';
import Modal from '../../../components/modal';
import Language from '../../../language';
import Default from '../../../default';
import {
  AddTalentPoolInterest,
  CheckTalentPoolInterest,
} from '../../../hooks/admin/useTalentPoolInterest';
import CustomModal from '../../../components/CustomModal';
import Section from '../../../components/section';
import { InvisibleButton, ContentModal } from './style';

export default function TalentPool(): JSX.Element {
  const [talentPool, setTalentPool] = useState<ITalentPools[]>([]);
  const [modalDetails, setModalDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ITalentPools>();
  const [checkTalentPoolInterest, setCheckTalentPoolInterest] = useState(false);

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

  const handleHaveInterest = useCallback(async (item: ITalentPools) => {
    const response = await AddTalentPoolInterest({
      idTalentPool: item.id,
    });

    if (response.data.addTalentPoolInterest.id) {
      Modal({
        title: 'Success',
        icon: 'success',
        keyType: 'addTalentPoolInterest',
      });
    }
  }, []);

  const handleOpenModalDetails = useCallback(async () => {
    if (!selectedRow) {
      return;
    }
    setCheckTalentPoolInterest(false);

    const response = await CheckTalentPoolInterest({
      idTalentPool: selectedRow.id,
    });

    setCheckTalentPoolInterest(response.data.talentPoolInterests);
    setModalDetails(true);
  }, [selectedRow]);

  const renderActionCell = (e: GridCellParams) => {
    return (
      <>
        <InvisibleButton
          title="Have Interest"
          onClick={() => {
            handleHaveInterest(e.row.allRow);
          }}
        >
          <FontAwesomeIcon icon={faPlus} color={Default.color.blue} />
        </InvisibleButton>
        <InvisibleButton
          title="Information"
          onClick={() => {
            setSelectedRow(e.row.allRow);

            handleOpenModalDetails();
          }}
        >
          <FontAwesomeIcon icon={faEye} color={Default.color.blue} />
        </InvisibleButton>
      </>
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

  const renderModalDetails = useCallback(() => {
    if (!modalDetails || !selectedRow) {
      return <div />;
    }

    const name = checkTalentPoolInterest ? selectedRow?.user.name : '******';
    const lastName = checkTalentPoolInterest
      ? selectedRow?.user.lastName
      : '******';
    const email = checkTalentPoolInterest ? selectedRow?.user.email : '******';
    const phone = checkTalentPoolInterest ? selectedRow?.user.phone : '******';

    return (
      <CustomModal onClose={() => setModalDetails(false)}>
        <ContentModal>
          <Section label={Language.informationCandidate}>
            <Default.Column>
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Nome:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>{name}</Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Last Name:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {lastName}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Email:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>{email}</Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Phone:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>{phone}</Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />

              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Charge:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.charge}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Profile:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.profile}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Observation:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.observation}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Software:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.softwares}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Education:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.education}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Experience:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.experience}
                </Default.Text>
              </Default.Row>
              <Default.Space h="0.5rem" />
              <Default.Row alignItens="center">
                <Default.Title2 color={Default.color.blueOriginal}>
                  Language:&nbsp;
                </Default.Title2>
                <Default.Text color={Default.color.gray}>
                  {selectedRow?.languages}
                </Default.Text>
              </Default.Row>
            </Default.Column>
          </Section>
        </ContentModal>
      </CustomModal>
    );
  }, [modalDetails, selectedRow, checkTalentPoolInterest]);

  return (
    <ContentPage title={Language.page.talentPool.listTalentPool}>
      {renderModalDetails()}
      <DataGrid rows={rows} columns={columns} autoHeight />
    </ContentPage>
  );
}
