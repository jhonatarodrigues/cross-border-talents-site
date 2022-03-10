import React, { useCallback, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

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

interface IForm {
  user: string;
  password: string;
}

export default function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: ApplicationState) => state);

  const handleOpenModal = useCallback(async (error: string) => {
    const MySwal = withReactContent(Swal);

    await MySwal.fire({
      title: <strong>Error</strong>,
      html: error,
      icon: 'error',
    });
  }, []);

  useEffect(() => {
    console.log('auth', auth);

    if (auth.error && auth.message) {
      handleOpenModal(auth.message);
      dispatch({
        type: AuthTypes.LOAD_LOGOUT,
      });
    }

    if (auth.token) {
      navigate('/admin/user');
    }
  }, [auth, handleOpenModal, dispatch, navigate]);

  const handleLogin: SubmitHandler<IForm> = useCallback(
    async (data: IForm) => {
      try {
        const schema = Yup.object().shape({
          user: Yup.string().required(),
          password: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch({
          type: AuthTypes.LOAD_REQUEST,
          username: data.user,
          password: data.password,
        });
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRef.current?.setErrors(validationErrors);
        }
      }
    },
    [dispatch],
  );

  return (
    <LoginPageContainer>
      <ContentLogin>
        <IconLogin>
          <FontAwesomeIcon icon={faUser} />
        </IconLogin>
        <TitleLogin>Sign In</TitleLogin>
        <Form
          ref={formRef}
          onSubmit={handleLogin}
          onClick={() => formRef.current?.setErrors({})}
        >
          <Input name="user" label="User" />
          <Input name="password" label="Password" type="password" />

          <Button type="submit">Sign In</Button>
        </Form>
        {auth.loading && (
          <>
            <Space />
            <CircularProgress />
          </>
        )}

        <Space />
        <Button variant="text">Forgot password?</Button>
      </ContentLogin>
    </LoginPageContainer>
  );
}
