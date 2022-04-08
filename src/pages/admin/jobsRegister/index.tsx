import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/modal';
import Editor from '../../../components/editor';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import { GetCountries } from '../../../hooks/admin/useCountry';
import { IJobsSend, AddJobs } from '../../../hooks/admin/useJobs';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

export default function JobsRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );

  const handleSubmit: SubmitHandler<IJobsSend> = useCallback(
    async (data: IJobsSend) => {
      try {
        const schema = Yup.object().shape({
          jobTitle: Yup.string().required(),
          level: Yup.string().required(),
          interestSkills: Yup.string().required(),
          country: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        AddJobs(data).then(response => {
          if (response.id) {
            Modal({
              icon: 'success',
              keyType: 'createdJobs',
              onClick: () => navigate('/admin/jobs'),
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

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

  return (
    <ContentPage
      title={`${Language.page.jobs.jobs} > ${Language.page.jobs.newJobs}`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.jobs.jobs}>
          <ContentInput>
            <Input name="jobTitle" label={Language.fields.title} />
            <Input name="level" label={Language.fields.level} />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="interestSkills"
              label="Interest Skills"
              options={optionsInterestSkills}
            />
            <InputDropDown
              name="country"
              label={Language.fields.country}
              options={optionsCountry}
            />
          </ContentInput>
          <ContentInput>
            <Editor name="description" label={Language.fields.description} />
          </ContentInput>
        </Section>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Form>
    </ContentPage>
  );
}
