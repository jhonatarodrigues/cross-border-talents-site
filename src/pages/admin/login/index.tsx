import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../../store';
import { AuthTypes } from '../../../store/ducks/auth/types';
import Input from '../../../components/input';
import Button from '../../../components/button';

import {
  LoginPageContainer,
  ContentLogin,
  IconLogin,
  TitleLogin,
  Space,
} from './style';

export default function Login(): JSX.Element {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: ApplicationState) => state);

  const handleLogin = useCallback(() => {
    console.log('Login');
    dispatch({
      type: AuthTypes.LOAD_REQUEST,
      username: 'aaaa',
      password: '123456',
    });
  }, []);

  return (
    <LoginPageContainer>
      <ContentLogin>
        <IconLogin>
          <FontAwesomeIcon icon={faUser} />
        </IconLogin>
        <TitleLogin>Sign In</TitleLogin>

        <Input label="User" />
        <Input label="Password" />

        <Button onClick={() => handleLogin()}>Sign In</Button>
        <Space />
        <Button variant="text">Forgot password?</Button>
      </ContentLogin>
    </LoginPageContainer>
  );
}
