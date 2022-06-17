import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import LogoWhite from '../../assets/images/logoWhite.png';
import ImageExcellence1 from '../../assets/images/excellence1.png';
import ImageExcellence2 from '../../assets/images/excellence2.png';
import ImageExcellence3 from '../../assets/images/excellence3.png';

import ContainerSite from '../ContainerSite';
import Default from '../../default';
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
  Description,
  TitleFooter,
  ContentNav,
  LinkFooter,
  RowNav,
  ButtonSocial,
  ContentCopyright,
  CopyrightText,
} from './styles';

export default function FooterSite(): JSX.Element {
  return (
    <ContentFooter>
      <ContainerSite>
        <Footer>
          <Row>
            <Content>
              <LeftContentFirst>
                <ContentLogo src={LogoWhite} />
              </LeftContentFirst>
              <Nav>
                <ItemNav>Jobs</ItemNav>
                <ItemNav>For Employers</ItemNav>
                <ItemNav>Talent Pool</ItemNav>
                <ItemNav>Blog</ItemNav>
              </Nav>
            </Content>
            <Content>
              <Selo src={ImageExcellence1} />
              <Selo src={ImageExcellence2} />
              <Selo src={ImageExcellence3} />
            </Content>
          </Row>
          <LineDivider />
          <RowNav>
            <Content columns>
              <Description>
                CBT is a specialist recruitment consultancy with a network of
                recruitment partners across the Globe. We provide permanent and
                talent leasing recruitment solutions for the Engineering, ICT,
                and Multilingual sectors.
              </Description>
              <Row>
                <div>
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </ButtonSocial>
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </ButtonSocial>
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faInstagram} />
                  </ButtonSocial>
                </div>
              </Row>
            </Content>
            <ContentNav>
              <TitleFooter>Cross Border Talents</TitleFooter>

              <LinkFooter>
                Cais da Rocha Conde D’Óbidos Edifício LACS 1350-352 Lisbon,
                Portugal
              </LinkFooter>
              <Link to="mailto: info@cbtalents.com">
                <LinkFooter mail>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={Default.color.success}
                    fontSize={12}
                    style={{ marginRight: '0.3125rem' }}
                  />
                  info@cbtalents.com
                </LinkFooter>
              </Link>
            </ContentNav>
            <ContentNav>
              <TitleFooter>For employers </TitleFooter>
              <Link to="/">
                <LinkFooter>Login </LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Request your access </LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Talent Pool </LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Privacy Policy</LinkFooter>
              </Link>
            </ContentNav>
            <ContentNav>
              <TitleFooter>For candidates </TitleFooter>
              <Link to="/">
                <LinkFooter>Login </LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Request your access </LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>See jobs </LinkFooter>
              </Link>
            </ContentNav>
            <ContentNav>
              <TitleFooter>Opportunities </TitleFooter>
              <Link to="/">
                <LinkFooter>ICT Jobs </LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Multilingual Jobs</LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Engineering Jobs</LinkFooter>
              </Link>
            </ContentNav>
            <ContentNav>
              <TitleFooter>Institutional </TitleFooter>
              <Link to="/">
                <LinkFooter>About Us</LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Blog</LinkFooter>
              </Link>
              <Link to="/">
                <LinkFooter>Contact</LinkFooter>
              </Link>
            </ContentNav>
          </RowNav>
          <LineDivider />
          <Row>
            <ContentCopyright>
              <CopyrightText>
                © Cross Border Talents - All rights reserved.
              </CopyrightText>
              <div>
                <Row>
                  <CopyrightText>Privacy Policy</CopyrightText>
                  <CopyrightText paddingLeft="1.875rem">
                    Our Teams
                  </CopyrightText>
                  <CopyrightText paddingLeft="5.625rem">
                    Made with
                  </CopyrightText>{' '}
                  <CopyrightText paddingLeft="0.3125rem">
                    <FontAwesomeIcon icon={faHeart} color="#C7927F" />
                  </CopyrightText>
                  <CopyrightText paddingLeft="0.3125rem">
                    by MINARELLO
                  </CopyrightText>
                </Row>
              </div>
            </ContentCopyright>
          </Row>
        </Footer>
      </ContainerSite>
    </ContentFooter>
  );
}
