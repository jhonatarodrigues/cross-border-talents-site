import React from 'react';

import Button from '../buttonSite';
import ContainerSite from '../ContainerSite';

import {
  HeaderDefault,
  ContentHeader,
  ContentLogo,
  Nav,
  Ul,
  Li,
  Content,
} from './styles';

export default function Header(): JSX.Element {
  return (
    <HeaderDefault>
      <ContainerSite>
        <ContentHeader>
          <Content>
            <ContentLogo />
            <Nav>
              <Ul>
                <Li>Jobs</Li>
                <Li>For Employers</Li>
                <Li>Talent Pool</Li>
                <Li>Academy</Li>
                <Li>Institutional</Li>
              </Ul>
            </Nav>
          </Content>
          <Content>
            <Button>Register</Button>
            <Button variant="outlined" style={{ marginLeft: '0.625rem' }}>
              Login
            </Button>
          </Content>
        </ContentHeader>
      </ContainerSite>
    </HeaderDefault>
  );
}
