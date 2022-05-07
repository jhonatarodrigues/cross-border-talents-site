import React, { useCallback, useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, Link } from 'react-router-dom';
import Default from '../../../default';
import ButtonSite from '../../../components/buttonSite';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import Language from '../../../language';

import { ApplicationState } from '../../../store';
import { AuthTypes } from '../../../store/ducks/auth/types';
import Input from '../../../components/input';
import LogoImage from '../../../assets/images/logo.png';

import {
  LoginPageContainer,
  IconLogin,
  ContentButton,
  FormStyled,
  ButtonForgotPassword,
  Logo,
  ContentImage,
  ContentLogo,
  ContentInitLogo,
  BaseLogin,
  BaseLoginCreateAccountLinkSpan,
  BaseLoginCreateAccountLink,
  BaseLoginContent,
  InputRadio,
  ContentSwitch,
  ContentSwitchItem,
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
  const [createAccount, setCreateAccount] = useState(false);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);

  const handleOpenModal = useCallback(async (error: string) => {
    const MySwal = withReactContent(Swal);

    await MySwal.fire({
      title: <strong>Error</strong>,
      html: error,
      icon: 'error',
    });
  }, []);

  useEffect(() => {
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
  const renderLogin = useCallback(() => {
    return (
      <>
        <BaseLoginContent>
          <Default.Title2 color={Default.color.blueOriginal}>
            Login
          </Default.Title2>
          <Default.Space h="1.25rem" />
          <FormStyled
            ref={formRef}
            onSubmit={handleLogin}
            onClick={() => formRef.current?.setErrors({})}
          >
            <Input name="user" label="E-mail" />
            <Input name="password" label="Password" type="password" />

            <ContentButton>
              <ButtonForgotPassword type="button">
                Forgot your password?
              </ButtonForgotPassword>
              <ButtonSite type="submit" bgColor={Default.color.success}>
                Login
              </ButtonSite>
            </ContentButton>
          </FormStyled>
          {auth.loading && (
            <>
              <Default.Space h="1.875rem" />
              <Default.Column style={{ textAlign: 'center' }}>
                <CircularProgress />
              </Default.Column>
            </>
          )}
        </BaseLoginContent>
        <BaseLoginCreateAccountLink>
          <Default.Text2 color={Default.color.white}>
            Don’t have an account?{' '}
            <BaseLoginCreateAccountLinkSpan
              onClick={() => setCreateAccount(true)}
            >
              Request your access here
            </BaseLoginCreateAccountLinkSpan>
          </Default.Text2>
        </BaseLoginCreateAccountLink>
      </>
    );
  }, [auth, handleLogin]);
  const renderCreateAccount = useCallback(() => {
    return (
      <>
        <BaseLoginContent>
          <Default.Title2 color={Default.color.blueOriginal}>
            Register for free
          </Default.Title2>
          <Default.Space h="1.25rem" />
          <ContentSwitch>
            <ContentSwitchItem active>I’m a Talent</ContentSwitchItem>
            <ContentSwitchItem active={false}>I’m a Company</ContentSwitchItem>
          </ContentSwitch>

          <Default.Space h="1.25rem" />
          <FormStyled
            ref={formRef}
            onSubmit={handleLogin}
            onClick={() => formRef.current?.setErrors({})}
          >
            <Input name="email" label="E-mail" />
            <Input name="firstName" label="First Name" />
            <Input name="lastName" label="Last Name" />
            <Input name="media" label="Social media URL" />
            <InputDropDown
              name="englishLevel"
              label={Language.fields.englishLevel}
              options={optionsInterestSkills}
            />
            <InputDropDown
              name="englishLevel"
              label={Language.fields.department}
              options={optionsInterestSkills}
            />

            <Default.Row>
              <label htmlFor="privacyPolicy">
                <InputRadio
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="radio"
                />
                <Default.Text2 color={Default.color.gray}>
                  I have read and agree to the Privacy Policy terms.
                </Default.Text2>
              </label>
            </Default.Row>
            <Default.Space h="0.3125rem" />
            <Default.Row>
              <label htmlFor="allowTalentPool">
                <InputRadio
                  id="allowTalentPool"
                  name="allowTalentPool"
                  type="radio"
                />
                <Default.Text2 color={Default.color.gray}>
                  Allow to share my informations in the Talent Pool.
                </Default.Text2>
              </label>
            </Default.Row>
            <Default.Space h="1.25rem" />

            <ContentButton>
              <ButtonForgotPassword type="button" />
              <ButtonSite type="submit" bgColor={Default.color.success}>
                Login
              </ButtonSite>
            </ContentButton>
          </FormStyled>
          {auth.loading && (
            <>
              <Default.Space h="1.875rem" />
              <Default.Column style={{ textAlign: 'center' }}>
                <CircularProgress />
              </Default.Column>
            </>
          )}
        </BaseLoginContent>
        <BaseLoginCreateAccountLink>
          <Default.Text2 color={Default.color.white}>
            Don’t have an account?{' '}
            <BaseLoginCreateAccountLinkSpan
              onClick={() => setCreateAccount(false)}
            >
              Request your access here
            </BaseLoginCreateAccountLinkSpan>
          </Default.Text2>
        </BaseLoginCreateAccountLink>
      </>
    );
  }, [auth, handleLogin]);

  return (
    <LoginPageContainer>
      <ContentLogo>
        <ContentInitLogo>
          <IconLogin>
            <Logo src={LogoImage} />
          </IconLogin>
          <Default.TitleH3 color={Default.color.blueOriginal}>
            Welcome to the <br />
            world of <br />
            opportunities
          </Default.TitleH3>
        </ContentInitLogo>
      </ContentLogo>

      <ContentImage>
        <BaseLogin>
          {createAccount ? renderCreateAccount() : renderLogin()}
        </BaseLogin>
      </ContentImage>
    </LoginPageContainer>
  );
}
