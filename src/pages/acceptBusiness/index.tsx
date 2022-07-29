import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import { SetAcceptBusiness } from '../../hooks/admin/useCompanies';
import Modal from '../../components/modal';

import { Banner, Title } from './style';

export default function AcceptBusiness(): JSX.Element {
  const params = useParams();

  const handleSubmit = useCallback(() => {
    if (!params.token) {
      return;
    }
    SetAcceptBusiness({
      token: params.token,
    }).then(response => {
      if (response.data.AcceptBusiness) {
        Modal({
          keyType: 'tokenBusinessAccept',
          icon: 'success',
        });
      } else {
        Modal({
          keyType: 'tokenBusinessAccept',
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
          <Title>Await to verify your token to active business</Title>
        </ContainerSite>
      </Banner>
    </ContentSite>
  );
}
