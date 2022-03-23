import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import {
  IRecruiterSend,
  AddRecruiter,
} from '../../../hooks/admin/useRecruiters';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import InputSwitch from '../../../components/inputSwitch';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

export default function CompaniesRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IRecruiterSend> = useCallback(
    async (data: IRecruiterSend) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          teamLeader: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log('data --', data);

        // AddRecruiter(data).then(response => {
        //   if (response.recruiter.id) {
        //     Modal({
        //       icon: 'success',
        //       keyType: 'createdRecruiter',
        //       onClick: () => navigate('/admin/recruiter'),
        //     });
        //   }
        // });
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
    [],
  );

  return (
    <ContentPage
      title={`${Language.page.companies.companies} > ${Language.page.companies.newCompanies}`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.companies.companies}>
          <ContentInput>
            <Input name="name" label={Language.fields.fullName} />
            <Input name="email" label={Language.fields.email} type="email" />
          </ContentInput>
          <ContentInput>
            <Input name="phone" label={Language.fields.phone} mask="phone" />
            <Input name="country" label={Language.fields.country} />

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
