import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/input';
import InputDropDown, {
  IOptionsDropdown,
} from '../../components/inputDropdown';
import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import { GetJobsPage, IJobs } from '../../hooks/admin/useJobs';
import { GetLanguages } from '../../hooks/admin/useLanguages';
import { GetContracts, IContract } from '../../hooks/admin/useContract';
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
  BoxTag,
} from './style';

export default function ForEmployers(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [numberJobs, setNumberJobs] = useState<number>(0);
  const [contracts, setContracts] = useState<IContract[]>([]);
  const optionsNativeLanguage: IOptionsDropdown[] =
    GetLanguages().languages.map(item => {
      return {
        value: item.code,
        label: item.name,
      };
    });

  const getContracts = useCallback(async () => {
    const response = await GetContracts();
    setContracts(response.typeContracts);
  }, []);
  useEffect(() => {
    getContracts();
  }, [getContracts]);

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

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      const options: IOptionsDropdown[] = countries.map(countryItem => {
        return {
          value: countryItem.code,
          label: countryItem.name,
        };
      });
      setCountry(countries);
      setOptionsCountry(options);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const getJobs = useCallback(async (search?: string) => {
    try {
      const response = await GetJobsPage({
        search,
        // itensPerPage: 10,
        // page: 1,
      });

      setJobs(response.jobsSearch.jobs);
      setNumberJobs(response.jobsSearch.numberAllCandidates);
    } catch {
      Modal({ keyType: 'getJobs', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const handleSubmit: SubmitHandler = useCallback(
    async data => {
      if (data.searchJobTitle) {
        getJobs(data.searchJobTitle);
      } else {
        getJobs();
      }
    },
    [getJobs],
  );

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
            {numberJobs > 1 && (
              <>
                <Default.Title3 color={Default.color.blueLight}>
                  Find {numberJobs} jobs opportunities
                </Default.Title3>
                <Default.Space h="2.5rem" />
              </>
            )}
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
                    options={[]}
                  />
                  <InputDropDown
                    name="typeOfContract"
                    label={Language.fields.typeOfContract}
                    options={contracts.map(item => {
                      return {
                        value: item.id,
                        label: item.name,
                      };
                    })}
                  />
                  <InputDropDown
                    name="experienceLevel"
                    label={Language.fields.experienceLevel}
                    options={[]}
                  />
                </ContentInput>
                <ContentInput>
                  <InputDropDown
                    name="language"
                    label={Language.fields.language}
                    options={optionsNativeLanguage}
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
            <Default.Space h="1.875rem" />
            <Default.Row>
              {contracts.map(item => {
                return (
                  <ContainerTag key={item.id}>
                    <TagIcon color={item.color} />
                    <Default.Text2 color={Default.color.gray}>
                      {item.name}
                    </Default.Text2>
                  </ContainerTag>
                );
              })}
            </Default.Row>
          </BlockFilter>

          <Default.Space h="8.125rem" />
          <ContentBox>
            {jobs.map((job: IJobs) => {
              let countryDesc = '';

              if (country.length > 0) {
                countryDesc =
                  country.find(
                    (countryItem: ICountrie) =>
                      countryItem.code === job.country,
                  )?.name || '';
              }

              return (
                <Box key={job.id}>
                  <BoxTag>Job Opportunity</BoxTag>
                  <Default.Column>
                    <Default.Title4 color={Default.color.blue}>
                      {job.jobTitle}
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
                      <Default.Row justifyContent="flex-end">
                        <TagNewJobItem color={Default.color.success}>
                          Full-time
                        </TagNewJobItem>
                      </Default.Row>
                    </Default.Row>
                    <Default.Space h="0.625rem" />
                    <Default.Text2
                      color={Default.color.gray}
                      dangerouslySetInnerHTML={{
                        __html:
                          job.description.length > 50
                            ? `${job.description.slice(0, 50)}...`
                            : job.description,
                      }}
                    />
                    <Default.Space h="0.9375rem" />
                    <Default.Row>
                      <ButtonSite bgColor={Default.color.success}>
                        Apply Now
                      </ButtonSite>
                      <Default.Space w="0.625rem" />
                      <ButtonSite
                        bgColor={Default.color.gray}
                        variant="outlined"
                      >
                        See More
                      </ButtonSite>
                    </Default.Row>
                  </Default.Column>
                </Box>
              );
            })}
          </ContentBox>
        </ContainerSite>
      </BlockForEmployers>
    </ContentSite>
  );
}
