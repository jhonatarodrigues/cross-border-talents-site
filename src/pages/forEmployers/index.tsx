import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

import Input from '../../components/input';
import { htmlURIDecode } from '../../util/format';
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

interface IRequestState {
  searchText: string;
  searchCountry: string;
  department: string;
}

export default function ForEmployers(): JSX.Element {
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);
  const [optionsInterestSkills, setOptionsInterestSkills] = useState<
    IOptionsDropdown[]
  >([] as IOptionsDropdown[]);
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [optionsCountry, setOptionsCountry] = useState<IOptionsDropdown[]>(
    [] as IOptionsDropdown[],
  );
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [regions, setRegions] = useState<IOptionsDropdown[]>([]);
  const [numberJobs, setNumberJobs] = useState<number>(0);
  const [contracts, setContracts] = useState<IContract[]>([]);
  const stateRequest = useLocation().state as IRequestState;
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
    if (selectedCountry) {
      formRef.current?.clearField('allRegions');

      const regionSelected = country.find(
        item => item.countryShortCode === selectedCountry,
      );

      if (regionSelected && regionSelected.regions) {
        const options: IOptionsDropdown[] = regionSelected.regions.map(item => {
          return {
            value: item.shortCode,
            label: item.name,
          };
        });
        setRegions(options);
      }
    }
  }, [country, selectedCountry]);

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
          formRef.current?.setFieldValue('interestSkills', item);
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
      setOptionsCountry(options);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const getJobs = useCallback(
    async (search?: string, department?: string, countryFilter?: string) => {
      try {
        const response = await GetJobsPage({
          search,
          department,
          country: countryFilter,

          // itensPerPage: 10,
          // page: 1,
        });

        setJobs(response.jobsSearch.jobs);
        setNumberJobs(response.jobsSearch.numberAllCandidates);
      } catch {
        Modal({ keyType: 'getJobs', icon: 'error' });
      }
    },
    [],
  );

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const handleSubmit: SubmitHandler = useCallback(
    async data => {
      getJobs(data.searchJobTitle, data.interestSkills, data.country);
    },
    [getJobs],
  );

  const checkFilterState = useCallback(
    (countryInterest: IOptionsDropdown[]) => {
      if (
        stateRequest &&
        stateRequest.searchCountry &&
        countryInterest &&
        countryInterest.length > 0
      ) {
        const item = countryInterest.find(
          itemState =>
            itemState.label
              .toLocaleLowerCase()
              .indexOf(stateRequest.searchCountry.toLocaleLowerCase()) > -1,
        )?.value;

        formRef.current?.setFieldValue('country', item);
      }

      if (stateRequest && stateRequest.searchText) {
        formRef.current?.setFieldValue(
          'searchJobTitle',
          stateRequest.searchText,
        );
      }
      if (
        stateRequest &&
        (stateRequest.searchCountry || stateRequest.searchText)
      ) {
        setTimeout(() => {
          formRef.current?.submitForm();
        }, 500);
      }
    },
    [stateRequest],
  );

  useEffect(() => {
    checkFilterState(optionsCountry);
  }, [checkFilterState, optionsCountry]);

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
                  Find {numberJobs} job opportunities
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
                    options={[
                      { value: '', label: 'All' },
                      ...optionsInterestSkills,
                    ]}
                  />
                  <InputDropDown
                    name="country"
                    label={Language.fields.country}
                    options={[{ value: '', label: 'All' }, ...optionsCountry]}
                    onChangeCustom={(value: string) => {
                      setSelectedCountry(value);
                    }}
                  />
                  <InputDropDown
                    name="allRegions"
                    label={Language.fields.allRegions}
                    options={[{ value: '', label: 'All' }, ...regions]}
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
            {jobs && jobs.length > 0 ? (
              jobs.map((job: IJobs) => {
                let countryDesc = '';

                if (country.length > 0) {
                  countryDesc =
                    country.find(
                      (countryItem: ICountrie) =>
                        countryItem.countryShortCode === job.country,
                    )?.countryName || '';
                }

                return (
                  <Box
                    key={job.id}
                    onClick={() => {
                      navigate('/jobs/internal', {
                        state: {
                          item: job,
                          countryDesc,
                        },
                      });
                    }}
                  >
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
                          <Default.Space
                            h="0.9375rem"
                            className="visibleMobile"
                          />
                          <TagNewJobItem color={Default.color.success}>
                            Full-time
                          </TagNewJobItem>
                        </Default.Row>
                      </Default.Row>
                      <Default.Space h="0.625rem" />
                      <Default.Text2
                        color={Default.color.gray}
                        className="textEditor"
                        dangerouslySetInnerHTML={{
                          __html:
                            job.description.length > 50
                              ? `${htmlURIDecode(job.description).slice(
                                  0,
                                  50,
                                )}...`
                              : htmlURIDecode(job.description),
                        }}
                        style={{ flexDirection: 'column' }}
                      />
                      <Default.Space h="0.9375rem" />
                      <Default.Row>
                        <ButtonSite bgColor={Default.color.success}>
                          Apply Now
                        </ButtonSite>
                      </Default.Row>
                    </Default.Column>
                  </Box>
                );
              })
            ) : (
              <Default.Row alignItens="center" justifyContent="center">
                <Default.Title3 color={Default.color.blueLight}>
                  we didn&apos;t find any jobs
                </Default.Title3>
              </Default.Row>
            )}
          </ContentBox>
        </ContainerSite>
      </BlockForEmployers>
    </ContentSite>
  );
}
