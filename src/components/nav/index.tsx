import React from 'react';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

import Default from '../../default';
import Logo from '../../assets/images/logo.png';
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
} from './styles';

interface INavItens {
  title: string;
  icon: IconDefinition;
  route: string;
}

export default function Nav(): JSX.Element {
  const location = useLocation();
  const activeRoute = location.pathname;

  const navItens: INavItens[] = [
    {
      title: `User`,
      icon: faUser,
      route: '/admin/user',
    },
    {
      title: `Team Leader`,
      icon: faUser,
      route: '/admin/teamLeader',
    },
    {
      title: `Recruiters`,
      icon: faUser,
      route: '/admin/recruiter',
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
                  <ItemIcon
                    openMain
                    icon={nav.icon}
                    color={Default.color.blueLight}
                  />
                  <TextNav active={nav.route === activeRoute} openMain>
                    {nav.title}
                  </TextNav>
                </ContainerTitle>
                {nav.route === activeRoute && <LineActive />}
              </ContentItemText>
            </ItemNav>
          </Link>
        ))}
      </ContentNav>
    </ContainerNav>
  );
}
