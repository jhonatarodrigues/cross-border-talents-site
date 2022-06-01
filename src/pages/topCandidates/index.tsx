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

import { AddCompanyModalPage } from '../../hooks/admin/useCompanies';
import {
  GetTestimonialsSearch,
  ITestimonials,
} from '../../hooks/admin/useTestimonials';
import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import { GetInterestSkills } from '../../hooks/admin/useInterestSkills';
import { GetJobsPage, IJobs } from '../../hooks/admin/useJobs';
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
  ExpertiseBlockType,
  TitleExpertiseBlockType,
  TextExpertiseBlockType,
  ContentIconExpertise,
  ExpertiseArrow,
  NewJobBLock,
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
} from './style';

export default function TopCandidates(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const navigate = useNavigate();

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
      <Banner>
        <ContainerSite>
          <Default.Row>
            <ContentTitle>
              <Title>
                The best <br />
                candidates for the <br />
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
          <div>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconIct />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>ICT</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
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
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconMultilingual />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>Multilingual</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
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
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconGear />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>Engineering</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
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
          </div>
        </ContainerSite>
      </ExpertiseBLock>
      <NewJobBLock>
        <ContainerSite>
          <Default.Row justifyContent="center">
            <NewJobTitleContent>
              <Default.TitleH3 color={Default.color.blue} textAlignCenter>
                Top candidates of the week
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Subtitle color={Default.color.gray} textAlignCenter>
                Every week we highlight the best candidate to join your company.
                Not what you need? Access top talent quickly through our
                platform and interview today exclusive multilingual tech
                profiles.
              </Default.Subtitle>
            </NewJobTitleContent>
          </Default.Row>
          <Default.Space h="2.5rem" />

          <Default.Row>
            {jobs.map(job => {
              let countryDesc = '';

              if (country.length > 0) {
                countryDesc =
                  country.find(
                    (countryItem: ICountrie) =>
                      countryItem.countryShortCode === job.country,
                  )?.countryName || '';
              }

              return (
                <NewJobItem>
                  <NewJobTagType>Candidate</NewJobTagType>
                  <Default.Title2 color={Default.color.blue}>
                    {job.jobTitle}
                  </Default.Title2>
                  <Default.Space h="0.625rem" />
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
                    <Default.Row justifyContent="flex-end">
                      <TagNewJobItem color={Default.color.blueBase}>
                        ID 12345
                      </TagNewJobItem>
                    </Default.Row>
                  </Default.Row>
                  <Default.Space h="0.625rem" />
                  <Default.Subtitle
                    color={Default.color.gray}
                    dangerouslySetInnerHTML={{
                      __html:
                        job.description.length > 50
                          ? `${job.description.slice(0, 50)}...`
                          : job.description,
                    }}
                  />
                </NewJobItem>
              );
            })}
          </Default.Row>
        </ContainerSite>
      </NewJobBLock>
      <BlockStopWorrying>
        <ContainerSite>
          <Default.Row>
            <Default.Column>
              <Default.TitleH3 color={Default.color.white}>
                Stop worrying <br />
                about the next <br />
                interview
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Subtitle color={Default.color.whiteLight}>
                Access our Talent Pool today and find exclusive candidates
                available to relocate.
              </Default.Subtitle>
              <Default.Space h="45px" />
              <Default.Row>
                <WastedIconContent>
                  <IconIct />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    ICT
                  </Default.Title2>
                </WastedIconContent>

                <WastedIconContent>
                  <IconGear />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    Engineering
                  </Default.Title2>
                </WastedIconContent>
              </Default.Row>
              <Default.Space h="2.5rem" />
              <Default.Row>
                <WastedIconContent>
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

          <Default.Space h="11.25rem" />
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            We work hard to improve the world of work
          </Default.TitleH3>
          <Default.Space h="3.75rem" />
          <div>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconPlanet />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>
                  International <br />
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
                  Skilled <br />
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
                  3 Seals of <br /> Excellence
                </TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  We are the only recruitment company awarded with 3 Seals of
                  Excellence by Horizon 2020; EU&apos;s research and innovation
                  funding program.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
          </div>
        </ContainerSite>
      </BlockStopWorrying>
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
              slidesToShow={2}
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
                        dangerouslySetInnerHTML={{
                          __html:
                            testimonial.testimonial.length > 480
                              ? `${testimonial.testimonial.slice(0, 480)}...`
                              : testimonial.testimonial,
                        }}
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
                    available to join your company.
                  </Default.Title2>
                </Default.Row>
              </BlockGetFreeItem>
              <BlockGetFreeItem>
                <Default.Row>
                  <GetFreeContentIcon>
                    <IconPaper />
                  </GetFreeContentIcon>
                  <Default.Space w="2.1875rem" />
                  <Default.Title2 color={Default.color.gray}>
                    The best team of recruiters working to find top candidates
                    to work in your company.
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
                    Top profiles available in the field of Engineering, ICT, and
                    multilingual Tech.
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
                    No time wasted with another interview. We work hard to find
                    the best fit for your company.
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
    </ContentSite>
  );
}
