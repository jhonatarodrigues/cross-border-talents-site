import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import IconFilter from '../../assets/svg/filter';
import IconStar from '../../assets/svg/star';
import IconIct from '../../assets/svg/ict';
import IconGear from '../../assets/svg/gear';

import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import { GetJobsPage, IJobs } from '../../hooks/admin/useJobs';
import Modal from '../../components/modal';
import Default from '../../default';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ButtonSite from '../../components/buttonSite';
import {
  Banner,
  Title,
  ContentSearch,
  InputSearch,
  ButtonSearch,
  IconSearch,
  TextIconSearch,
  CandidatesWeek,
  TitleExpertise,
  ExpertiseBLockImage,
  ExpertiseBLockContentText,
  NewJobItem,
  NewJobItemContentIcon,
  NewJobItemContentIconText,
  TagItem,
  BlockWasted,
  ContentWastedImage,
  WastedImage,
  WastedImageContent,
  WastedImageContentAll,
  WastedTextImage,
  WastedIconContent,
  ExpertiseBLockImageOrnament,
  ExpertiseBLockImageBack,
} from './style';

export default function TalentPool(): JSX.Element {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [country, setCountry] = useState<ICountrie[]>([]);

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
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
          <Title>
            Top candidates,
            <br /> exclusive for top
            <br />
            companies
          </Title>
          <div>
            <ContentSearch>
              <InputSearch placeholder="Your Name" />
              <InputSearch placeholder="Email" />
              <ButtonSearch>Send Request</ButtonSearch>
            </ContentSearch>
          </div>
          <Default.Space h="2rem" />
          <div>
            <IconSearch />
            <IconSearch />
            <IconSearch />
            <TextIconSearch>
              <span>WE ARE GLOBAL</span>
              <br />
              Operating in over 102 countries
            </TextIconSearch>
          </div>
        </ContainerSite>
      </Banner>
      <CandidatesWeek>
        <ContainerSite>
          <TitleExpertise>Top Candidates of the Week</TitleExpertise>
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
          <Default.Space h="7.5rem" />
          <Default.Row>
            {jobs.map(job => {
              let countryDesc = '';

              if (country.length > 0) {
                countryDesc =
                  country.find(
                    (countryItem: ICountrie) =>
                      countryItem.code === job.country,
                  )?.name || '';
              }

              return (
                <NewJobItem>
                  <Default.Title2 color={Default.color.blue}>
                    {job.jobTitle}
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
                    <Default.Row justifyContent="flex-end" alignItens="center">
                      <TagItem>ID 12345</TagItem>
                    </Default.Row>
                  </NewJobItemContentIcon>
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
          <Default.Space h="2.5rem" />
          <Default.Row justifyContent="center">
            <Link to="/for-employers">
              <ButtonSite>Discover all opportunities</ButtonSite>
            </Link>
          </Default.Row>
        </ContainerSite>
      </CandidatesWeek>
      <BlockWasted>
        <ContainerSite>
          <Default.Column alignItens="center">
            <Default.TitleH3 color={Default.color.white}>
              No time wasted with another interview
            </Default.TitleH3>
            <Default.Space h="0.9375rem" />
            <Default.Subtitle color={Default.color.whiteLight}>
              We work hard to find the best fit for your company
            </Default.Subtitle>
          </Default.Column>

          <Default.Space h="6.875rem" />
          <Default.Row>
            <ContentWastedImage>
              <WastedImageContentAll>
                <WastedImageContent />
                <WastedTextImage color={Default.color.success}>
                  The best team of recruiters working <br />
                  to find top candidates to work in <br />
                  your company
                </WastedTextImage>
                <Default.Space h="2.1875rem" />

                <WastedImage />
              </WastedImageContentAll>
            </ContentWastedImage>
            <Default.Column>
              <Default.TitleH3 color={Default.color.success}>
                Get free access <br />
                to an exclusive list <br />
                of top candidates
              </Default.TitleH3>
              <Default.Space h="1.0625rem" />
              <Default.Subtitle color={Default.color.white}>
                Access our Talent Pool today and find exclusive candidates and a
                exclusive list of experienced profiles available to relocate and
                join your company. <br />
                <br />
                Top profiles available in the field of:
              </Default.Subtitle>
              <Default.Space h="2.8125rem" />
              <Default.Row>
                <WastedIconContent>
                  <IconIct />
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
                    Multilingual
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
              <Default.Space h="3.125rem" />
              <Default.Row>
                <Link to="/company-need">
                  <ButtonSite bgColor={Default.color.spotlight}>
                    Access the Talent Pool for free
                  </ButtonSite>
                </Link>
              </Default.Row>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BlockWasted>
    </ContentSite>
  );
}
