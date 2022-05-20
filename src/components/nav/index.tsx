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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Default from '../../default';
import { AuthTypes } from '../../store/ducks/auth/types';
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
  ButtonInvisible,
  ContentICon,
} from './styles';

interface INavItens {
  title: string;
  icon: IconDefinition;
  route: string;
}

export default function Nav(): JSX.Element {
  const location = useLocation();
  const activeRoute = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state: ApplicationState) => state);

  const navItens: INavItens[] = [
    ...(auth.user.accessLevel !== 4
      ? [
          {
            title: `Admin users`,
            icon: faUser,
            route: '/admin/user',
          },
          {
            title: `Team Leader`,
            icon: faUserTie,
            route: '/admin/teamLeader',
          },
          {
            title: `Recruiters`,
            icon: faUserPlus,
            route: '/admin/recruiter',
          },
          {
            title: `Companies`,
            icon: faBuilding,
            route: '/admin/companies',
          },
          {
            title: `Candidates`,
            icon: faUserCheck,
            route: '/admin/candidates',
          },
          {
            title: `Department`,
            icon: faChessPawn,
            route: '/admin/departament',
          },
          {
            title: `Jobs`,
            icon: faSuitcase,
            route: '/admin/jobs',
          },
          {
            title: `Testimonials`,
            icon: faMessage,
            route: '/admin/testimonials',
          },
          {
            title: `Approach`,
            icon: faHand,
            route: '/',
          },
        ]
      : []),

    {
      title: `Talent Pool`,
      icon: faStar,
      route: '/admin/talent-pool',
    },
  ];

  return (
    <ContainerNav openMain>
      <ContentLogo>
        <LogoImage src={Logo} />
      </ContentLogo>
      <ContentNav>
        {navItens.map((nav, index) => (
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
        ))}
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

        <ContentDivider>
          <Divider />
        </ContentDivider>
        <ButtonInvisible
          onClick={() => {
            dispatch({
              type: AuthTypes.LOAD_LOGOUT,
            });
            navigate('/admin/login');
          }}
        >
          <ItemNav key="logout" openMain>
            <ContentItemText>
              <ContainerTitle openMain>
                <ItemIcon
                  openMain
                  icon={faQuestion}
                  color={Default.color.blueLight}
                />
                <TextNav openMain>Logout</TextNav>
              </ContainerTitle>
            </ContentItemText>
          </ItemNav>
        </ButtonInvisible>
      </ContentNav>
    </ContainerNav>
  );
}
