import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import { htmlURIDecode } from '../../../util/format';
import { GetRecruiters } from '../../../hooks/admin/useRecruiters';
import Modal from '../../../components/modal';
import Editor from '../../../components/editor';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import { GetCountries } from '../../../hooks/admin/useCountry';
import {
  IJobsSend,
  AddJobs,
  IJobs,
  UpdateJobs,
} from '../../../hooks/admin/useJobs';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import InputDatePicker from '../../../components/inputDatePicker';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';

interface IJobsRegister {
  jobs: IJobs;
}

export default function JobsRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [optionsRecruiter, setOptionsRecruiter] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const location = useLocation();
  //   const params = (location.state as IJobsRegister) || null;

  //   const params = useMemo(
  //     () => (location?.state as IJobsRegister) || { jobs: {} as IJobs },
  //     [location],
  //   );

  const params = useMemo(() => {
    if (location?.state) {
      return location?.state as IJobsRegister;
    }
    return null;
  }, [location]);

  const getRecruiters = useCallback(async () => {
    const { recruiters } = await GetRecruiters(true);

    if (recruiters) {
      const options: IOptionsDropdown[] = recruiters.map(recruiter => {
        // if (recruiter.user.id === auth.user.id) {
        //   setRecruiterInitial(recruiter.id);
        // }

        return {
          value: recruiter.id,
          label: `${recruiter.user.name} ${recruiter.user.lastName}`,
        };
      });
      setOptionsRecruiter(options);
    } else {
      Modal({ keyType: 'getRecruiter', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getRecruiters();
  }, [getRecruiters]);

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

        if (params && params?.jobs.id) {
          const newData = {
            ...data,
            id: params.jobs.id,
          };
          UpdateJobs(newData).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'updateJobs',
                onClick: () => navigate('/admin/jobs'),
              });
            }
          });
        } else {
          AddJobs(data).then(response => {
            if (response.id) {
              Modal({
                icon: 'success',
                keyType: 'createdJobs',
                onClick: () => navigate('/admin/jobs'),
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
          value: country.countryShortCode,
          label: country.countryName,
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
      title={`${Language.page.jobs.jobs} > ${
        params?.jobs.jobTitle || Language.page.jobs.newJobs
      }`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.jobs.jobs}>
          <ContentInput>
            <Input
              name="jobTitle"
              label={`${Language.fields.title} *`}
              value={params?.jobs.jobTitle}
            />
            <Input
              name="level"
              label={`${Language.fields.level} *`}
              value={params?.jobs.level}
            />
            <InputDatePicker
              name="date"
              label={Language.fields.date}
              value={
                new Date(parseInt(params?.jobs.date || '', 10) || new Date())
              }
            />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="interestSkills"
              label="Department *"
              options={optionsInterestSkills}
              value={params?.jobs.interestSkills.id}
            />
            <InputDropDown
              name="country"
              label={`${Language.fields.country} *`}
              options={optionsCountry}
              value={params?.jobs.countryId}
            />
            <InputDropDown
              name="recruiter"
              label="Recruiter"
              options={[{ label: 'Select', value: '' }, ...optionsRecruiter]}
              value={
                params?.jobs &&
                params?.jobs.userRecruiter &&
                params?.jobs.userRecruiter.id
                  ? params?.jobs.userRecruiter.id
                  : ''
              }
            />
          </ContentInput>
          <ContentInput>
            <Editor
              name="description"
              label={Language.fields.description}
              value={params?.jobs.description}
            />
          </ContentInput>
          <ContentInput>
            <Editor
              name="requirements"
              label={Language.fields.requirements}
              value={params?.jobs.requirements}
            />
          </ContentInput>
          <ContentInput>
            <Editor
              name="benefits"
              label={Language.fields.benefits}
              value={params?.jobs.benefits}
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
