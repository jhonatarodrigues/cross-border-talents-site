import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Default from '../../default';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
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
} from './style';

export default function Dash(): JSX.Element {
  return (
    <ContentSite>
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
            It’s a company and need to hire talents?
            <Link to="/"> Request your access here</Link>
          </SubtitleSearchBanner>
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
    </ContentSite>
  );
}
