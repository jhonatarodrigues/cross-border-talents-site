import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import Modal from '../../../components/modal';
import {
  AddTeamLeader,
  UpdateTeamLeader,
  ITeamLeaderSend,
} from '../../../hooks/admin/useTeamLeader';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import Input from '../../../components/input';
import InputSwitch from '../../../components/inputSwitch';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

interface ITeamLeaderRegister {
  teamleader: {
    id: string;
    email: string;
    name: string;
    lastName: string;
    phone: string;
    status: boolean;
    department: string;
  };
}

export default function TeamLeaderRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const location = useLocation();
  const params =
    (location?.state as ITeamLeaderRegister) ||
    ({ teamleader: {} } as ITeamLeaderRegister);

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

  const handleSubmit: SubmitHandler<ITeamLeaderSend> = useCallback(
    async (data: ITeamLeaderSend) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          department: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (params.teamleader.id) {
          const newData = { ...data, id: params.teamleader.id };
          UpdateTeamLeader(newData).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'updateTeamLeader',
                onClick: () => navigate('/admin/teamLeader'),
              });
            }
          });
        } else {
          AddTeamLeader(data).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'createdTeamLeader',
                onClick: () => navigate('/admin/teamLeader'),
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

  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

  return (
    <ContentPage
      title={`${Language.page.teamLeader.teamLeader} > ${
        params.teamleader.name
          ? params.teamleader.name
          : Language.page.teamLeader.newTeamLeader
      }`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.personalInformation}>
          <ContentInput>
            <Input
              name="name"
              label={Language.fields.fullName}
              value={params.teamleader.name}
            />
            <Input
              name="lastName"
              label={Language.fields.lastName}
              value={params.teamleader.lastName}
            />
            <Input
              name="email"
              label={Language.fields.email}
              type="email"
              value={params.teamleader.email}
              disabled={!!params.teamleader.email}
            />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="department"
              label="Department"
              options={optionsInterestSkills}
              value={params.teamleader.department}
            />
            <Input
              name="phone"
              label={Language.fields.phone}
              mask="phone"
              value={params.teamleader.phone}
            />
          </ContentInput>
        </Section>

        <Section label={Language.permissions}>
          <ContentInput>
            <InputSwitch
              label={Language.fields.status}
              name="status"
              valueDefault={params.teamleader.status}
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
