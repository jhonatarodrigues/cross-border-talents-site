import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import Modal from '../../../components/modal';
import {
  AddInterestSkills,
  IInterestSkillsSend,
  UpdateInterestSkills,
} from '../../../hooks/admin/useInterestSkills';
import Input from '../../../components/input';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

interface IInterestSkillsRegister {
  departament: {
    id: string;
    name: string;
  };
}

export default function InterestSkillsRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const location = useLocation();
  const params =
    (location.state as IInterestSkillsRegister) ||
    ({ departament: {} } as IInterestSkillsRegister);

  const handleSubmit: SubmitHandler<IInterestSkillsSend> = useCallback(
    async (data: IInterestSkillsSend) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (params.departament.id) {
          const newData = {
            ...data,
            id: params.departament.id,
          };
          UpdateInterestSkills(newData).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'updateInterestSkills',
                onClick: () => navigate('/admin/departament'),
              });
            }
          });
        } else {
          AddInterestSkills(data).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'createdInterestSkills',
                onClick: () => navigate('/admin/departament'),
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
    [navigate],
  );

  return (
    <ContentPage
      title={`${Language.page.interestSkills.interestSkills} > ${Language.page.interestSkills.newInterestSkills}`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.interestSkills.interestSkills}>
          <ContentInput>
            <Input
              name="name"
              label={`${Language.fields.name} *`}
              value={params.departament.name}
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
