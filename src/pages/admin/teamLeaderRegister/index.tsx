import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal';
import {
  AddTeamLeader,
  ITeamLeaderSend,
} from '../../../hooks/admin/useTeamLeader';
import Input from '../../../components/input';
import InputSwitch from '../../../components/inputSwitch';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

export default function TeamLeaderRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<ITeamLeaderSend> = useCallback(
    async (data: ITeamLeaderSend) => {
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

        AddTeamLeader(data).then(response => {
          if (response.id) {
            Modal({
              icon: 'success',
              keyType: 'createdTeamLeader',
              onClick: () => navigate('/admin/teamLeader'),
            });
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
    },
    [navigate],
  );

  return (
    <ContentPage
      title={`${Language.page.teamLeader.teamLeader} > ${Language.page.teamLeader.newTeamLeader}`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.teamLeader.teamLeader}>
          <ContentInput>
            <Input name="name" label={Language.fields.fullName} />
            <Input name="lastName" label={Language.fields.lastName} />
            <Input name="email" label={Language.fields.email} type="email" />
          </ContentInput>
          <ContentInput>
            <Input name="phone" label={Language.fields.phone} mask="phone" />
            <InputSwitch
              label={Language.fields.status}
              name="status"
              valueDefault
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
