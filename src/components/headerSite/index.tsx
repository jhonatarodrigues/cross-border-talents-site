import React from 'react';

import { Link } from 'react-router-dom';
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
  Dropdown,
  ListDropdown,
  ListDropdownItem,
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
              <Link to="/">
                <ContentLogoImage src={logo} alt="Logo" />
              </Link>
            </ContentLogo>
            <Nav>
              <Ul>
                <Li>
                  <Link to="/for-employers">Jobs</Link>
                </Li>
                <Li>
                  <Link to="/talent-pool">For Employers</Link>
                </Li>
                <Li>
                  <Link to="/top-candidates">Talent Pool</Link>
                </Li>
                <Li>
                  <Link to="/our-it-academy">Academy</Link>
                </Li>
                <Li>
                  <Dropdown>
                    <div>Institutional</div>
                    <ListDropdown className="listDropdown">
                      <ListDropdownItem>
                        <Link to="/blog">Blog</Link>
                      </ListDropdownItem>
                      <ListDropdownItem>
                        <Link to="/about-us">About Us</Link>
                      </ListDropdownItem>
                      <ListDropdownItem>
                        <Link to="/testimonials">Testimonials</Link>
                      </ListDropdownItem>
                    </ListDropdown>
                  </Dropdown>
                </Li>
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
