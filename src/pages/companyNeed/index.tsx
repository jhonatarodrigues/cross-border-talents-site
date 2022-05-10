import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Input from '../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../components/inputDropdown';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import { GetInterestSkills } from '../../hooks/admin/useInterestSkills';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';
import Language from '../../language';
import CustomModal from '../../components/CustomModal';
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

export default function CompanyNeed(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const formRefContactUs = useRef<FormHandles>(null);
  const formRefRegister = useRef<FormHandles>(null);
  const [modalRegister, setModalRegister] = useState(false);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);

  const handleSubmit: SubmitHandler = useCallback(async data => {
    console.log('submit');
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
      //   Modal({ keyType: 'getInterestSkills', icon: 'error' });
    }
  }, []);
  //   useEffect(() => {
  //     getInterestSkills();
  //   }, [getInterestSkills]);

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
          onSubmit={handleSubmit}
          onClick={() => formRef.current?.setErrors({})}
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
                name="businessEmail"
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
                name="skillsRequired"
                label={`${Language.fields.skillsRequired} *`}
                typeSize="medium"
                options={optionsInterestSkills}
              />
            </ContentInput>
            <Default.Space h="1.875rem" />
            <Default.Row alignItens="center">
              <InputCheck type="radio" name="terms" />
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
  }, [formRefRegister, optionsInterestSkills, handleSubmit, modalRegister]);

  return (
    <ContentSite>
      {renderModalRegister()}
      <Banner>
        <ContainerSite>
          <Title>
            We have what your <br />
            company need right here
          </Title>
        </ContainerSite>
      </Banner>
      <BlockForEmployers>
        <ContainerSite>
          <BlockFilter>
            <Default.Title3 color={Default.color.blueLight}>
              Find 367 Multilingual top candidates
            </Default.Title3>
            <Default.Space h="2.5rem" />
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
                    name="residence"
                    label={Language.fields.residence}
                    options={optionsInterestSkills}
                  />
                  <InputDropDown
                    name="academyBackground"
                    label={Language.fields.academyBackground}
                    options={optionsInterestSkills}
                  />
                  <InputDropDown
                    name="multilingual"
                    label={Language.fields.multilingual}
                    options={optionsInterestSkills}
                  />
                  <InputDropDown
                    name="language"
                    label={Language.fields.language}
                    options={optionsInterestSkills}
                  />
                </ContentInput>
                <ContentInput>
                  <Input
                    name="typeCategory"
                    label={Language.fields.typeCategory}
                  />
                  <ContentButtonSearch>
                    <ButtonSite bgColor={Default.color.spotlight}>
                      Search Job
                    </ButtonSite>
                  </ContentButtonSearch>
                </ContentInput>
              </Default.Column>
            </Form>
          </BlockFilter>

          <Default.Space h="7.1875rem" />
          <ContentBox>
            <Box>
              <TagBox>Candidate</TagBox>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
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
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space h="0.9375rem" />
                <Default.Row>
                  <ButtonSite
                    bgColor={Default.color.success}
                    onClick={() => setModalRegister(true)}
                  >
                    <FontAwesomeIcon icon={faEye} color={Default.color.white} />
                    &nbsp;&nbsp;Blind CV
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                </Default.Row>
              </Default.Column>
            </Box>
            <Box>
              <TagBox>Candidate</TagBox>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
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
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space h="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    <FontAwesomeIcon icon={faEye} color={Default.color.white} />
                    &nbsp;&nbsp;Blind CV
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                </Default.Row>
              </Default.Column>
            </Box>
            <Box>
              <TagBox>Candidate</TagBox>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
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
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space h="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    <FontAwesomeIcon icon={faEye} color={Default.color.white} />
                    &nbsp;&nbsp;Blind CV
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                </Default.Row>
              </Default.Column>
            </Box>
            <Box>
              <TagBox>Candidate</TagBox>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
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
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space h="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    <FontAwesomeIcon icon={faEye} color={Default.color.white} />
                    &nbsp;&nbsp;Blind CV
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                </Default.Row>
              </Default.Column>
            </Box>
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
            <BlockContactUsForm>
              <ContactBlockInfo>
                Request you access to the Talent Pool
              </ContactBlockInfo>

              <Default.Column justifyContent="space-between">
                <FormRender
                  ref={formRefContactUs}
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
    </ContentSite>
  );
}