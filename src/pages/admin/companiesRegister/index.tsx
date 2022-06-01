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

import Modal from '../../../components/modal';
import { GetTeamLeaders } from '../../../hooks/admin/useTeamLeader';
import { GetCountries } from '../../../hooks/admin/useCountry';
import {
  AddCompany,
  ICompanySend,
  ICompany,
  UpdateCompany,
} from '../../../hooks/admin/useCompanies';
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
import ContentPicture from '../../../components/ContentPicture';
import Language from '../../../language';
import ButtonUpload from '../../../components/buttonUpload';

interface ICompanyRegister {
  company: ICompany;
}

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
  const location = useLocation();
  const params = useMemo(() => {
    if (location?.state) {
      return location?.state as ICompanyRegister;
    }

    return null;
  }, [location]);
  const [companyLogo, setCompanyLogo] = useState(
    params?.company.companyLogo || '',
  );

  const optionsSize: IOptionsDropdown[] = [
    {
      value: '1 – 10 employees',
      label: '1 – 10 employees',
    },
    {
      value: '11 – 50 employees',
      label: '11 – 50 employees',
    },
    {
      value: '51 – 200 employees',
      label: '51 – 200 employees',
    },
    {
      value: '201 + employees',
      label: '201 + employees',
    },
  ];
  const optionsIndustry: IOptionsDropdown[] = [
    {
      value: 'option1',
      label: 'option1',
    },
    {
      value: 'option2',
      label: 'option2',
    },
  ];

  const handleSubmit: SubmitHandler<ICompanySend> = useCallback(
    async (data: ICompanySend) => {
      const infoData = data;
      try {
        const schema = Yup.object().shape({
          companyName: Yup.string().required(),
          email: Yup.string().required(),
          industry: Yup.string().required(),
          site: Yup.string().required(),
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          phone: Yup.string().required(),
        });

        await schema.validate(infoData, {
          abortEarly: false,
        });

        infoData.companyLogo = '';

        if (companyLogo) {
          infoData.companyLogo = companyLogo;
        }

        if (infoData.upload) {
          const upload = await SimpleFileUpload(infoData.upload);
          if (upload) {
            infoData.companyLogo = upload;
          }
        }

        if (params?.company.id) {
          const newInfoData = {
            ...infoData,
            id: params?.company.id,
          };
          UpdateCompany(newInfoData).then(response => {
            if (response.companie.id) {
              Modal({
                icon: 'success',
                keyType: 'updateCompany',
                onClick: () => navigate('/admin/companies'),
              });
            }
          });
        } else {
          AddCompany(infoData).then(response => {
            if (response.companie.id) {
              Modal({
                icon: 'success',
                keyType: 'createdCompany',
                onClick: () => navigate('/admin/companies'),
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
    [navigate, params, companyLogo],
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
    getInterestSkills();
  }, [getInterestSkills]);

  return (
    <ContentPage
      title={`${Language.page.companies.companies} > ${
        params?.company.companyName
          ? params?.company.companyName
          : Language.page.companies.newCompanies
      }`}
    >
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={() => formRef.current?.setErrors({})}
      >
        <Section label={Language.page.companies.companyInformation}>
          <ContentInput>
            <Input
              name="companyName"
              label={`${Language.fields.companyName} *`}
              value={params?.company && params?.company.companyName}
            />
            <Input
              name="email"
              label={`${Language.fields.email} *`}
              type="email"
              value={params?.company.user.email}
            />
            <InputDropDown
              name="industry"
              label={`${Language.fields.industry} *`}
              options={optionsIndustry}
              value={params?.company.industry}
            />
          </ContentInput>
          <ContentInput>
            <Input
              name="site"
              label={`${Language.fields.webSiteUrl} *`}
              value={params?.company.site}
            />
            <InputDropDown
              name="size"
              label={Language.fields.size}
              options={optionsSize}
              value={params?.company.size}
            />
            {companyLogo && companyLogo !== 'undefined' ? (
              <ContentPicture
                pictureUrl={companyLogo}
                onRemove={() => {
                  setCompanyLogo('');
                }}
              />
            ) : (
              <ButtonUpload name="upload">
                {Language.page.companies.sendLogo}
              </ButtonUpload>
            )}
          </ContentInput>
        </Section>
        <Section label={Language.page.companies.contactInformation}>
          <ContentInput>
            <Input
              name="name"
              label={`${Language.fields.fullName} *`}
              value={params?.company.user.name}
            />
            <Input
              name="lastName"
              label={`${Language.fields.lastName} *`}
              value={params?.company.user.lastName}
            />
          </ContentInput>
          <ContentInput>
            <Input
              name="address1"
              label={Language.fields.adressLine1}
              value={params?.company.address1}
            />
            <Input
              name="address2"
              label={Language.fields.adressLine2}
              value={params?.company.address2}
            />
          </ContentInput>
          <ContentInput>
            <Input
              name="city"
              label={Language.fields.city}
              value={params?.company.city}
            />
            <Input
              name="phone"
              label={`${Language.fields.phone} *`}
              mask="phone"
              value={params?.company.user.phone}
            />
            <InputDropDown
              name="country"
              label={Language.fields.country}
              options={optionsCountry}
              value={params?.company.country}
            />
          </ContentInput>
        </Section>

        <Section label={Language.page.companies.socialMedia}>
          <ContentInput>
            <Input
              name="facebook"
              label={Language.fields.facebook}
              value={params?.company.facebook}
            />
            <Input
              name="instagram"
              label={Language.fields.instagram}
              value={params?.company.instagram}
            />
            <Input
              name="linkedin"
              label={Language.fields.linkedin}
              value={params?.company.linkedin}
            />
          </ContentInput>
        </Section>
        <Section label={Language.page.companies.aditionalInfo}>
          <ContentInput>
            <InputDropDown
              name="teamLeader"
              label="Team Leader"
              options={optionsTeamLeader}
              value={
                params?.company.userTeamLeader
                  ? params?.company.userTeamLeader.id
                  : ''
              }
            />

            <InputDropDown
              name="interestSkills"
              label="Department"
              options={optionsInterestSkills}
              value={params?.company.interestSkills.id}
            />
          </ContentInput>
        </Section>
        <Section label={Language.permissions}>
          <ContentInput>
            <InputSwitch
              label={Language.fields.status}
              name="status"
              valueDefault={!!params?.company.user.status}
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
