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

import ContentPicture from '../../../components/ContentPicture';
import ContentFile from '../../../components/ContentFile';
import Editor from '../../../components/editor';
import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import { GetRecruiters } from '../../../hooks/admin/useRecruiters';
import { GetCountries } from '../../../hooks/admin/useCountry';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
import { GetLanguages } from '../../../hooks/admin/useLanguages';
import { GetGender } from '../../../hooks/admin/useGender';
import InputDatePicker from '../../../components/inputDatePicker';
import {
  ICandidateSend,
  ICandidate,
  AddCandidate,
  UpdateCandidate,
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

interface ICandidateRegister {
  candidate: ICandidate;
}

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
  const location = useLocation();
  const params = useMemo(() => {
    if (location?.state) {
      return location?.state as ICandidateRegister;
    }
    return null;
  }, [location]);
  const [uploadPicture, setUploadPicture] = useState(
    params?.candidate.profilePicture || '',
  );
  const [uploadCv, setUploadCV] = useState(params?.candidate.cvUpload || '');

  const optionsNativeLanguage: IOptionsDropdown[] =
    GetLanguages().languages.map(item => {
      return {
        value: item.code,
        label: item.name,
      };
    });
  const optionsGender: IOptionsDropdown[] = GetGender().gender.map(item => {
    return {
      label: item,
      value: item,
    };
  });
  const optionsEnglishLevel: IOptionsDropdown[] = [
    { label: 'Fluent', value: 'Fluent' },
    { label: 'Advanced', value: 'Advanced' },
    { label: 'Intermediary', value: 'Intermediary' },
    { label: 'Beginner', value: 'Beginner' },
  ];

  const handleSubmit: SubmitHandler<ICandidateSend> = useCallback(
    async (data: ICandidateSend) => {
      const infoData = data;
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          nativeLanguage: Yup.string().required(),
          country: Yup.string().required(),
          englishLevel: Yup.string().required(),
          interestSkills: Yup.string().required(),
          teamLeader: Yup.string().required(),
        });

        await schema.validate(infoData, {
          abortEarly: false,
        });

        infoData.profilePicture = '';

        if (uploadPicture) {
          infoData.profilePicture = uploadPicture;
        }

        if (infoData.uploadPicture) {
          const upload = await SimpleFileUpload(infoData.uploadPicture);
          if (upload) {
            infoData.profilePicture = upload;
          }
        }

        infoData.cvUpload = '';
        if (uploadCv) {
          infoData.cvUpload = uploadCv;
        }

        if (infoData.uploadCv) {
          const upload = await SimpleFileUpload(infoData.uploadCv);
          if (upload) {
            infoData.cvUpload = upload;
          }
        }

        if (params?.candidate.id) {
          const newInfoData = {
            ...infoData,
            id: params.candidate.id,
          };
          UpdateCandidate(newInfoData).then(response => {
            if (response.user.id) {
              Modal({
                icon: 'success',
                keyType: 'updateCandidate',
                onClick: () => navigate('/admin/candidates'),
              });
            }
          });
        } else {
          AddCandidate(infoData).then(response => {
            if (response.user.id) {
              Modal({
                icon: 'success',
                keyType: 'createdCandidate',
                onClick: () => navigate('/admin/candidates'),
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
    [navigate, params, uploadPicture, uploadCv],
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
      title={`${Language.page.candidates.candidates} > ${
        params?.candidate.user.name
          ? params?.candidate.user.name
          : Language.page.candidates.newCandidates
      }`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.candidates.personalInformation}>
          <ContentInput>
            {uploadPicture && uploadPicture !== 'undefined' ? (
              <ContentPicture
                pictureUrl={uploadPicture}
                onRemove={() => {
                  setUploadPicture('');
                }}
              />
            ) : (
              <ButtonUpload name="uploadPicture">
                {Language.page.candidates.sendPicture}
              </ButtonUpload>
            )}

            <Input
              name="name"
              label={`${Language.fields.fullName} *`}
              value={params?.candidate.user.name}
            />
            <Input
              name="lastName"
              label={`${Language.fields.lastName} *`}
              value={params?.candidate.user.lastName}
            />
          </ContentInput>
          <ContentInput>
            <Input
              name="email"
              label={`${Language.fields.email} *`}
              type="email"
              value={params?.candidate.user.email}
            />
            <Input
              name="phone"
              label={Language.fields.phone}
              mask="phone"
              value={params?.candidate.user.phone}
            />

            <InputDropDown
              name="nativeLanguage"
              label={`${Language.fields.nativeLanguage} *`}
              options={optionsNativeLanguage}
              value={params?.candidate.nativeLanguage}
            />
          </ContentInput>
          <ContentInput>
            <InputDatePicker
              dateOnly
              name="birthDate"
              label={Language.fields.birthDate}
              value={new Date(params?.candidate.birthDate || new Date())}
            />
            <InputDropDown
              name="gender"
              label={Language.fields.gender}
              options={optionsGender}
              value={params?.candidate.gender}
            />
            <InputDropDown
              name="country"
              label={`${Language.fields.countryOfResidence} *`}
              options={optionsCountry}
              value={params?.candidate.country}
            />
          </ContentInput>
        </Section>
        <Section label={Language.page.candidates.professionalInformation}>
          <ContentInput>
            <Input
              name="socialMedia"
              label={Language.fields.socialMedia}
              value={params?.candidate.socialMedia}
            />
            <InputDropDown
              name="englishLevel"
              label={`${Language.fields.englishLevel} *`}
              options={optionsEnglishLevel}
              value={String(params?.candidate.englishLevel)}
            />
            <InputDropDown
              name="interestSkills"
              label="Department *"
              options={optionsInterestSkills}
              value={params?.candidate.idInterestSkills}
            />
          </ContentInput>
          <ContentInput>
            <InputDropDown
              name="teamLeader"
              label="Team Leader *"
              options={optionsTeamLeader}
              value={params?.candidate.userTeamLeader.id}
            />
            <InputDropDown
              name="recruiter"
              label="Approached by"
              options={optionsRecruiter}
              value={params?.candidate.userRecruiter.id}
            />
            {uploadCv && uploadCv !== 'undefined' ? (
              <ContentFile
                fileName={uploadCv}
                onRemove={() => {
                  setUploadCV('');
                }}
              />
            ) : (
              <ButtonUpload name="uploadCv">
                {Language.page.candidates.cvUpload}
              </ButtonUpload>
            )}
          </ContentInput>
          <ContentInput>
            <Editor
              name="observations"
              label={Language.fields.observations}
              value={params?.candidate.observations}
            />
          </ContentInput>
        </Section>
        <Section label={Language.page.candidates.permissions}>
          <ContentInput>
            <InputSwitch
              label={Language.fields.allowTalentPool}
              name="allowTalentPool"
              valueDefault={params?.candidate.allowTalentPool}
            />
          </ContentInput>
          <ContentInput>
            <InputSwitch
              label={Language.fields.allowContactMe}
              name="allowContactMe"
              valueDefault={params?.candidate.allowContactMe}
            />
          </ContentInput>
          <ContentInput>
            <InputSwitch
              label={Language.fields.privacityPolicy}
              name="privacityPolicy"
              valueDefault={params?.candidate.privacityPolicy}
            />
          </ContentInput>
          <ContentInput>
            <InputSwitch
              label={Language.fields.status}
              name="status"
              valueDefault={params?.candidate.user.status}
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
