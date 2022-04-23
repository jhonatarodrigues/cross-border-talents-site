import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Editor from '../../../components/editor';
import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import { GetRecruiters } from '../../../hooks/admin/useRecruiters';
import { GetCountries } from '../../../hooks/admin/useCountry';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import InputDatePicker from '../../../components/inputDatePicker';
import {
  ICandidateSend,
  AddCandidate,
} from '../../../hooks/admin/useCandidates';
import Input from '../../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../../components/inputDropdown';
import InputSwitch from '../../../components/inputSwitch';
import ContentPage from '../../../components/contentPage';
import ContentInput from '../../../components/contentInput';
import { SimpleFileUpload } from '../../../hooks/admin/useUpload';
import Button from '../../../components/button';
import Section from '../../../components/section';
import Language from '../../../language';
import ButtonUpload from '../../../components/buttonUpload';

export default function CandidatesRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const [optionsTeamLeader, setOptionsTeamLeader] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [optionsRecruiter, setOptionsRecruiter] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);

  const handleSubmit: SubmitHandler<ICandidateSend> = useCallback(
    async (data: ICandidateSend) => {
      const infoData = data;
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          teamLeader: Yup.string().required(),
          nativeLanguage: Yup.string().required(),
          country: Yup.string().required(),
          englishLevel: Yup.string().required(),
          interestSkills: Yup.string().required(),
        });

        await schema.validate(infoData, {
          abortEarly: false,
        });

        if (infoData.uploadPicture) {
          const upload = await SimpleFileUpload(infoData.uploadPicture);
          if (upload) {
            infoData.profilePicture = upload;
          }
        }

        if (infoData.uploadCv) {
          const upload = await SimpleFileUpload(infoData.uploadCv);
          if (upload) {
            infoData.cvUpload = upload;
          }
        }

        AddCandidate(infoData).then(response => {
          if (response.user.id) {
            Modal({
              icon: 'success',
              keyType: 'createdCandidate',
              onClick: () => navigate('/admin/candidates'),
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
  const getRecruiters = useCallback(async () => {
    const { recruiters } = await GetRecruiters();

    if (recruiters) {
      const options: IOptionsDropdown[] = recruiters.map(recruiter => {
        return {
          value: recruiter.id,
          label: recruiter.user.name,
        };
      });
      setOptionsRecruiter(options);
    } else {
      Modal({ keyType: 'getRecruiter', icon: 'error' });
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
    getRecruiters();
  }, [getRecruiters]);
  useEffect(() => {
    getInterestSkills();
  }, [getInterestSkills]);

  return (
    <ContentPage
      title={`${Language.page.candidates.candidates} > ${Language.page.candidates.newCandidates}`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.candidates.personalInformation}>
          <ContentInput>
            <ButtonUpload name="uploadPicture">
              {Language.page.candidates.sendPicture}
            </ButtonUpload>

            <Input name="name" label={Language.fields.fullName} />
            <Input name="lastName" label={Language.fields.lastName} />
          </ContentInput>
          <ContentInput>
            <Input name="email" label={Language.fields.email} type="email" />
            <Input name="phone" label={Language.fields.phone} mask="phone" />
            <Input
              name="nativeLanguage"
              label={Language.fields.nativeLanguage}
            />
          </ContentInput>
          <ContentInput>
            <InputDatePicker
              dateOnly
              name="birthDate"
              label={Language.fields.birthDate}
            />
            <Input name="gender" label={Language.fields.gender} />
            <InputDropDown
              name="country"
              label={Language.fields.countryOfResidence}
              options={optionsCountry}
            />
          </ContentInput>
        </Section>
        <Section label={Language.page.candidates.professionalInformation}>
          <ContentInput>
            <Input name="socialMedia" label={Language.fields.socialMedia} />
            <InputDropDown
              name="englishLevel"
              label={Language.fields.englishLevel}
              options={optionsTeamLeader}
            />
            <InputDropDown
              name="interestSkills"
              label="Department"
              options={optionsInterestSkills}
            />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="teamLeader"
              label="Team Leader"
              options={optionsTeamLeader}
            />
            <InputDropDown
              name="recruiter"
              label="Approached by"
              options={optionsRecruiter}
            />
            <ButtonUpload name="uploadCv">
              {Language.page.candidates.cvUpload}
            </ButtonUpload>
          </ContentInput>
          <ContentInput>
            <Editor name="observations" label={Language.fields.observations} />
          </ContentInput>
        </Section>
        <Section label={Language.page.candidates.permissions}>
          <ContentInput>
            <InputSwitch
              label={Language.fields.allowTalentPool}
              name="allowTalentPool"
              valueDefault
            />
          </ContentInput>
          <ContentInput>
            <InputSwitch
              label={Language.fields.allowContactMe}
              name="allowContactMe"
              valueDefault
            />
          </ContentInput>
          <ContentInput>
            <InputSwitch
              label={Language.fields.privacityPolicy}
              name="privacityPolicy"
              valueDefault
            />
          </ContentInput>
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
