import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import ImageExcellence1 from '../../assets/images/excellence1.png';
import ImageExcellence2 from '../../assets/images/excellence2.png';
import ImageExcellence3 from '../../assets/images/excellence3.png';

import IconFilter from '../../assets/svg/filter';
import IconStar from '../../assets/svg/star';
import IconIct from '../../assets/svg/ict';
import IconGear from '../../assets/svg/gear';
import IconMultilingual from '../../assets/svg/multilingual';

import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import {
  GetTalentPoolsPage,
  IResponseUser,
} from '../../hooks/admin/useTalentPool';
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
  MenImage,
  BackgroundBannerMen,
} from './style';

export default function TalentPool(): JSX.Element {
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [talentPool, setTalentPool] = useState<IResponseUser>();
  const navigate = useNavigate();

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      setCountry(countries);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);

  const getTalentPool = useCallback(async () => {
    const response = await GetTalentPoolsPage({ limit: 4 });

    setTalentPool(response);
  }, []);
  useEffect(() => {
    getTalentPool();
  }, [getTalentPool]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);
  return (
    <ContentSite>
      <Banner>
        <Default.Column>
          <ContainerSite>
            <Title>
              Top candidates,
              <br /> exclusive for top
              <br />
              companies
            </Title>
            <div>
              <ContentSearch className="hiddenMobile">
                <InputSearch placeholder="Your Name" />
                <InputSearch placeholder="Email" />
                <ButtonSearch>Send Request</ButtonSearch>
              </ContentSearch>
            </div>
            <Default.Space h="2rem" />
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
          <ContainerSite>
            <MenImage />
            <BackgroundBannerMen />
          </ContainerSite>
        </Default.Column>
      </Banner>

      <BlockWasted>
        <ContainerSite>
          <Default.Column alignItens="center">
            <Default.TitleH3 color={Default.color.blueOriginal}>
              No time wasted with another interview
            </Default.TitleH3>
            <Default.Space h="0.9375rem" />
            <Default.Subtitle color={Default.color.gray}>
              At Cross Border Talents, we strive to live by our values of
              Humanization, Innovation and <br className="hiddenMobile" />{' '}
              Sustainability to help clients find the best candidates and
              candidates find great jobs.
            </Default.Subtitle>
          </Default.Column>

          <Default.Space h="6.875rem" />
          <Default.Row>
            <ContentWastedImage>
              <WastedImageContentAll>
                <WastedImageContent />

                <WastedImage />
              </WastedImageContentAll>
            </ContentWastedImage>
            <Default.Column>
              <Default.TitleH3 color={Default.color.blueBase}>
                Cross Border Talents in numbers
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Column>
                <IconStar />
                <Default.Space h="0.9375rem" />
                <Default.Title2 color={Default.color.blueOriginal}>
                  More than 200 people employed by our professional recruiters
                </Default.Title2>
              </Default.Column>
              <Default.Space h="1.25rem" />
              <Default.Column>
                <IconStar />
                <Default.Space h="0.9375rem" />
                <Default.Title2 color={Default.color.blueOriginal}>
                  More than 35 countries represented by our team
                </Default.Title2>
              </Default.Column>
              <Default.Space h="1.25rem" />
              <Default.Column>
                <IconStar />
                <Default.Space h="0.9375rem" />
                <Default.Title2 color={Default.color.blueOriginal}>
                  More than 2200 job opportunities
                </Default.Title2>
              </Default.Column>
              <Default.Space h="3.125rem" />

              <Default.Row>
                <Link to="/about-us">
                  <ButtonSite bgColor={Default.color.spotlight}>
                    About us
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
