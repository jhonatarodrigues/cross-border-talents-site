import React from 'react';

import Button from '../buttonSite';
import ContainerSite from '../ContainerSite';

import logo from '../../assets/images/logo.png';
import {
  HeaderDefault,
  ContentHeader,
  ContentLogo,
  Nav,
  Ul,
  Li,
  Content,
  ContentLogoImage,
} from './styles';

interface IProps {
  transparent?: boolean;
}

export default function Header({ transparent }: IProps): JSX.Element {
  return (
    <HeaderDefault transparent={transparent}>
      <ContainerSite>
        <ContentHeader>
          <Content>
            <ContentLogo>
              <ContentLogoImage src={logo} alt="Logo" />
            </ContentLogo>
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

Header.defaultProps = {
  transparent: false,
};
