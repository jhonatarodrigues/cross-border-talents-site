import React from 'react';

import ContainerSite from '../ContainerSite';

import {
  ContentFooter,
  Row,
  LeftContentFirst,
  ContentLogo,
  Nav,
  ItemNav,
  Content,
  Selo,
  LineDivider,
  Footer,
} from './styles';

export default function FooterSite(): JSX.Element {
  return (
    <ContentFooter>
      <ContainerSite>
        <Footer>
          <Row>
            <Content>
              <LeftContentFirst>
                <ContentLogo />
              </LeftContentFirst>
              <Nav>
                <ItemNav>Jobs</ItemNav>
                <ItemNav>For Employers</ItemNav>
                <ItemNav>Talent Pool</ItemNav>
                <ItemNav>Blog</ItemNav>
              </Nav>
            </Content>
            <Content>
              <Selo />
              <Selo />
              <Selo />
            </Content>
          </Row>
          <LineDivider />
        </Footer>
      </ContainerSite>
    </ContentFooter>
  );
}
