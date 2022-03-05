import React, { useEffect, useCallback, useState } from 'react';
import {
  faUser,
  IconDefinition,
  faTruck,
  faUserTimes,
  faBuilding,
  faArrowRight,
  faBox,
  faListAlt,
  faEnvelope,
  faImages,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
// import SweetAlert from 'react-bootstrap-sweetalert';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Default from '../../default';

// import languageSelected from '../../language/index';
// import Default from '../../default';
// import { AuthTypes } from '../../store/ducks/auth/types';
// import { ApplicationState } from '../../store';
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
      title: `teste`,
      icon: faImages,
      route: '/banners',
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
                <ItemIcon openMain icon={nav.icon} color={Default.color.blue} />
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
              Sair
            </TextNav>
          </ContainerTitle>
        </ItemNav>
      </ContentFooter>
    </ContainerNav>
  );
}
