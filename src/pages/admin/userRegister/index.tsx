import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import Modal from '../../../components/modal';
import { AddUser, IUserSend, UpdateUser } from '../../../hooks/admin/useUser';
import Input from '../../../components/input';
import InputSwitch from '../../../components/inputSwitch';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

interface IUserRegister {
  user: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    status: boolean;
  };
}

export default function UserRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const location = useLocation();
  const params =
    (location.state as IUserRegister) || ({ user: {} } as IUserRegister);

  const handleSubmit: SubmitHandler<IUserSend> = useCallback(
    async (data: IUserSend) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (params.user.id) {
          UpdateUser({ ...data, id: params.user.id }).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'updateUser',
                onClick: () => navigate('/admin/user'),
              });
            }
          });
        } else {
          AddUser(data).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'createdUser',
                onClick: () => navigate('/admin/user'),
              });
            }
          });
        }
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
    [navigate, params],
  );

  return (
    <ContentPage
      title={`${Language.page.user.user} > ${
        params.user.id ? params.user.name : Language.page.user.newUser
      }`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.user.personalInformation}>
          <ContentInput>
            <Input
              name="name"
              label={Language.fields.fullName}
              value={params.user.name}
            />
            <Input
              name="lastName"
              label={Language.fields.lastName}
              value={params.user.lastName}
            />
            <Input
              name="email"
              label={Language.fields.email}
              type="email"
              value={params.user.email}
              disabled={!!params.user.id}
            />
            <Input
              name="phone"
              label={Language.fields.phone}
              mask="phone"
              value={params.user.phone}
            />
          </ContentInput>
        </Section>
        <Section label={Language.permissions}>
          <ContentInput>
            <InputSwitch
              label={Language.fields.status}
              name="status"
              valueDefault={params.user.status}
            />
          </ContentInput>
        </Section>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Form>
    </ContentPage>
  );
}
