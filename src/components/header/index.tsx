import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Default from '../../default';
import {
  ContainerHeader,
  Logo,
  ButtonUser,
  ContainerSanduich,
  SanduichLine,
  Content,
  ContainerHeaderFull,
  ContentButton,
  NameUser,
  NameBusiness,
} from './styles';

export default function Header(): JSX.Element {
  const toogleNav = useCallback(() => {
    console.log('aqui');
  }, []);

  return (
    <ContainerHeaderFull>
      <ContainerHeader>
        <Content>
          {/* <ContainerSanduich onClick={() => toogleNav()}>
            <SanduichLine first openMain />
            <SanduichLine openMain />
            <SanduichLine openMain />
          </ContainerSanduich> */}
          <NameBusiness>Cross Border Talents</NameBusiness>
        </Content>
        <ContentButton>
          <NameUser>Hello, Jhon Due</NameUser>
          <ButtonUser>
            <FontAwesomeIcon icon={faUser} />
          </ButtonUser>
        </ContentButton>
      </ContainerHeader>
    </ContainerHeaderFull>
  );
}
