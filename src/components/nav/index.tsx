import React, { useCallback } from 'react';
import {
  faUser,
  IconDefinition,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from 'react-router-dom';
import Default from '../../default';

// import languageSelected from '../../language/index';
import {
  ContainerNav,
  ContentUser,
  ContentImage,
  ImageName,
  ContentInfoUser,
  Name,
  ContentNav,
  ContentFooter,
  ItemNav,
  TextNav,
  ItemIcon,
  ItemLine,
  ContainerTitle,
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
      title: `teste--`,
      icon: faUser,
      route: '/admin/teste',
    },
  ];

  const openModalLogout = useCallback(() => {
    // setModalLogout(true);
  }, []);

  return (
    <ContainerNav openMain>
      <ContentUser openMain>
        <ContentImage openMain>
          <ImageName openMain>JR</ImageName>
        </ContentImage>

        <ContentInfoUser>
          <Name>Roberto nunes</Name>
        </ContentInfoUser>
      </ContentUser>
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
              <ContainerTitle openMain>
                {index === 0 && <ItemLine />}
                <ItemIcon
                  openMain
                  icon={nav.icon}
                  color={
                    nav.route === activeRoute
                      ? Default.color.white
                      : Default.color.blue
                  }
                />
                <TextNav active={nav.route === activeRoute} openMain>
                  {nav.title}
                </TextNav>
              </ContainerTitle>
            </ItemNav>
          </Link>
        ))}
      </ContentNav>
      <ContentFooter>
        <ItemNav onClick={() => openModalLogout()} openMain>
          <ContainerTitle openMain>
            <ItemIcon openMain icon={faUserTimes} color={Default.color.white} />

            <TextNav openMain white>
              Exit
            </TextNav>
          </ContainerTitle>
        </ItemNav>
      </ContentFooter>
    </ContainerNav>
  );
}
