import React, { useCallback, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { AuthTypes } from '../../store/ducks/auth/types';
import { ApplicationState } from '../../store';
import Button from '../button';
import Input from '../input';
import ContentInput from '../contentInput';
import CustomModal from '../CustomModal';
import Section from '../section';
import Language from '../../language';
import Modal from '../modal';
import { ChangePassword } from '../../hooks/admin/useAuth';
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
  ChangePasswordContent,
} from './styles';
import Default from '../../default';

export default function Header(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const { auth } = useSelector((state: ApplicationState) => state);
  const [modal, setModal] = useState(false);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required(),
        newPassword: Yup.string().required(),
        confirmNewPassword: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (data.newPassword.length < 6) {
        Modal({ icon: 'error', keyType: 'passwordMinCharacters' });
        return;
      }

      if (data.newPassword !== data.confirmNewPassword) {
        Modal({ icon: 'error', keyType: 'passwordNotConfirmed' });
        return;
      }

      ChangePassword({
        password: data.password,
        newPassword: data.newPassword,
      }).then(response => {
        if (response.data.changePassword) {
          Modal({ icon: 'success', keyType: 'passwordChanged' });
          setModal(false);
        }
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
  }, []);

  const handleChangePassword = () => {
    return (
      <CustomModal onClose={() => setModal(false)}>
        <ChangePasswordContent>
          <Default.Column>
            <Default.Title2 color={Default.color.blueOriginal}>
              Change Password
            </Default.Title2>
            <Default.Space h="1.25rem" />
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              onClick={() => formRef.current?.setErrors({})}
              style={{ width: '100%' }}
            >
              <Section label="">
                <Default.Column>
                  <ContentInput>
                    <Input
                      name="password"
                      label={`${Language.fields.currentPassword} *`}
                    />
                  </ContentInput>
                  <ContentInput>
                    <Input
                      name="newPassword"
                      label={`${Language.fields.newPassword} *`}
                    />
                  </ContentInput>
                  <ContentInput>
                    <Input
                      name="confirmNewPassword"
                      label={`${Language.fields.confirmPassword} *`}
                    />
                  </ContentInput>
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </Default.Column>
              </Section>
            </Form>
          </Default.Column>
        </ChangePasswordContent>
      </CustomModal>
    );
  };

  return (
    <ContainerHeaderFull>
      {modal && handleChangePassword()}
      <ContainerHeader>
        <Content>
          <NameBusiness>Cross Border Talents</NameBusiness>
        </Content>
        <ContentButton>
          <NameUser>Hello, {auth.user.name}</NameUser>
          <ButtonUser>
            <FontAwesomeIcon icon={faUser} />
            <Dropdown className="dropdownUser">
              <DropdownItem onClick={() => setModal(true)}>
                Change Password
              </DropdownItem>

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
