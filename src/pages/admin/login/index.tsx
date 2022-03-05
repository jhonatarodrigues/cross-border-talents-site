import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
  return (
    <LoginPageContainer>
      <ContentLogin>
        <IconLogin>
          <FontAwesomeIcon icon={faUser} />
        </IconLogin>
        <TitleLogin>Sign In</TitleLogin>

        <Input label="User" />
        <Input label="Password" />

        <Button>Sign In</Button>
        <Space />
        <Button variant="text">Forgot password?</Button>
      </ContentLogin>
    </LoginPageContainer>
  );
}
