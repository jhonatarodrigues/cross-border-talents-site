import React, { useCallback } from 'react';

import Header from '../headerSite';

import { Container, ContentPage } from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function ContentSite({ children }: IProps): JSX.Element {
  return (
    <Container>
      <Header />
      <ContentPage>{children}</ContentPage>
    </Container>
  );
}
