import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthTypes } from '../../store/ducks/auth/types';
import {
  ContainerHeader,
  ButtonUser,
  Content,
  ContainerHeaderFull,
  ContentButton,
  NameUser,
  NameBusiness,
  Dropdown,
  DropdownItem,
} from './styles';

export default function Header(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <Dropdown className="dropdownUser">
              <DropdownItem
                onClick={() => {
                  dispatch({
                    type: AuthTypes.LOAD_LOGOUT,
                  });
                  navigate('/admin/login');
                }}
              >
                Logout
              </DropdownItem>
            </Dropdown>
          </ButtonUser>
        </ContentButton>
      </ContainerHeader>
    </ContainerHeaderFull>
  );
}
