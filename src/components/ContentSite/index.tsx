import React, { useCallback } from 'react';

import Header from '../headerSite';
import FooterSite from '../footersite';

import { Container, ContentPage } from './styles';

interface IProps {
  children: React.ReactNode;
  headerTransparent?: boolean;
}

export default function ContentSite({
  children,
  headerTransparent,
}: IProps): JSX.Element {
  return (
    <Container>
      <Header transparent={headerTransparent} />
      <ContentPage>{children}</ContentPage>
      <FooterSite />
    </Container>
  );
}
ContentSite.defaultProps = {
  headerTransparent: false,
};
