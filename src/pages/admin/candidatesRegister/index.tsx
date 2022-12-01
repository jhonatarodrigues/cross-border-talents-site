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
import { useSelector } from 'react-redux';

import { GetLanguages } from '../../../hooks/admin/useLanguages';
import ContentPicture from '../../../components/ContentPicture';
import ContentFile from '../../../components/ContentFile';
import Editor from '../../../components/editor';
import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import { GetRecruiters } from '../../../hooks/admin/useRecruiters';
import { GetCountries } from '../../../hooks/admin/useCountry';
import { GetInterestSkills } from '../../../hooks/admin/useInterestSkills';
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
import { ApplicationState } from '../../../store';
import ButtonUpload from '../../../components/buttonUpload';
import {
  GetUniqueTalentPools,
  ITalentPools,
  AddUserTalentPool,
  IAddUserTalentPool,
} from '../../../hooks/admin/useTalentPool';

interface ITalentPool extends ICandidateSend {
  data: string;
  profile: string;
  observation: string;
  softwares: string;
  education: string;
  experience: string;
  charge: string;
  languages: string;
  statusTalentPool: boolean;
}

interface ICandidateRegister {
  candidate: ICandidate;
}

export default function CandidatesRegister(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const { auth } = useSelector((state: ApplicationState) => state);
  const [recruiterInitial, setRecruiterInitial] = useState('');
  const [recruiterTeamLeader, setRecruiterTeamLeader] = useState('');
  const [talentPool, setTalentPool] = useState<ITalentPools>(
    {} as ITalentPools,
  );
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

  const handleSubmit: SubmitHandler<ITalentPool> = useCallback(
    async (data: ITalentPool) => {
      const infoData = data;
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          nativeLanguage: Yup.string().required(),
          country: Yup.string().required(),
          interestSkills: Yup.string().required(),
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

        if (infoData.allowTalentPool) {
          infoData.talentPoolVerify = true;
        }

        if (params?.candidate.talentPoolVerify) {
          const dataTalentPool: IAddUserTalentPool = {
            charge: data.charge,
            observation: data.observation,
            softwares: data.softwares,
            education: data.education,
            experience: data.experience,
            languages: data.languages,
            status: data.statusTalentPool,

            idCandidate: parseInt(params.candidate.id, 10),
            idUser: parseInt(params.candidate.idUser, 10),

            profile: data.profile,
          };

          const response = await AddUserTalentPool(dataTalentPool);
          if (!response.data.moveUserTalentPool.id) {
            return;
          }
        }

        if (params?.candidate && params?.candidate.id) {
          const newInfoData = {
            ...infoData,
            id: params.candidate.id,
          };
          UpdateCandidate(newInfoData).then(response => {
            if (response.user.id) {
              Modal({
                icon: 'success',
                keyType: params?.candidate.talentPoolVerify
                  ? 'updateCandidateTalentPool'
                  : 'updateCandidate',
                onClick: () => navigate('/admin/candidates'),
              });
            }
          });
        } else {
          if (infoData.allowTalentPool) {
            infoData.talentPoolVerify = true;
          }
          AddCandidate(infoData).then(response => {
            if (response.user.id) {
              Modal({
                icon: 'success',
                keyType: params?.candidate.talentPoolVerify
                  ? 'createdCandidateTalentPool'
                  : 'createdCandidate',
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
    const { teamLeaders } = await GetTeamLeaders(true);
    if (teamLeaders) {
      const options: IOptionsDropdown[] = teamLeaders.map(teamLeader => {
        if (teamLeader.idUser === auth.user.id) {
          setRecruiterTeamLeader(teamLeader.id);
        }

        return {
          value: teamLeader.id,
          label: `${teamLeader.user.name} ${teamLeader.user.lastName}`,
        };
      });
      setOptionsTeamLeader(options);
    } else {
      Modal({ keyType: 'getTeamLeaders', icon: 'error' });
    }
  }, [auth]);
  const getRecruiters = useCallback(async () => {
    const { recruiters } = await GetRecruiters(true);

    if (recruiters) {
      const options: IOptionsDropdown[] = recruiters.map(recruiter => {
        if (recruiter.user.id === auth.user.id) {
          setRecruiterInitial(recruiter.id);
        }

        return {
          value: recruiter.id,
          label: `${recruiter.user.name} ${recruiter.user.lastName}`,
        };
      });
      setOptionsRecruiter(options);
    } else {
      Modal({ keyType: 'getRecruiter', icon: 'error' });
    }
  }, [auth]);

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

  const handleGetTalentPool = useCallback(async () => {
    if (!params?.candidate || !params?.candidate.id) {
      return;
    }

    const response = await GetUniqueTalentPools({
      idUser: params.candidate.user.id,
    });

    setTalentPool(response.talentPool);
  }, [params]);
  useEffect(() => {
    handleGetTalentPool();
  }, [handleGetTalentPool]);

  const renderFieldTalentPool = useCallback(() => {
    if (!params?.candidate.talentPoolVerify) {
      return false;
    }

    return (
      <Section label={Language.page.candidates.informationToTalentPool}>
        <ContentInput>
          <Input
            name="profile"
            label={`${Language.fields.profile} *`}
            value={talentPool?.profile}
          />
        </ContentInput>
        <ContentInput>
          <Input
            name="charge"
            label={`${Language.fields.charge} *`}
            value={talentPool?.charge}
          />
        </ContentInput>

        <ContentInput>
          <Input
            name="softwares"
            label={`${Language.fields.softwares} *`}
            value={talentPool?.softwares}
          />
        </ContentInput>
        <ContentInput>
          <Input
            name="education"
            label={`${Language.fields.education} *`}
            value={talentPool?.education}
          />
        </ContentInput>

        <ContentInput>
          <Input
            name="languages"
            label={`${Language.fields.languages} *`}
            value={talentPool?.languages}
          />
        </ContentInput>
        <ContentInput>
          <Editor
            name="observation"
            label={Language.fields.skillsCompetences}
            value={talentPool?.observation}
          />
        </ContentInput>
        <ContentInput>
          <Editor
            name="experience"
            label={Language.fields.workExperience}
            value={talentPool?.experience}
          />
        </ContentInput>
        <ContentInput>
          <InputSwitch
            label={Language.fields.sendToTalentPool}
            name="statusTalentPool"
            valueDefault={talentPool?.status}
          />
        </ContentInput>
      </Section>
    );
  }, [talentPool, params]);

  const renderButtonSave = useCallback(() => {
    if (params?.candidate && params?.candidate.id) {
      if (auth.user.accessLevel >= 3) {
        return <div />;
      }
    }

    return (
      <Button variant="contained" type="submit">
        Save
      </Button>
    );
  }, [auth, params]);

  useEffect(() => {
    if (recruiterInitial && !params?.candidate.id) {
      formRef.current?.setFieldValue('recruiter', recruiterInitial);
    }
  }, [recruiterInitial, params]);
  useEffect(() => {
    if (recruiterTeamLeader && !params?.candidate.id) {
      formRef.current?.setFieldValue('teamLeader', recruiterTeamLeader);
    }
  }, [recruiterTeamLeader, params]);

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
              value={
                params?.candidate && params?.candidate.birthDate
                  ? new Date(params?.candidate.birthDate)
                  : undefined
              }
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
              label={`${Language.fields.englishLevel}`}
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
              label="Team Leader"
              options={[{ label: 'Select', value: '' }, ...optionsTeamLeader]}
              value={
                params?.candidate.userTeamLeader
                  ? params?.candidate.userTeamLeader.id
                  : ''
              }
              disabled={auth.user.accessLevel >= 1}
            />
            <InputDropDown
              name="recruiter"
              label="Recruiter"
              options={[{ label: 'Select', value: '' }, ...optionsRecruiter]}
              value={
                params?.candidate.userRecruiter
                  ? params?.candidate.userRecruiter.id
                  : ''
              }
              disabled={auth.user.accessLevel >= 1}
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
              label={Language.fields.aboutCandidate}
              value={params?.candidate.observations}
            />
          </ContentInput>
        </Section>

        <ContentInput>
          <InputSwitch
            label={Language.fields.allowTalentPool}
            name="allowTalentPool"
            valueDefault={params?.candidate.allowTalentPool}
          />
        </ContentInput>
        {renderFieldTalentPool()}

        <Section label={Language.page.candidates.permissions}>
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
        {renderButtonSave()}
      </Form>
    </ContentPage>
  );
}
