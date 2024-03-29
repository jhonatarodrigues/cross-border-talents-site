import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  ButtonFooter,
} from './styles';

export default function FooterSite(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentFooter>
      <ContainerSite>
        <Footer>
          <Row>
            <Content>
              <LeftContentFirst>
                <ContentLogo src={LogoWhite} />
              </LeftContentFirst>
              <Nav className="hiddenMobile">
                <Link to="/jobs">
                  <ItemNav>Jobs</ItemNav>
                </Link>
                <Link to="/for-employers">
                  <ItemNav>For Employers</ItemNav>
                </Link>
                <Link to="/talent-pool">
                  <ItemNav>Talent Pool</ItemNav>
                </Link>
                <a href="https://blog.cbtalents.com/">
                  <ItemNav>Blog</ItemNav>
                </a>
              </Nav>
            </Content>
            <Content>
              <a
                href="https://old.cbtalents.com/seal_excellence.png"
                target="_blank"
                rel="noreferrer"
              >
                <Selo src={ImageExcellence1} />
              </a>
              <a
                href="https://old.cbtalents.com/Seal_of_Excellence_2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Selo src={ImageExcellence2} />
              </a>
              <a
                href="https://old.cbtalents.com/Seal_of_Excellence_3.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Selo src={ImageExcellence3} />
              </a>
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
              <Row row>
                <a
                  href="https://web.facebook.com/CBTalents/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </ButtonSocial>
                </a>
                <a
                  href="https://www.linkedin.com/company/crossbordertalents/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </ButtonSocial>
                </a>
                <a
                  href="https://www.instagram.com/crossbordertalents/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonSocial>
                    <FontAwesomeIcon icon={faInstagram} />
                  </ButtonSocial>
                </a>
              </Row>
            </Content>
            <ContentNav>
              <TitleFooter>Cross Border Talents</TitleFooter>

              <LinkFooter>
                Cais da Rocha Conde D’Óbidos Edifício LACS 1350-352 Lisbon,
                Portugal
              </LinkFooter>
              <a href="mailto: info@cbtalents.com">
                <LinkFooter mail>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={Default.color.success}
                    fontSize={12}
                    style={{ marginRight: '0.3125rem' }}
                  />
                  info@cbtalents.com
                </LinkFooter>
              </a>
            </ContentNav>
            <ContentNav className="hiddenMobile">
              <TitleFooter>For employers </TitleFooter>
              <Link to="/admin/login">
                <LinkFooter>Login </LinkFooter>
              </Link>
              <Link to="/admin/login">
                <LinkFooter>Request your access </LinkFooter>
              </Link>
              <Link to="/talent-pool">
                <LinkFooter>Talent Pool </LinkFooter>
              </Link>
              <a
                href="https://blog-cbtalents-com.cloud3.cloubox.com.br/privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkFooter>Privacy Policy</LinkFooter>
              </a>
            </ContentNav>
            <ContentNav className="hiddenMobile">
              <TitleFooter>For candidates </TitleFooter>
              <Link to="/admin/login">
                <LinkFooter>Login </LinkFooter>
              </Link>
              <Link to="/admin/login">
                <LinkFooter>Request your access </LinkFooter>
              </Link>
              <Link to="/jobs">
                <LinkFooter>See jobs </LinkFooter>
              </Link>
            </ContentNav>
            <ContentNav className="hiddenMobile">
              <TitleFooter>Opportunities </TitleFooter>
              <ButtonFooter
                onClick={() => {
                  navigate('/jobs', {
                    state: {
                      department: 'ict',
                    },
                  });
                }}
              >
                <LinkFooter>ICT Jobs </LinkFooter>
              </ButtonFooter>
              <ButtonFooter
                onClick={() => {
                  navigate('/jobs', {
                    state: {
                      department: 'multilingual',
                    },
                  });
                }}
              >
                <LinkFooter>Multilingual Jobs</LinkFooter>
              </ButtonFooter>
              <ButtonFooter
                onClick={() => {
                  navigate('/jobs', {
                    state: {
                      department: 'engineering',
                    },
                  });
                }}
              >
                <LinkFooter>Engineering Jobs</LinkFooter>
              </ButtonFooter>
            </ContentNav>
            <ContentNav className="hiddenMobile">
              <TitleFooter>Institutional </TitleFooter>
              <Link to="/about-us">
                <LinkFooter>About Us</LinkFooter>
              </Link>
              <a href="https://blog-cbtalents-com.cloud3.cloubox.com.br/">
                <LinkFooter>Blog</LinkFooter>
              </a>
              <Link to="/contact">
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

              <div className="visibleMobile">
                <Row>
                  <Default.Space h="0.1875rem" />
                  <CopyrightText>Privacy Policy</CopyrightText>
                  <CopyrightText paddingLeft="1.875rem">
                    Our Teams
                  </CopyrightText>
                  <Default.Space h="0.3125rem" />
                </Row>
                <Row>
                  <CopyrightText paddingLeft="5.625rem">
                    Made with
                  </CopyrightText>{' '}
                  <CopyrightText paddingLeft="0.3125rem" marginMobile>
                    <FontAwesomeIcon icon={faHeart} color="#C7927F" />
                  </CopyrightText>
                  <CopyrightText paddingLeft="0.3125rem">
                    by MINARELLO
                  </CopyrightText>
                </Row>
              </div>

              <div className="hiddenMobile">
                <div>
                  <CopyrightText>Privacy Policy</CopyrightText>
                  <CopyrightText paddingLeft="1.875rem">
                    Our Teams
                  </CopyrightText>
                </div>
                <CopyrightText paddingLeft="5.625rem">Made with</CopyrightText>{' '}
                <CopyrightText paddingLeft="0.3125rem" marginMobile>
                  <FontAwesomeIcon icon={faHeart} color="#C7927F" />
                </CopyrightText>
                <CopyrightText paddingLeft="0.3125rem">
                  by MINARELLO
                </CopyrightText>
              </div>
            </ContentCopyright>
          </Row>
        </Footer>
      </ContainerSite>
    </ContentFooter>
  );
}
