import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../components/input';
import { htmlURIDecode } from '../../util/format';
import InputDropDown, {
  IOptionsDropdown,
} from '../../components/inputDropdown';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import { GetInterestSkills } from '../../hooks/admin/useInterestSkills';
import { GetLanguages } from '../../hooks/admin/useLanguages';
import {
  GetTalentPoolsPage,
  ITalentPools,
  IFilter,
} from '../../hooks/admin/useTalentPool';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';
import Language from '../../language';
import CustomModal from '../../components/CustomModal';
import Modal from '../../components/modal';
import { AddCompanyModalPage } from '../../hooks/admin/useCompanies';
import {
  Banner,
  Title,
  BlockForEmployers,
  BlockFilter,
  ContentButtonSearch,
  ContentBox,
  Box,
  NewJobItemContentIconText,
  TagNewJobItem,
  TagBox,
  BlockContactUs,
  BlockContactUsForm,
  ContactBlockInfo,
  FormRender,
  TextHaveAccount,
  TextModal,
  InputCheck,
} from './style';

interface IRequestState {
  department: string;
}

export default function CompanyNeed(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const formRefContactUs = useRef<FormHandles>(null);
  const formRefRegister = useRef<FormHandles>(null);
  const [modalRegister, setModalRegister] = useState(false);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [filter, setFilter] = useState<IFilter>();
  const [candidates, setCandidates] = useState<ITalentPools[]>([]);
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [terms, setTerms] = useState(false);
  const stateRequest = useLocation().state as IRequestState;
  const navigate = useNavigate();

  const optionsNativeLanguage: IOptionsDropdown[] =
    GetLanguages().languages.map(item => {
      return {
        value: item.code,
        label: item.name,
      };
    });

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      setCountry(countries);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);
  const getInterestSkills = useCallback(async () => {
    const { interestSkills } = await GetInterestSkills();
    if (interestSkills) {
      const options: IOptionsDropdown[] = [];

      interestSkills.map(item => {
        if (!item.internal) {
          options.push({
            value: item.id,
            label: item.name,
          });
        }

        return item;
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
    getCountries();
  }, [getCountries]);

  const getCandidates = useCallback(async () => {
    try {
      const response = await GetTalentPoolsPage({ ...filter });

      setCandidates(response.talentPools);
    } catch {
      Modal({ keyType: 'getCandidates', icon: 'error' });
    }
  }, [filter]);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    setFilter({
      country: data.country,
      department: data.multilingual,
      language: data.language,
      search: data.typeCategory,
    });
  }, []);
  const handleSubmitRegister: SubmitHandler = useCallback(
    async data => {
      if (!terms) {
        Modal({ keyType: 'acceptTerms', icon: 'error' });
        return;
      }

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          companyName: Yup.string().required(),
          idInterestSkills: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        AddCompanyModalPage(data)
          .then(response => {
            if (response.data.createCompanie.user.id) {
              Modal({
                keyType: 'registerModalCompanySuccess',
                icon: 'success',
                onClick: () => {
                  setModalRegister(false);
                  navigate('/admin/login');
                },
              });
            }
          })
          .catch(() => {
            Modal({
              keyType: 'registerModalCompany',
              icon: 'error',
            });
          });
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRefRegister.current?.setErrors(validationErrors);
        }
      }
    },
    [terms, navigate],
  );

  const renderModalRegister = useCallback(() => {
    if (!modalRegister) {
      return null;
    }

    return (
      <CustomModal
        textBlue={
          <TextModal>
            Already have an account?&nbsp;<Link to="/">Login here</Link>
          </TextModal>
        }
        onClose={() => setModalRegister(false)}
      >
        <Default.Title2 color={Default.color.blueOriginal}>
          You need to register or login to <br />
          see the Blind CV
        </Default.Title2>
        <Default.Space h="1.875rem" />
        <FormRender
          ref={formRefRegister}
          onSubmit={handleSubmitRegister}
          onClick={() => formRefRegister.current?.setErrors({})}
        >
          <Default.Column>
            <ContentInput>
              <Input
                name="name"
                label={`${Language.fields.firstName} *`}
                typeSize="medium"
              />
              <Input
                name="lastName"
                label={`${Language.fields.lastName} *`}
                typeSize="medium"
              />
            </ContentInput>
            <ContentInput>
              <Input
                name="email"
                label={`${Language.fields.businessEmail} *`}
                typeSize="medium"
              />
            </ContentInput>
            <ContentInput>
              <Input
                name="phone"
                label={`${Language.fields.phone} *`}
                typeSize="medium"
              />
              <Input
                name="companyName"
                label={`${Language.fields.companyName} *`}
                typeSize="medium"
              />
            </ContentInput>
            <ContentInput>
              <InputDropDown
                name="idInterestSkills"
                label={`${Language.fields.skillsRequired} *`}
                typeSize="medium"
                options={optionsInterestSkills}
              />
            </ContentInput>
            <Default.Space h="1.875rem" />
            <Default.Row alignItens="center">
              <InputCheck
                type="radio"
                name="terms"
                onChange={item => setTerms(item.target.checked)}
              />
              <Default.Text2 color={Default.color.gray}>
                I have read and agree to the &nbsp;
                <Link to="/">
                  <Default.Text2 color={Default.color.blueOriginal}>
                    Privacy Policy
                  </Default.Text2>
                </Link>{' '}
                &nbsp; terms.
              </Default.Text2>
            </Default.Row>

            <Default.Space h="2.5rem" />
            <Default.Row justifyContent="flex-end">
              <ButtonSite bgColor={Default.color.success}>Register</ButtonSite>
            </Default.Row>
          </Default.Column>
        </FormRender>
      </CustomModal>
    );
  }, [
    formRefRegister,
    optionsInterestSkills,
    handleSubmitRegister,
    modalRegister,
  ]);
  const handleSubmitContactUS: SubmitHandler = useCallback(
    async data => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          companyName: Yup.string().required(),
          idInterestSkills: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        AddCompanyModalPage(data)
          .then(response => {
            if (response.data.createCompanie.user.id) {
              Modal({
                keyType: 'registerModalCompanySuccess',
                icon: 'success',
                onClick: () => {
                  navigate('/admin/login');
                },
              });
            }
          })
          .catch(() => {
            Modal({
              keyType: 'registerModalCompany',
              icon: 'error',
            });
          });
      } catch (err) {
        const validationErrors: Record<string, string> = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });

          formRefContactUs.current?.setErrors(validationErrors);
        }
      }
    },
    [navigate],
  );

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);

  const checkDepartmentState = useCallback(
    (interestSkills: IOptionsDropdown[]) => {
      if (
        stateRequest &&
        stateRequest.department &&
        interestSkills &&
        interestSkills.length > 0
      ) {
        const item = interestSkills.find(
          itemState =>
            itemState.label
              .toLocaleLowerCase()
              .indexOf(stateRequest.department.toLocaleLowerCase()) > -1,
        )?.value;

        if (item) {
          formRef.current?.setFieldValue('multilingual', item);
          setTimeout(() => {
            formRef.current?.submitForm();
          }, 500);
        }
      }
    },
    [stateRequest],
  );

  useEffect(() => {
    checkDepartmentState(optionsInterestSkills);
  }, [checkDepartmentState, optionsInterestSkills]);
  return (
    <ContentSite>
      {renderModalRegister()}
      <Banner>
        <ContainerSite>
          <Title>
            We have what your <br className="hiddenMobile" />
            company need right here
          </Title>
        </ContainerSite>
      </Banner>
      <BlockForEmployers>
        <ContainerSite>
          <BlockFilter>
            {candidates.length > 0 && (
              <>
                <Default.Title3 color={Default.color.blueLight}>
                  Find {candidates.length} top candidates on this category
                </Default.Title3>
                <Default.Space h="2.5rem" />
              </>
            )}
            <Default.Title2 color={Default.color.blueOriginal}>
              Filter Top Profiles of the Week
            </Default.Title2>
            <Default.Space h="1.5625rem" />
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              onClick={() => formRef.current?.setErrors({})}
            >
              <Default.Column>
                <ContentInput>
                  <InputDropDown
                    name="country"
                    label={Language.fields.country}
                    options={[
                      { value: '', label: 'All' },
                      ...country.map(item => ({
                        value: item.countryShortCode,
                        label: item.countryName,
                      })),
                    ]}
                  />

                  <InputDropDown
                    name="multilingual"
                    label={Language.fields.multilingual}
                    options={[
                      { value: '', label: 'All' },
                      ...optionsInterestSkills,
                    ]}
                    // value={checkDepartmentState()}
                  />

                  <Input name="language" label={Language.fields.language} />
                </ContentInput>
                <ContentInput>
                  <Input
                    name="typeCategory"
                    label={Language.fields.typeCategory}
                  />
                  <ContentButtonSearch>
                    <ButtonSite bgColor={Default.color.spotlight}>
                      Find Candidate
                    </ButtonSite>
                  </ContentButtonSearch>
                </ContentInput>
              </Default.Column>
            </Form>
          </BlockFilter>

          <Default.Space h="7.1875rem" />
          <ContentBox>
            {candidates && candidates.length > 0 ? (
              candidates.map(item => {
                let countryDesc = '';

                if (country.length > 0) {
                  countryDesc =
                    country.find(
                      (countryItem: ICountrie) =>
                        countryItem.countryShortCode === item.candidate.country,
                    )?.countryName || '';
                }

                if (!item.charge) {
                  return <div />;
                }

                return (
                  <Box key={item.id} onClick={() => setModalRegister(true)}>
                    <TagBox>Candidate</TagBox>
                    <Default.Column>
                      <Default.Title4 color={Default.color.blue}>
                        {item.profile}
                      </Default.Title4>

                      <Default.Space h="1.25rem" />
                      <Default.Row>
                        <Default.Row alignItens="center">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            color={Default.color.success}
                            fontSize={21}
                          />
                          <NewJobItemContentIconText>
                            {countryDesc}
                          </NewJobItemContentIconText>
                        </Default.Row>
                        <Default.Space
                          h="0.9375rem"
                          className="visibleMobile"
                        />
                        <Default.Row justifyContent="flex-end">
                          <TagNewJobItem color={Default.color.blueBase}>
                            ID {String(item.id).padStart(5, '0')}
                          </TagNewJobItem>
                        </Default.Row>
                      </Default.Row>
                      <Default.Space h="0.625rem" />
                      <Default.Text2
                        color={Default.color.gray}
                        className="textEditor"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.observation && item.observation.length > 50
                              ? `${htmlURIDecode(item.observation).slice(
                                  0,
                                  50,
                                )}...`
                              : htmlURIDecode(item.observation),
                        }}
                        style={{ flexDirection: 'column' }}
                      />
                      <Default.Space h="0.9375rem" />
                      <Default.Row>
                        <ButtonSite bgColor={Default.color.success}>
                          <FontAwesomeIcon
                            icon={faEye}
                            color={Default.color.white}
                          />
                          &nbsp;&nbsp;Blind CV
                        </ButtonSite>
                        <Default.Space w="0.625rem" />
                      </Default.Row>
                    </Default.Column>
                  </Box>
                );
              })
            ) : (
              <Default.Row alignItens="center" justifyContent="center">
                <Default.TitleH3 color={Default.color.gray}>
                  No candidates found
                </Default.TitleH3>
              </Default.Row>
            )}
          </ContentBox>
        </ContainerSite>
      </BlockForEmployers>
      <BlockContactUs>
        <ContainerSite>
          <Default.Row>
            <div>
              <Default.Column>
                <Default.TitleH3 color={Default.color.blueOriginal}>
                  Are you ready <br />
                  to improve the <br />
                  world of work <br />
                  with us?
                </Default.TitleH3>
                <Default.Space h="1.875rem" />
                <Default.Subtitle color={Default.color.gray}>
                  The candidate you need in one place. <br />
                  You just need to request.
                </Default.Subtitle>
              </Default.Column>
            </div>
            <BlockContactUsForm id="topCandidatesForm">
              <ContactBlockInfo>
                Request you access to the Talent Pool
              </ContactBlockInfo>

              <Default.Column justifyContent="space-between">
                <FormRender
                  ref={formRefContactUs}
                  onSubmit={handleSubmitContactUS}
                  onClick={() => formRefContactUs.current?.setErrors({})}
                >
                  <Default.Column>
                    <ContentInput>
                      <Input
                        name="name"
                        label={`${Language.fields.yourName} *`}
                        typeSize="medium"
                      />
                      <Input
                        name="lastName"
                        label={`${Language.fields.lastName} *`}
                        typeSize="medium"
                      />
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="email"
                        label={`${Language.fields.businessEmail} *`}
                        typeSize="medium"
                      />
                      <Input
                        name="phone"
                        label={Language.fields.phone}
                        typeSize="medium"
                      />
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="companyName"
                        label={`${Language.fields.companyName} *`}
                        typeSize="medium"
                      />
                      <InputDropDown
                        name="idInterestSkills"
                        label={`${Language.fields.skillsRequired} *`}
                        typeSize="medium"
                        options={optionsInterestSkills}
                      />
                    </ContentInput>
                    <Default.Space h="0.9375rem" />
                    <Default.Row alignItens="center">
                      <ButtonSite
                        bgColor={Default.color.spotlight}
                        type="submit"
                      >
                        Request Access
                      </ButtonSite>
                      <Default.Space h="0.9375rem" className="visibleMobile" />
                      <TextHaveAccount>
                        Already have an account? &nbsp;
                        <Link to="/admin/login"> Login here</Link>
                      </TextHaveAccount>
                    </Default.Row>
                  </Default.Column>
                </FormRender>
              </Default.Column>
            </BlockContactUsForm>
          </Default.Row>
        </ContainerSite>
      </BlockContactUs>
    </ContentSite>
  );
}
