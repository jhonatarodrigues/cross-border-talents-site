import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../components/inputDropdown';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ContentInput from '../../components/contentInput';
import Modal from '../../components/modal';
import { GetInterestSkills } from '../../hooks/admin/useInterestSkills';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';
import Language from '../../language';
import {
  Banner,
  Title,
  BlockForEmployers,
  BlockFilter,
  ContentButtonSearch,
  ContainerTag,
  TagIcon,
  ContentBox,
  Box,
  NewJobItemContentIconText,
  TagNewJobItem,
} from './style';

export default function ForEmployers(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
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

  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Title>
            Your international <br /> job opportunity here
          </Title>
        </ContainerSite>
      </Banner>
      <BlockForEmployers>
        <ContainerSite>
          <BlockFilter>
            <Default.Title3 color={Default.color.blueLight}>
              Find 332 jobs opportunities
            </Default.Title3>
            <Default.Space height="2.5rem" />
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              onClick={() => formRef.current?.setErrors({})}
            >
              <Default.Column>
                <ContentInput>
                  <InputDropDown
                    name="interestSkills"
                    label={Language.fields.department}
                    options={optionsInterestSkills}
                  />
                  <InputDropDown
                    name="allRegions"
                    label={Language.fields.allRegions}
                    options={optionsInterestSkills}
                  />
                  <InputDropDown
                    name="typeOfContract"
                    label={Language.fields.typeOfContract}
                    options={optionsInterestSkills}
                  />
                  <InputDropDown
                    name="experienceLevel"
                    label={Language.fields.experienceLevel}
                    options={optionsInterestSkills}
                  />
                </ContentInput>
                <ContentInput>
                  <InputDropDown
                    name="language"
                    label={Language.fields.language}
                    options={optionsInterestSkills}
                  />
                  <Input
                    name="searchJobTitle"
                    label={Language.fields.searchJobTitle}
                  />
                  <ContentButtonSearch>
                    <ButtonSite bgColor={Default.color.spotlight}>
                      Search Job
                    </ButtonSite>
                  </ContentButtonSearch>
                </ContentInput>
              </Default.Column>
            </Form>
            <Default.Space height="1.875rem" />
            <Default.Row>
              <ContainerTag>
                <TagIcon color={Default.color.success} />
                <Default.Text2 color={Default.color.gray}>
                  Full-time
                </Default.Text2>
              </ContainerTag>
              <ContainerTag>
                <TagIcon color={Default.color.blueLight2} />
                <Default.Text2 color={Default.color.gray}>
                  Freelancer
                </Default.Text2>
              </ContainerTag>
              <ContainerTag>
                <TagIcon color={Default.color.blueBase} />
                <Default.Text2 color={Default.color.gray}>
                  Part-time
                </Default.Text2>
              </ContainerTag>
              <ContainerTag>
                <TagIcon color={Default.color.spotlight} />
                <Default.Text2 color={Default.color.gray}>
                  Eramus + Traineeship
                </Default.Text2>
              </ContainerTag>
              <ContainerTag>
                <TagIcon color={Default.color.greenLemon} />
                <Default.Text2 color={Default.color.gray}>
                  Internship
                </Default.Text2>
              </ContainerTag>
            </Default.Row>
          </BlockFilter>

          <Default.Space height="8.125rem" />
          <ContentBox>
            <Box>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
                </Default.Title4>
                <Default.Space height="1.25rem" />
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
                    <TagNewJobItem color={Default.color.success}>
                      Full-time
                    </TagNewJobItem>
                  </Default.Row>
                </Default.Row>
                <Default.Space height="0.625rem" />
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space height="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    Apply Now
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                  <ButtonSite bgColor={Default.color.gray} variant="outlined">
                    See More
                  </ButtonSite>
                </Default.Row>
              </Default.Column>
            </Box>
            <Box>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
                </Default.Title4>
                <Default.Space height="1.25rem" />
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
                    <TagNewJobItem color={Default.color.success}>
                      Full-time
                    </TagNewJobItem>
                  </Default.Row>
                </Default.Row>
                <Default.Space height="0.625rem" />
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space height="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    Apply Now
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                  <ButtonSite bgColor={Default.color.gray} variant="outlined">
                    See More
                  </ButtonSite>
                </Default.Row>
              </Default.Column>
            </Box>
            <Box>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
                </Default.Title4>
                <Default.Space height="1.25rem" />
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
                    <TagNewJobItem color={Default.color.success}>
                      Full-time
                    </TagNewJobItem>
                  </Default.Row>
                </Default.Row>
                <Default.Space height="0.625rem" />
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space height="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    Apply Now
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                  <ButtonSite bgColor={Default.color.gray} variant="outlined">
                    See More
                  </ButtonSite>
                </Default.Row>
              </Default.Column>
            </Box>
            <Box>
              <Default.Column>
                <Default.Title4 color={Default.color.blue}>
                  Backend Engineer Connectivity Team
                </Default.Title4>
                <Default.Space height="1.25rem" />
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
                    <TagNewJobItem color={Default.color.success}>
                      Full-time
                    </TagNewJobItem>
                  </Default.Row>
                </Default.Row>
                <Default.Space height="0.625rem" />
                <Default.Text2 color={Default.color.gray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed...
                </Default.Text2>
                <Default.Space height="0.9375rem" />
                <Default.Row>
                  <ButtonSite bgColor={Default.color.success}>
                    Apply Now
                  </ButtonSite>
                  <Default.Space w="0.625rem" />
                  <ButtonSite bgColor={Default.color.gray} variant="outlined">
                    See More
                  </ButtonSite>
                </Default.Row>
              </Default.Column>
            </Box>
          </ContentBox>
        </ContainerSite>
      </BlockForEmployers>
    </ContentSite>
  );
}
