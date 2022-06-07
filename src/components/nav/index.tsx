import React from 'react';
import {
  faUser,
  IconDefinition,
  faUserCheck,
  faUserPlus,
  faBuilding,
  faChessPawn,
  faMessage,
  faStar,
  faQuestion,
  faComment,
  faHand,
  faSuitcase,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Default from '../../default';
import Logo from '../../assets/images/logo.png';
import { ApplicationState } from '../../store';
import {
  ContainerNav,
  ContentNav,
  ItemNav,
  TextNav,
  ItemIcon,
  ContainerTitle,
  ContentLogo,
  LogoImage,
  ContentItemText,
  LineActive,
  Divider,
  ContentDivider,
  ContentICon,
} from './styles';

interface INavItens {
  title: string;
  icon: IconDefinition;
  route: string;
  accessLevel: number[];
}

export default function Nav(): JSX.Element {
  const location = useLocation();
  const activeRoute = location.pathname;
  const { auth } = useSelector((state: ApplicationState) => state);

  /* access level
     1 - admin
     2 - teamLeader
     3 - recruiter
     4 - companies
     5 - candidates
  */
  const navItens: INavItens[] = [
    {
      title: `Admin users`,
      icon: faUser,
      route: '/admin/user',
      accessLevel: [1],
    },
    {
      title: `Team Leader`,
      icon: faUserTie,
      route: '/admin/teamLeader',
      accessLevel: [1],
    },
    {
      title: `Recruiters`,
      icon: faUserPlus,
      route: '/admin/recruiter',
      accessLevel: [1],
    },
    {
      title: `Companies`,
      icon: faBuilding,
      route: '/admin/companies',
      accessLevel: [1, 2],
    },
    {
      title: `Candidates`,
      icon: faUserCheck,
      route: '/admin/candidates',
      accessLevel: [1, 2, 3, 4, 5],
    },
    {
      title: `Department`,
      icon: faChessPawn,
      route: '/admin/departament',
      accessLevel: [1],
    },
    {
      title: `Jobs`,
      icon: faSuitcase,
      route: '/admin/jobs',
      accessLevel: [1],
    },
    {
      title: `Testimonials`,
      icon: faMessage,
      route: '/admin/testimonials',
      accessLevel: [1, 2, 3],
    },
    {
      title: `Talent Pool`,
      icon: faStar,
      route: '/admin/talent-pool',
      accessLevel: [1, 2, 4],
    },
  ];

  return (
    <ContainerNav openMain>
      <ContentLogo>
        <LogoImage src={Logo} />
      </ContentLogo>
      <ContentNav>
        {navItens.map((nav, index) => {
          if (!nav.accessLevel.includes(auth.user.accessLevel)) {
            return null;
          }

          return (
            <Link
              to={nav.route}
              key={nav.route}
              style={{ textDecoration: 'none' }}
            >
              <ItemNav
                key={nav.title}
                first={index === 0}
                active={nav.route === activeRoute}
                openMain
              >
                <ContentItemText>
                  <ContainerTitle openMain>
                    <ContentICon>
                      <ItemIcon
                        openMain
                        icon={nav.icon}
                        color={Default.color.blueLight}
                      />
                    </ContentICon>
                    <TextNav active={nav.route === activeRoute} openMain>
                      {nav.title}
                    </TextNav>
                  </ContainerTitle>
                  {nav.route === activeRoute && <LineActive />}
                </ContentItemText>
              </ItemNav>
            </Link>
          );
        })}
        {(auth.user.accessLevel === 1 ||
          auth.user.accessLevel === 2 ||
          auth.user.accessLevel === 3) && (
          <>
            <ContentDivider>
              <Divider />
            </ContentDivider>
            <Link
              to="http://google.com"
              key="linkFAQs"
              style={{ textDecoration: 'none' }}
            >
              <ItemNav key="linkFAQsItem" openMain>
                <ContentItemText>
                  <ContainerTitle openMain>
                    <ItemIcon
                      openMain
                      icon={faQuestion}
                      color={Default.color.blueLight}
                    />
                    <TextNav openMain>FAQs</TextNav>
                  </ContainerTitle>
                </ContentItemText>
              </ItemNav>
            </Link>
            <Link
              to="http://google.com"
              key="linkHelpCenter"
              style={{ textDecoration: 'none' }}
            >
              <ItemNav key="linkHelpCenterItem" openMain>
                <ContentItemText>
                  <ContainerTitle openMain>
                    <ItemIcon
                      openMain
                      icon={faComment}
                      color={Default.color.blueLight}
                    />
                    <TextNav openMain>Help Center</TextNav>
                  </ContainerTitle>
                </ContentItemText>
              </ItemNav>
            </Link>
          </>
        )}
      </ContentNav>
    </ContainerNav>
  );
}
