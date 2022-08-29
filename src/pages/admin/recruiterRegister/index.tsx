import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import {
  IRecruiterSend,
  AddRecruiter,
  UpdateRecruiter,
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

interface IRecruiterRegister {
  recruiter: {
    id: string;
    department: string;
    email: string;
    name: string;
    lastName: string;
    phone: string;
    status: boolean;
    teamLeader: string;
    teamleaderid: string;
  };
}

export default function RecruiterRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const location = useLocation();
  const params = useMemo(
    () =>
      (location?.state as IRecruiterRegister) ||
      ({ recruiter: {} } as IRecruiterRegister),
    [location],
  );

  const [optionsTeamLeader, setOptionsTeamLeader] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);

  const handleSubmit: SubmitHandler<IRecruiterSend> = useCallback(
    async (data: IRecruiterSend) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          teamLeader: Yup.string().required(),
          department: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (params.recruiter.id) {
          const newData = {
            ...data,
            id: params.recruiter.id,
          };
          UpdateRecruiter(newData).then(response => {
            if (response.recruiter.id) {
              Modal({
                icon: 'success',
                keyType: 'updateRecruiter',
                onClick: () => navigate('/admin/recruiter'),
              });
            }
          });
        } else {
          AddRecruiter(data).then(response => {
            if (response.recruiter.id) {
              Modal({
                icon: 'success',
                keyType: 'createdRecruiter',
                onClick: () => navigate('/admin/recruiter'),
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

  const getTeamLeaders = useCallback(async () => {
    const { teamLeaders } = await GetTeamLeaders(true);
    if (teamLeaders) {
      const options: IOptionsDropdown[] = teamLeaders.map(teamLeader => {
        return {
          value: teamLeader.id,
          label: `${teamLeader.user.name} ${teamLeader.user.lastName}`,
        };
      });
      setOptionsTeamLeader(options);
    } else {
      Modal({ keyType: 'getTeamLeaders', icon: 'error' });
    }
  }, []);

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
  useEffect(() => {
    getTeamLeaders();
  }, [getTeamLeaders]);

  return (
    <ContentPage
      title={`${Language.page.recruiter.recruiter} > ${
        params.recruiter.name
          ? params.recruiter.name
          : Language.page.recruiter.newRecruiter
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
              label={`${Language.fields.fullName} *`}
              value={params.recruiter.name}
            />
            <Input
              name="lastName"
              label={`${Language.fields.lastName} *`}
              value={params.recruiter.lastName}
            />
            <Input
              name="email"
              label={`${Language.fields.email} *`}
              type="email"
              value={params.recruiter.email}
              disabled={!!params.recruiter.id}
            />
          </ContentInput>
          <ContentInput>
            <Input
              name="phone"
              label={Language.fields.phone}
              mask="phone"
              value={params.recruiter.phone}
            />
            <InputDropDown
              name="teamLeader"
              label="Team Leader *"
              options={optionsTeamLeader}
              value={params.recruiter.teamleaderid}
            />
            <InputDropDown
              name="department"
              label="Department *"
              options={optionsInterestSkills}
              value={params.recruiter.department}
            />
          </ContentInput>
        </Section>
        <Section label={Language.permissions}>
          <ContentInput>
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
