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
import { setPriority } from 'os';
import Default from '../../../default';
import ButtonSite from '../../../components/buttonSite';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import Language from '../../../language';

import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import Modal from '../../../components/modal';
import { ApplicationState } from '../../../store';
import { AuthTypes } from '../../../store/ducks/auth/types';
import Input from '../../../components/input';
import LogoImage from '../../../assets/images/logo.png';

import {
  AddCandidateLogin,
  ICandidateSendLogin,
} from '../../../hooks/admin/useCandidates';
import {
  AddCompanyLogin,
  ICompanySendLogin,
} from '../../../hooks/admin/useCompanies';
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
  const formRefRegister = useRef<FormHandles>(null);
  const formRefRegisterCompany = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: ApplicationState) => state);
  const [createAccount, setCreateAccount] = useState(false);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [iamTalent, setIamTalent] = useState(true);
  const [policyTerms, setPolicyTerms] = useState(false);
  const [policyTermsCompany, setPolicyTermsCompany] = useState(false);
  const [allowTalentPool, setAllowTalentPool] = useState(false);
  const optionsEnglishLevel: IOptionsDropdown[] = [
    { label: 'Fluent', value: 'Fluent' },
    { label: 'Advanced', value: 'Advanced' },
    { label: 'Intermediary', value: 'Intermediary' },
    { label: 'Beginner', value: 'Beginner' },
  ];

  const getInterestSkills = useCallback(async () => {
    const { interestSkills } = await GetInterestSkills();
    if (interestSkills) {
      const options: IOptionsDropdown[] = interestSkills.map(item => {
        return {
          value: item.id,
          label: item.name,
        };
      });
      setOptionsInterestSkills(options);
    } else {
      Modal({ keyType: 'getInterestSkills', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

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

  const handleRegister: SubmitHandler = useCallback(
    async data => {
      if (!policyTerms) {
        Modal({ keyType: 'policyTerms', icon: 'error' });
        return;
      }

      try {
        const schema = Yup.object().shape({
          email: Yup.string().required(),
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
          media: Yup.string().required(),
          englishLevel: Yup.string().required(),
          department: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const dataCandidateLogin: ICandidateSendLogin = {
          email: data.email,
          name: data.firstName,
          lastName: data.lastName,
          socialMedia: data.media,
          englishLevel: data.englishLevel,
          interestSkills: data.department,
          allowTalentPool,
        };
        const response = await AddCandidateLogin(dataCandidateLogin);

        if (response.user.id) {
          Modal({ keyType: 'registerCandidate', icon: 'success' });
          setCreateAccount(false);
        } else {
          Modal({ keyType: 'registerCandidate', icon: 'error' });
        }
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRefRegister.current?.setErrors(validationErrors);
        }
      }
    },
    [allowTalentPool, policyTerms],
  );
  const handleRegisterCompany: SubmitHandler = useCallback(
    async data => {
      if (!policyTermsCompany) {
        Modal({ keyType: 'policyTerms', icon: 'error' });
        return;
      }

      try {
        const schema = Yup.object().shape({
          email: Yup.string().required(),
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
          companyName: Yup.string().required(),
          department: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const dataCandidateRegister: ICompanySendLogin = {
          email: data.email,
          name: data.firstName,
          lastName: data.lastName,
          companyName: data.companyName,
          interestSkills: data.department,
        };

        const response = await AddCompanyLogin(dataCandidateRegister);

        if (response.user.id) {
          Modal({ keyType: 'registerCompany', icon: 'success' });
          setCreateAccount(false);
        } else {
          Modal({ keyType: 'registerCompany', icon: 'error' });
        }
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRefRegisterCompany.current?.setErrors(validationErrors);
        }
      }
    },
    [policyTermsCompany],
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

  const renderCreateAccountForm = useCallback(
    () => (
      <FormStyled
        ref={formRefRegister}
        onSubmit={handleRegister}
        onClick={() => formRefRegister.current?.setErrors({})}
      >
        <Input name="email" label="E-mail" />
        <Input name="firstName" label="First Name" />
        <Input name="lastName" label="Last Name" />
        <Input name="media" label="Social media URL" />
        <InputDropDown
          name="englishLevel"
          label={Language.fields.englishLevel}
          options={optionsEnglishLevel}
        />
        <InputDropDown
          name="department"
          label={Language.fields.department}
          options={optionsInterestSkills}
        />

        <Default.Row>
          <label htmlFor="privacyPolicy">
            <InputRadio
              id="privacyPolicy"
              name="privacyPolicy"
              type="radio"
              value="true"
              onChange={() => setPolicyTerms(true)}
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
              value="true"
              onChange={() => setAllowTalentPool(true)}
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
            Register
          </ButtonSite>
        </ContentButton>
      </FormStyled>
    ),
    [handleRegister, optionsEnglishLevel, optionsInterestSkills],
  );

  const renderCreateAccountCompanyForm = useCallback(
    () => (
      <FormStyled
        ref={formRefRegisterCompany}
        onSubmit={handleRegisterCompany}
        onClick={() => formRefRegisterCompany.current?.setErrors({})}
      >
        <Input name="email" label="E-mail" />
        <Input name="firstName" label="First Name" />
        <Input name="lastName" label="Last Name" />
        <Input name="companyName" label="Company Name" />

        <InputDropDown
          name="department"
          label={Language.fields.department}
          options={optionsInterestSkills}
        />

        <Default.Row>
          <label htmlFor="privacyPolicy">
            <InputRadio
              id="privacyPolicy"
              name="privacyPolicy"
              type="radio"
              value="true"
              onChange={() => setPolicyTermsCompany(true)}
            />
            <Default.Text2 color={Default.color.gray}>
              I have read and agree to the Privacy Policy terms.
            </Default.Text2>
          </label>
        </Default.Row>
        <Default.Space h="1.25rem" />

        <ContentButton>
          <ButtonForgotPassword type="button" />
          <ButtonSite type="submit" bgColor={Default.color.success}>
            Register
          </ButtonSite>
        </ContentButton>
      </FormStyled>
    ),
    [handleRegisterCompany, optionsInterestSkills],
  );

  const renderCreateAccount = useCallback(() => {
    return (
      <>
        <BaseLoginContent>
          <Default.Title2 color={Default.color.blueOriginal}>
            Register for free
          </Default.Title2>
          <Default.Space h="1.25rem" />
          <ContentSwitch>
            <ContentSwitchItem
              active={iamTalent}
              onClick={() => setIamTalent(true)}
            >
              I’m a Talent
            </ContentSwitchItem>
            <ContentSwitchItem
              active={!iamTalent}
              onClick={() => setIamTalent(false)}
            >
              I’m a Company
            </ContentSwitchItem>
          </ContentSwitch>

          <Default.Space h="1.25rem" />
          {iamTalent
            ? renderCreateAccountForm()
            : renderCreateAccountCompanyForm()}
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
  }, [
    auth,
    iamTalent,
    renderCreateAccountForm,
    renderCreateAccountCompanyForm,
  ]);

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
