import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../buttonSite';

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
  ContentButtons,
  ContentSite,
  ContainerContentSite,
} from './styles';

interface IProps {
  transparent?: boolean;
}

export default function Header({ transparent }: IProps): JSX.Element {
  return (
    <HeaderDefault transparent={transparent}>
      <ContentLogo>
        <Link to="/">
          <ContentLogoImage src={logo} alt="Logo" />
        </Link>
      </ContentLogo>
      <ContainerContentSite>
        <ContentSite>
          <ContentHeader>
            <Content>
              <Nav>
                <Ul>
                  <Li>
                    <Link to="/jobs">Jobs</Link>
                  </Li>
                  <Li>
                    <Link to="/for-employers">For Employers</Link>
                  </Li>
                  <Li>
                    <Link to="/talent-pool">Talent Pool</Link>
                  </Li>
                  <Li>
                    <Link to="/academy">Academy</Link>
                  </Li>
                  <Li>
                    <Dropdown>
                      <div>Institutional</div>
                      <ListDropdown className="listDropdown">
                        <ListDropdownItem>
                          <a href="https://blog-cbtalents-com.cloud3.cloubox.com.br/">
                            Blog
                          </a>
                        </ListDropdownItem>
                        <ListDropdownItem>
                          <Link to="/about-us">About Us</Link>
                        </ListDropdownItem>
                        <ListDropdownItem>
                          <Link to="/testimonials">Testimonials</Link>
                        </ListDropdownItem>
                        <ListDropdownItem>
                          <Link to="/contact">Contact</Link>
                        </ListDropdownItem>
                      </ListDropdown>
                    </Dropdown>
                  </Li>
                </Ul>
              </Nav>
            </Content>
          </ContentHeader>
        </ContentSite>
      </ContainerContentSite>
      <ContentButtons>
        <Link
          to={{
            pathname: '/admin/login',
          }}
          state={{
            register: true,
          }}
        >
          <Button>Register</Button>
        </Link>
        <Link to="/admin/login">
          <Button variant="outlined" style={{ marginLeft: '0.625rem' }}>
            Login
          </Button>
        </Link>
      </ContentButtons>
    </HeaderDefault>
  );
}

Header.defaultProps = {
  transparent: false,
};
