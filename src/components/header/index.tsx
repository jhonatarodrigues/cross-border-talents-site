import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthTypes } from '../../store/ducks/auth/types';
import { ApplicationState } from '../../store';
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
  const { auth } = useSelector((state: ApplicationState) => state);

  return (
    <ContainerHeaderFull>
      <ContainerHeader>
        <Content>
          <NameBusiness>Cross Border Talents</NameBusiness>
        </Content>
        <ContentButton>
          <NameUser>Hello, {auth.user.name}</NameUser>
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
