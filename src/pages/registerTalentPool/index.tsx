import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import { AcceptTokenTalentPool } from '../../hooks/admin/useTalentPool';
import Modal from '../../components/modal';

import { Banner, Title } from './style';

export default function RegisterTalentPool(): JSX.Element {
  const params = useParams();

  const handleSubmit = useCallback(() => {
    if (!params.token) {
      return;
    }

    AcceptTokenTalentPool({
      token: params.token,
    }).then(response => {
      if (response.data.addUserTalentPool) {
        Modal({
          keyType: 'tokenTalentPool',
          icon: 'success',
        });
      } else {
        Modal({
          keyType: 'tokenTalentPool',
          icon: 'error',
        });
      }
    });
  }, [params]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Title>Await to verify your token</Title>
        </ContainerSite>
      </Banner>
    </ContentSite>
  );
}
