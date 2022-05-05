import React, { useRef, useCallback, useEffect, useState } from 'react';

import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import Input from '../../components/input';
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
  NewJobItemContentIcon,
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
} from './style';

export default function TopCandidates(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    console.log('submit');
  }, []);
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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
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
            <NewJobItem>
              <NewJobTagType>Candidate</NewJobTagType>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
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
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
                <Default.Row justifyContent="flex-end">
                  <TagNewJobItem color={Default.color.blueBase}>
                    ID 12345
                  </TagNewJobItem>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>

            <NewJobItem>
              <NewJobTagType>Candidate</NewJobTagType>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
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
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
                <Default.Row justifyContent="flex-end">
                  <TagNewJobItem color={Default.color.blueBase}>
                    ID 12345
                  </TagNewJobItem>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
            <NewJobItem>
              <NewJobTagType>Candidate</NewJobTagType>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
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
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
                <Default.Row justifyContent="flex-end">
                  <TagNewJobItem color={Default.color.blueBase}>
                    ID 12345
                  </TagNewJobItem>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
            <NewJobItem>
              <NewJobTagType>Candidate</NewJobTagType>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
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
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
                <Default.Row justifyContent="flex-end">
                  <TagNewJobItem color={Default.color.blueBase}>
                    ID 12345
                  </TagNewJobItem>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
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
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={30}
                  />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    ICT
                  </Default.Title2>
                </WastedIconContent>

                <WastedIconContent>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={30}
                  />
                  <Default.Space h="0.9375rem" />
                  <Default.Title2 color={Default.color.white}>
                    Engineering
                  </Default.Title2>
                </WastedIconContent>
              </Default.Row>
              <Default.Space h="2.5rem" />
              <Default.Row>
                <WastedIconContent>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={30}
                  />
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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.spotlight}
                  fontSize={30}
                />
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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.spotlight}
                  fontSize={30}
                />
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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.spotlight}
                  fontSize={30}
                />
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
            <BlockContactUsForm>
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
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="name"
                        label={`${Language.fields.businessEmail} *`}
                        typeSize="medium"
                      />
                      <Input
                        name="name"
                        label={Language.fields.phone}
                        typeSize="medium"
                      />
                    </ContentInput>
                    <ContentInput>
                      <Input
                        name="name"
                        label={`${Language.fields.companyName} *`}
                        typeSize="medium"
                      />
                      <InputDropDown
                        name="experienceLevel"
                        label={`${Language.fields.skillsRequired} *`}
                        typeSize="medium"
                        options={optionsInterestSkills}
                      />
                    </ContentInput>
                    <Default.Space h="0.9375rem" />
                    <Default.Row alignItens="center">
                      <ButtonSite bgColor={Default.color.spotlight}>
                        Request Access
                      </ButtonSite>
                      <TextHaveAccount>
                        Already have an account? &nbsp;
                        <Link to="/"> Login here</Link>
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
            <BestChoiceItem>
              <Default.Column justifyContent="space-between">
                <Default.Title2 color={Default.color.success}>
                  Mariana C.
                </Default.Title2>
                <Default.Space h="15px" />
                <Default.Text color={Default.color.white}>
                  I would like to thank Morgane for all her help during the
                  recruiting process. She showed great professionalism by
                  explaining to me in detail how the company works and what it
                  could provide me, in addition to finding a job offer that
                  matched my professional experience and expectations, carefully
                  advising me through the entire process until the time of
                  hiring.
                </Default.Text>
                <Default.Space h="30px" />
                <BestChoiceItemText color={Default.color.whiteLight}>
                  Mariana is working as a Customer Delight in Portugal
                </BestChoiceItemText>
              </Default.Column>
            </BestChoiceItem>
            <BestChoiceItem>
              <Default.Column justifyContent="space-between">
                <Default.Title2 color={Default.color.success}>
                  Mariana C.
                </Default.Title2>
                <Default.Space h="15px" />
                <Default.Text color={Default.color.white}>
                  I would like to thank Morgane for all her help during the
                  recruiting process. She showed great professionalism by
                  explaining to me in detail how the company works and what it
                  could provide me, in addition to finding a job offer that
                  matched my professional experience and expectations, carefully
                  advising me through the entire process until the time of
                  hiring.
                </Default.Text>
                <Default.Space h="30px" />
                <BestChoiceItemText color={Default.color.whiteLight}>
                  Mariana is working as a Customer Delight in Portugal
                </BestChoiceItemText>
              </Default.Column>
            </BestChoiceItem>
          </Default.Row>

          <Default.Space h="2.5rem" />
          <Default.Row justifyContent="center">
            <div>
              <ButtonSite bgColor={Default.color.spotlight}>
                See all testimonials
              </ButtonSite>
            </div>
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
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.spotlight}
                    fontSize={42}
                  />
                  <Default.Space w="2.1875rem" />
                  <Default.Title2 color={Default.color.gray}>
                    Free access to an exclusive list of experienced profiles
                    available to join your company.
                  </Default.Title2>
                </Default.Row>
              </BlockGetFreeItem>
              <BlockGetFreeItem>
                <Default.Row>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.spotlight}
                    fontSize={42}
                  />
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
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.spotlight}
                    fontSize={42}
                  />
                  <Default.Space w="2.1875rem" />
                  <Default.Title2 color={Default.color.gray}>
                    Top profiles available in the field of Engineering, ICT, and
                    multilingual Tech.
                  </Default.Title2>
                </Default.Row>
              </BlockGetFreeItem>
              <BlockGetFreeItem>
                <Default.Row>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.spotlight}
                    fontSize={42}
                  />
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
            <div>
              <ButtonSite bgColor={Default.color.blueOriginal}>
                Access the Talent Pool for free
              </ButtonSite>
            </div>
          </Default.Row>
        </ContainerSite>
      </BlockGetFree>
    </ContentSite>
  );
}
