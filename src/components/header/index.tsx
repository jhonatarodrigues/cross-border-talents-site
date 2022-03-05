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
} from './styles';

export default function Header(): JSX.Element {
  const toogleNav = useCallback(() => {
    console.log('aqui');
  }, []);

  return (
    <ContainerHeaderFull>
      <ContainerHeader>
        <Content>
          <ContainerSanduich onClick={() => toogleNav()}>
            <SanduichLine first openMain />
            <SanduichLine openMain />
            <SanduichLine openMain />
          </ContainerSanduich>
          <Logo />
        </Content>
        <ButtonUser>
          <FontAwesomeIcon icon={faUser} color={Default.color.blue} />
        </ButtonUser>
      </ContainerHeader>
    </ContainerHeaderFull>
  );
}
