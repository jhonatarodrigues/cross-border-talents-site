import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import { GetCountries } from '../../../hooks/admin/useCountry';
import { AddCompany, ICompanySend } from '../../../hooks/admin/useCompanies';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import InputSwitch from '../../../components/inputSwitch';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import { SimpleFileUpload } from '../../../hooks/admin/useUpload';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';
import ButtonUpload from '../../../components/buttonUpload';

export default function CompaniesRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const [optionsTeamLeader, setOptionsTeamLeader] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);

  const handleSubmit: SubmitHandler<ICompanySend> = useCallback(
    async (data: ICompanySend) => {
      const infoData = data;
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          teamLeader: Yup.string().required(),
        });

        await schema.validate(infoData, {
          abortEarly: false,
        });

        if (infoData.upload) {
          const upload = await SimpleFileUpload(infoData.upload);
          if (upload) {
            infoData.companyLogo = upload;
          }
        }

        AddCompany(infoData).then(response => {
          if (response.companie.id) {
            Modal({
              icon: 'success',
              keyType: 'createdCompany',
              onClick: () => navigate('/admin/companies'),
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

  const getTeamLeaders = useCallback(async () => {
    const { teamLeaders } = await GetTeamLeaders();
    if (teamLeaders) {
      const options: IOptionsDropdown[] = teamLeaders.map(teamLeader => {
        return {
          value: teamLeader.id,
          label: teamLeader.user.name,
        };
      });
      setOptionsTeamLeader(options);
    } else {
      Modal({ keyType: 'getTeamLeaders', icon: 'error' });
    }
  }, []);

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      const options: IOptionsDropdown[] = countries.map(country => {
        return {
          value: country.code,
          label: country.name,
        };
      });
      setOptionsCountry(options);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
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
    getCountries();
  }, [getCountries]);
  useEffect(() => {
    getTeamLeaders();
  }, [getTeamLeaders]);
  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

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
            <ButtonUpload name="upload">
              {Language.page.companies.sendLogo}
            </ButtonUpload>

            <Input name="name" label={Language.fields.fullName} />
            <Input name="companyName" label={Language.fields.companyName} />
          </ContentInput>
          <ContentInput>
            <Input name="email" label={Language.fields.email} type="email" />
            <Input name="phone" label={Language.fields.phone} mask="phone" />
          </ContentInput>
        </Section>
        <Section label={Language.page.companies.aditionalInfo}>
          <ContentInput>
            <InputDropDown
              name="teamLeader"
              label="Team Leader"
              options={optionsTeamLeader}
            />
            <InputDropDown
              name="country"
              label={Language.fields.country}
              options={optionsCountry}
            />
            <InputDropDown
              name="interestSkills"
              label="Department"
              options={optionsInterestSkills}
            />

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
