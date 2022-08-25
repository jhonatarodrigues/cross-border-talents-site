import React, { useRef, useCallback, useEffect, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as Yup from 'yup';

import IconIct from '../../assets/svg/ict';
import IconGear from '../../assets/svg/gear';
import IconStar from '../../assets/svg/star';
import IconPlanet from '../../assets/svg/planet';
import IconBookMark from '../../assets/svg/bookMark';
import IconFolder from '../../assets/svg/folder';
import IconDocument from '../../assets/svg/document';
import IconProfile from '../../assets/svg/profile';
import IconMultilingual from '../../assets/svg/multilingual';
import IconPaper from '../../assets/svg/paper';
import IconFilter from '../../assets/svg/filter';

import { htmlURIDecode } from '../../util/format';
import CustomModal from '../../components/CustomModal';
import { AddCompanyModalPage } from '../../hooks/admin/useCompanies';
import {
  GetTestimonialsSearch,
  ITestimonials,
} from '../../hooks/admin/useTestimonials';
import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import { GetInterestSkills } from '../../hooks/admin/useInterestSkills';
import { GetJobsPage, IJobs } from '../../hooks/admin/useJobs';
import {
  GetTalentPoolsPage,
  IResponseUser,
} from '../../hooks/admin/useTalentPool';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import Input from '../../components/input';
import Modal from '../../components/modal';
import InputDropDown, {
  IOptionsDropdown,
} from '../../components/inputDropdown';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';
import Language from '../../language';
import {
  Banner,
  Title,
  ContentTitle,
  ExpertiseBLock,
  TitleExpertise,
  InputCheck,
  ExpertiseBlockType,
  TitleExpertiseBlockType,
  TextExpertiseBlockType,
  ContentIconExpertise,
  ExpertiseArrow,
  NewJobBLock,
  TextModal,
  NewJobItem,
  NewJobItemContentIconText,
  NewJobTitleContent,
  TagNewJobItem,
  NewJobTagType,
  BlockStopWorrying,
  WastedIconContent,
  BlockStopWorryingImageContent,
  BlockStopWorryingImage,
  BlockStopWorryingImageBack,
  BlockContactUs,
  BlockContactUsForm,
  ContactBlockInfo,
  FormRender,
  TextHaveAccount,
  BestChoice,
  BestChoiceItem,
  BestChoiceItemText,
  BlockGetFree,
  BlockGetFreeItem,
  GetFreeContentIcon,
  CandidatesWeek,
  ExpertiseBLockImageOrnament,
  ExpertiseBLockImageBack,
  ExpertiseBLockImage,
  NewJobItemContentIcon,
  ExpertiseBLockContentText,
  TagItem,
  NewJobItemTag,
} from './style';

export default function TopCandidates(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [talentPool, setTalentPool] = useState<IResponseUser>();
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const [modalRegister, setModalRegister] = useState(false);
  const formRefRegister = useRef<FormHandles>(null);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

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

  const getTalentPool = useCallback(async () => {
    const response = await GetTalentPoolsPage({ limit: 4 });

    setTalentPool(response);
  }, []);
  useEffect(() => {
    getTalentPool();
  }, [getTalentPool]);

  const handleSubmit: SubmitHandler = useCallback(
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

          formRef.current?.setErrors(validationErrors);
        }
      }
    },
    [navigate],
  );

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      const options: IOptionsDropdown[] = countries.map(countryItem => {
        return {
          value: countryItem.countryShortCode,
          label: countryItem.countryName,
        };
      });
      setCountry(countries);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);
  const getJobs = useCallback(async (search?: string) => {
    try {
      const response = await GetJobsPage({
        search,
        itensPerPage: 4,
        page: 1,
      });

      setJobs(response.jobsSearch.jobs);
    } catch {
      Modal({ keyType: 'getJobs', icon: 'error' });
    }
  }, []);

  const getTestimonials = useCallback(async () => {
    try {
      const response = await GetTestimonialsSearch({
        itensPerPage: 4,
        page: 1,
      });
      setTestimonials(response.testimonialsSearch.testimonials);
    } catch {
      Modal({ keyType: 'getTestimonials', icon: 'error' });
    }
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

  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);
  useEffect(() => {
    getJobs();
  }, [getJobs]);
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <ContentSite>
      {renderModalRegister()}
      <Banner>
        <ContainerSite>
          <Default.Row>
            <ContentTitle>
              <Title>
                The best <br className="hiddenMobile" />
                candidates for the <br className="hiddenMobile" />
                best companies.
              </Title>
              <Default.Title2 color={Default.color.success}>
                ENTER OUR TALENT POOL FOR FREE
              </Default.Title2>
            </ContentTitle>
          </Default.Row>
        </ContainerSite>
      </Banner>

      <ExpertiseBLock>
        <ContainerSite>
          <Default.Column justifyContent="center" alignItens="center">
            <TitleExpertise>Choose your Talent Pool</TitleExpertise>
            <Default.Space h="1.25rem" />
            <Default.Title2 color={Default.color.success}>
              And make the perfect match
            </Default.Title2>
          </Default.Column>
          <Default.Row alignItens="stretch">
            <ExpertiseBlockType
              onClick={() => {
                navigate('/talent-pool/preview', {
                  state: {
                    department: 'ICT',
                  },
                });
              }}
            >
              <ContentIconExpertise>
                <IconIct />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>ICT</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  ICT professionals available to work in your company
                </TextExpertiseBlockType>
              </Default.Column>

              <ExpertiseArrow>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color={Default.color.blueLight}
                  fontSize={15}
                />
              </ExpertiseArrow>
            </ExpertiseBlockType>
            <ExpertiseBlockType
              onClick={() => {
                navigate('/talent-pool/preview', {
                  state: {
                    department: 'Multilingual',
                  },
                });
              }}
            >
              <ContentIconExpertise>
                <IconMultilingual />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>Multilingual</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  MULTILINGUAL professionals available to work in your company
                </TextExpertiseBlockType>
              </Default.Column>

              <ExpertiseArrow>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color={Default.color.blueLight}
                  fontSize={15}
                />
              </ExpertiseArrow>
            </ExpertiseBlockType>
            <ExpertiseBlockType
              onClick={() => {
                navigate('/talent-pool/preview', {
                  state: {
                    department: 'Engineering',
                  },
                });
              }}
            >
              <ContentIconExpertise>
                <IconGear />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>Engineering</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Engineering professionals available to work in your company
                </TextExpertiseBlockType>
              </Default.Column>

              <ExpertiseArrow>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color={Default.color.blueLight}
                  fontSize={15}
                />
              </ExpertiseArrow>
            </ExpertiseBlockType>
          </Default.Row>
        </ContainerSite>
      </ExpertiseBLock>
      <CandidatesWeek>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
            Top Candidates of the Week
          </Default.TitleH3>
          <Default.Space h="6.625rem" />
          <Default.Row>
            <ExpertiseBLockImage>
              <ExpertiseBLockImageOrnament />
              <ExpertiseBLockImageBack />
            </ExpertiseBLockImage>
            <ExpertiseBLockContentText>
              <Default.Column>
                <Default.TitleH3 color={Default.color.blueBase}>
                  Top Candidates.
                  <br />
                  Every week.
                </Default.TitleH3>
                <Default.Space h="1rem" />
                <Default.Subtitle color={Default.color.gray}>
                  Every week we highlight the best candidate to join your
                  company. Not what you need? Access top talent quickly through
                  our platform and interview today exclusive multilingual tech
                  profiles Access top talent quickly through our platform and
                  interview today exclusive multilingual tech profiles.
                </Default.Subtitle>
                <Default.Row>
                  <Default.Row>
                    <Default.Column
                      alignItens="flex-start"
                      justifyContent="flex-start"
                    >
                      <Default.Space h="1.75rem" />
                      <IconStar />
                      <Default.Space h="1rem" />
                      <Default.Title2 color={Default.color.blueOriginal}>
                        Highlights to <br />
                        you company
                      </Default.Title2>
                    </Default.Column>
                    <Default.Space w="3.125rem" />
                    <Default.Column
                      alignItens="flex-start"
                      justifyContent="flex-start"
                    >
                      <Default.Space h="1.75rem" />
                      <IconFilter />
                      <Default.Space h="1rem" />
                      <Default.Title2 color={Default.color.blueOriginal}>
                        Quickly <br />
                        filter
                      </Default.Title2>
                    </Default.Column>
                  </Default.Row>
                  <Default.Space w="80%" />
                </Default.Row>

                <Default.Space h="1.875rem" />
                <Default.Text color={Default.color.blueLight2}>
                  Follow our hashtag #cbt_unicorn and stay tuned!
                </Default.Text>
              </Default.Column>
            </ExpertiseBLockContentText>
          </Default.Row>
          <Default.Space h="5rem" />
          <Default.Row alignItens="stretch">
            {talentPool?.talentPools.map(talentPoolItem => {
              let countryDesc = '';

              if (country.length > 0) {
                countryDesc =
                  country.find(
                    (countryItem: ICountrie) =>
                      countryItem.countryShortCode ===
                      talentPoolItem.candidate.country,
                  )?.countryName || '';
              }

              return (
                <NewJobItem onClick={() => setModalRegister(true)}>
                  <NewJobItemTag>Candidate</NewJobItemTag>
                  <Default.Title2 color={Default.color.blue}>
                    {talentPoolItem.profile}
                  </Default.Title2>
                  <Default.Space h="0.625rem" />
                  <NewJobItemContentIcon>
                    <Default.Row alignItens="center">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        color={Default.color.success}
                        fontSize={20}
                      />
                      <NewJobItemContentIconText>
                        {countryDesc}
                      </NewJobItemContentIconText>
                    </Default.Row>
                    <Default.Space h="0.9375rem" className="visibleMobile" />
                    <Default.Row
                      justifyContent="flex-end"
                      alignItens="center"
                      className="hiddenMobile"
                    >
                      <TagItem>ID {talentPoolItem.id}</TagItem>
                    </Default.Row>
                  </NewJobItemContentIcon>
                  <Default.Space h="0.625rem" />
                  <Default.Subtitle
                    color={Default.color.gray}
                    className="textEditor"
                    dangerouslySetInnerHTML={{
                      __html:
                        talentPoolItem.observation &&
                        talentPoolItem.observation.length > 50
                          ? `${htmlURIDecode(talentPoolItem.observation).slice(
                              0,
                              50,
                            )}...`
                          : htmlURIDecode(talentPoolItem.observation),
                    }}
                    style={{ flexDirection: 'column' }}
                  />
                </NewJobItem>
              );
            })}
          </Default.Row>
          <Default.Space h="2.5rem" />
          <Default.Row justifyContent="center">
            <Link to="/talent-pool/preview">
              <ButtonSite>Discover all candidates</ButtonSite>
            </Link>
          </Default.Row>
        </ContainerSite>
      </CandidatesWeek>

      <BlockStopWorrying>
        <ContainerSite>
          <Default.Row>
            <Default.Column>
              <Default.TitleH3 color={Default.color.white}>
                Stop worrying <br className="hiddenMobile" />
                about the next <br className="hiddenMobile" />
                interview
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Subtitle color={Default.color.whiteLight}>
                Candidates that don&apos;t fit your company&apos;s needs. A long
                list of interviews to schedule.
              </Default.Subtitle>
              <Default.Space h="45px" />
              <Default.Row>
                <WastedIconContent
                  onClick={() => {
                    navigate('/talent-pool/preview', {
                      state: {
                        department: 'ict',
                      },
                    });
                  }}
                >
                  <IconIct />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    ICT
                  </Default.Title2>
                </WastedIconContent>

                <WastedIconContent
                  onClick={() => {
                    navigate('/talent-pool/preview', {
                      state: {
                        department: 'Engineering',
                      },
                    });
                  }}
                >
                  <IconGear />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    Engineering
                  </Default.Title2>
                </WastedIconContent>
              </Default.Row>
              <Default.Space h="2.5rem" />
              <Default.Row>
                <WastedIconContent
                  onClick={() => {
                    navigate('/talent-pool/preview', {
                      state: {
                        department: 'multilingual',
                      },
                    });
                  }}
                >
                  <IconMultilingual />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    Multilingual Tech
                  </Default.Title2>
                </WastedIconContent>
              </Default.Row>
            </Default.Column>

            <BlockStopWorryingImageContent>
              <BlockStopWorryingImage />
              <BlockStopWorryingImageBack />
            </BlockStopWorryingImageContent>
          </Default.Row>

          <Default.Space h="6.25rem" className="visibleMobile" />
          <Default.Space h="11.25rem" className="hiddenMobile" />
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            Get free access to an exclusive list of top candidates.
          </Default.TitleH3>
          <Default.Space h="3.75rem" />
          <Default.Row alignItens="stretch">
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconPlanet />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>
                  International <br className="hiddenMobile" />
                  Recruitment
                </TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  We are Experts in sourcing Hard to Find Profiles for 4
                  domains; Engineering, Information Technology, and MULTILINGUAL
                  Tech.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconBookMark />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>
                  Skilled <br className="hiddenMobile" />
                  Professionals
                </TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Senior solutions in International Recruitment. Since 2014 we
                  recruited and integrated +500 Engineers for Central Europe.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconStar />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>
                  3 Seals of <br className="hiddenMobile" /> Excellence
                </TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  We are the only recruitment company awarded with 3 Seals of
                  Excellence by Horizon 2020; EU&apos;s research and innovation
                  funding program.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
          </Default.Row>
        </ContainerSite>
      </BlockStopWorrying>
      <BlockContactUs>
        <ContainerSite>
          <Default.Row>
            <div>
              <Default.Column>
                <Default.TitleH3 color={Default.color.blueOriginal}>
                  Register for <br />
                  free, and access <br />
                  our talent pool!
                </Default.TitleH3>
                <Default.Space h="1.875rem" />
                <Default.Subtitle color={Default.color.gray}>
                  Access our Talent Pool today and find <br />
                  exclusive candidates available for <br />
                  relocation. <br />
                  <br />
                  Get free access to an exclusive list <br />
                  of top candidates.
                </Default.Subtitle>
              </Default.Column>
            </div>
            <BlockContactUsForm id="topCandidatesForm">
              <ContactBlockInfo>
                Request you access to the Talent Pool
              </ContactBlockInfo>

              <Default.Column justifyContent="space-between">
                <FormRender
                  ref={formRef}
                  onSubmit={handleSubmit}
                  onClick={() => formRef.current?.setErrors({})}
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
      <BlockGetFree>
        <ContainerSite>
          <Default.Column justifyContent="center">
            <Default.Row justifyContent="center">
              <Default.TitleH3
                color={Default.color.blueOriginal}
                textAlignCenter
              >
                Get free access to an exclusive <br />
                list of top candidates
              </Default.TitleH3>
            </Default.Row>
            <Default.Space h="1.75rem" />
            <Default.Row justifyContent="center">
              <Default.Subtitle color={Default.color.success} textAlignCenter>
                The best team of recruiters working to find top candidates for
                your company.
              </Default.Subtitle>
            </Default.Row>

            <Default.Space h="5rem" />

            <Default.Row>
              <BlockGetFreeItem>
                <Default.Row>
                  <GetFreeContentIcon>
                    <IconFolder />
                  </GetFreeContentIcon>
                  <Default.Space w="2.1875rem" />
                  <Default.Title2 color={Default.color.gray}>
                    Free access to an exclusive list of experienced profiles
                    available to your company.
                  </Default.Title2>
                </Default.Row>
              </BlockGetFreeItem>

              <BlockGetFreeItem>
                <Default.Row>
                  <GetFreeContentIcon>
                    <IconProfile />
                  </GetFreeContentIcon>
                  <Default.Space w="2.1875rem" />
                  <Default.Title2 color={Default.color.gray}>
                    Do not waste time with another interview. We work hard to
                    find the best fit foryour company.
                  </Default.Title2>
                </Default.Row>
              </BlockGetFreeItem>
            </Default.Row>

            <Default.Space h="3.125rem" />
            <Default.Row alignItens="stretch">
              <BlockGetFreeItem>
                <Default.Row>
                  <GetFreeContentIcon>
                    <IconDocument />
                  </GetFreeContentIcon>
                  <Default.Space w="2.1875rem" />
                  <Default.Title2 color={Default.color.gray}>
                    Top profiles available in Engineering, ICT and Multilingual
                    fields. The best team of recruiters working to find top
                    candidates for your company.
                  </Default.Title2>
                </Default.Row>
              </BlockGetFreeItem>
            </Default.Row>
          </Default.Column>
          <Default.Space h="5rem" />
          <Default.Row justifyContent="center">
            <Link to="/talent-pool/preview">
              <ButtonSite bgColor={Default.color.blueOriginal}>
                Access the Talent Pool for free
              </ButtonSite>
            </Link>
          </Default.Row>
        </ContainerSite>
      </BlockGetFree>
      <BestChoice>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            Why CBT is your best choice?
          </Default.TitleH3>
          <Default.Space h="1.25rem" />
          <Default.Subtitle textAlignCenter>
            Testimonials from our candidates
          </Default.Subtitle>
          <Default.Space h="4.375rem" />

          <Default.Row>
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={window.innerWidth > 768 ? 2 : 1}
              slidesToScroll={1}
              adaptiveHeight
              arrows
            >
              {testimonials.map(testimonial => {
                return (
                  <BestChoiceItem>
                    <Default.Column justifyContent="space-between">
                      <Default.Title2 color={Default.color.success}>
                        {testimonial.name}
                      </Default.Title2>
                      <Default.Space h="15px" />
                      <Default.Text
                        color={Default.color.white}
                        className="textEditor"
                        dangerouslySetInnerHTML={{
                          __html:
                            testimonial.testimonial.length > 480
                              ? `${htmlURIDecode(testimonial.testimonial).slice(
                                  0,
                                  480,
                                )}...`
                              : htmlURIDecode(testimonial.testimonial),
                        }}
                        style={{ flexDirection: 'column' }}
                      />
                      <Default.Space h="30px" />
                      <BestChoiceItemText color={Default.color.whiteLight}>
                        {testimonial.observations}
                      </BestChoiceItemText>
                    </Default.Column>
                  </BestChoiceItem>
                );
              })}
            </Slider>
          </Default.Row>

          <Default.Space h="2.5rem" />
          <Default.Row justifyContent="center">
            <Link to="/testimonials">
              <ButtonSite bgColor={Default.color.spotlight}>
                See all testimonials
              </ButtonSite>
            </Link>
          </Default.Row>
        </ContainerSite>
      </BestChoice>
    </ContentSite>
  );
}
