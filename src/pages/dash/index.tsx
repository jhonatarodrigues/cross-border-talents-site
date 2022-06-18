import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import SearchIcon from '../../assets/svg/iconSearch';
import MetricsIcon from '../../assets/svg/metrics';
import LockIcon from '../../assets/svg/lock';
import FilterIcon from '../../assets/svg/filter';
import ImageExcellence1 from '../../assets/images/excellence1.png';
import ImageExcellence2 from '../../assets/images/excellence2.png';
import ImageExcellence3 from '../../assets/images/excellence3.png';
import IconIct from '../../assets/svg/ict';
import IconGear from '../../assets/svg/gear';
import IconMultilingual from '../../assets/svg/multilingual';

import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import { GetJobsPage, IJobs } from '../../hooks/admin/useJobs';
import {
  GetTestimonialsSearch,
  ITestimonials,
} from '../../hooks/admin/useTestimonials';
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
  InputDropDownSearch,
  SubtitleSearchBanner,
  IconSearch,
  TextIconSearch,
  ExpertiseBLock,
  TitleExpertise,
  ExpertiseBlockType,
  TitleExpertiseBlockType,
  TextExpertiseBlockType,
  ExpertiseBLockImage,
  ExpertiseBLockContentText,
  ExpertiseContentIcons,
  ExpertiseIcon,
  ExpertiseIconTitle,
  NewJobBLock,
  NewJobItem,
  NewJobItemContentIcon,
  NewJobItemContentIconText,
  BestChoice,
  BestChoiceItem,
  BestChoiceItemText,
  ExpertiseBlockImageBack,
  ExpertiseBlockImageFunny,
  IconExpertiseContent,
} from './style';

export default function Dash(): JSX.Element {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);

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
    getCountries();
  }, [getCountries]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);
  return (
    <ContentSite headerTransparent>
      <Banner>
        <ContainerSite>
          <Title>
            Your international <br /> job opportunity here
          </Title>
          <div>
            <ContentSearch>
              <InputSearch placeholder="Search job by title" />
              <FontAwesomeIcon
                icon={faLocationDot}
                color={Default.color.success}
                fontSize={30}
              />
              <InputDropDownSearch placeholder="Search job by title">
                <option value="">All Regions</option>
              </InputDropDownSearch>
              <ButtonSearch>Find a job</ButtonSearch>
            </ContentSearch>
          </div>
          <SubtitleSearchBanner>
            It’s a company and need to hire talents?&nbsp;
            <Link to="/"> Request your access here</Link>
          </SubtitleSearchBanner>
          <div>
            <IconSearch src={ImageExcellence1} />
            <IconSearch src={ImageExcellence2} />
            <IconSearch src={ImageExcellence3} />
            <TextIconSearch>
              <span>WE ARE GLOBAL</span>
              <br />
              Operating in over 102 countries
            </TextIconSearch>
          </div>
        </ContainerSite>
      </Banner>
      <ExpertiseBLock>
        <ContainerSite>
          <TitleExpertise>Our expertise is your success</TitleExpertise>
          <div>
            <ExpertiseBlockType
              onClick={() => {
                navigate('/talent-pool/preview', {
                  state: {
                    department: 'ict',
                  },
                });
              }}
            >
              <IconExpertiseContent>
                <IconIct />
              </IconExpertiseContent>
              <Default.Column>
                <TitleExpertiseBlockType>ICT</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType
              onClick={() => {
                navigate('/talent-pool/preview', {
                  state: {
                    department: 'multilingual',
                  },
                });
              }}
            >
              <IconExpertiseContent>
                <IconMultilingual />
              </IconExpertiseContent>
              <Default.Column>
                <TitleExpertiseBlockType>Multilingual</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </TextExpertiseBlockType>
              </Default.Column>
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
              <IconExpertiseContent>
                <IconGear />
              </IconExpertiseContent>
              <Default.Column>
                <TitleExpertiseBlockType>Engineering</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
          </div>
          <Default.Space h="5.875rem" />
          <Default.Row>
            <ExpertiseBLockImage>
              <ExpertiseBlockImageBack />
              <ExpertiseBlockImageFunny />
            </ExpertiseBLockImage>
            <ExpertiseBLockContentText>
              <Default.Column>
                <Default.TitleH3 color={Default.color.success}>
                  Benefits of using
                  <br /> our system
                </Default.TitleH3>
                <Default.Space h="1rem" />
                <Default.Subtitle>
                  Lots of technology and great experience for the global
                  recruitment market
                </Default.Subtitle>
                <Default.Space h="4.25rem" />
                <ExpertiseContentIcons>
                  <ExpertiseIcon>
                    <SearchIcon />
                    <ExpertiseIconTitle>
                      Easy talent
                      <br />
                      search
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                  <ExpertiseIcon>
                    <MetricsIcon />
                    <ExpertiseIconTitle>
                      Constant <br /> content update
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                </ExpertiseContentIcons>
                <Default.Space h="2.5rem" />
                <ExpertiseContentIcons>
                  <ExpertiseIcon>
                    <LockIcon />
                    <ExpertiseIconTitle>
                      Privacy and <br />
                      security
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                  <ExpertiseIcon>
                    <FilterIcon />
                    <ExpertiseIconTitle>
                      Filter what <br /> matters
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                </ExpertiseContentIcons>
              </Default.Column>
            </ExpertiseBLockContentText>
          </Default.Row>
        </ContainerSite>
      </ExpertiseBLock>
      <NewJobBLock>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.blue} textAlignCenter>
            Newest Jobs Opportunities
          </Default.TitleH3>
          <Default.Space h="2.5rem" />
          <div>
            <ContentSearch width="100%">
              <InputSearch placeholder="Search job by title" />
              <FontAwesomeIcon
                icon={faLocationDot}
                color={Default.color.success}
                fontSize={30}
              />
              <InputDropDownSearch placeholder="Search job by title">
                <option value="">All Regions</option>
              </InputDropDownSearch>
              <ButtonSearch>Find a job</ButtonSearch>
            </ContentSearch>
          </div>
          <Default.Space h="1.875rem" />
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
            <Link to="/jobs">
              <ButtonSite>Discover all opportunities</ButtonSite>
            </Link>
          </Default.Row>
        </ContainerSite>
      </NewJobBLock>
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
    </ContentSite>
  );
}
