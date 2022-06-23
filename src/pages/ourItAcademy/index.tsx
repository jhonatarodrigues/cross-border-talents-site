import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import ImageExcellence1 from '../../assets/images/excellence1.png';
import ImageExcellence2 from '../../assets/images/excellence2.png';
import ImageExcellence3 from '../../assets/images/excellence3.png';

import Default from '../../default';
import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ButtonSite from '../../components/buttonSite';
import {
  Banner,
  Title,
  IconSearch,
  TextIconSearch,
  BlockAcademy,
  ImageContent,
  Image,
  ImageOrnament,
  IconExcellence,
  ImageBannerMen,
  BackgroundBannerMen,
} from './style';

export default function OurItAcademy(): JSX.Element {
  return (
    <ContentSite>
      <Banner>
        <Default.Column>
          <ContainerSite>
            <Title>
              Code is for <br />
              everyone and our <br />
              Academy is for you
            </Title>
            <Link to="/jobs">
              <ButtonSite bgColor={Default.color.success}>
                Take your opportunity here
              </ButtonSite>
            </Link>
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
            <BackgroundBannerMen />
            <ImageBannerMen />
          </ContainerSite>
        </Default.Column>
      </Banner>
      <BlockAcademy>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
            Our IT Academy
          </Default.TitleH3>
          <Default.Space h="7.5rem" />
          <Default.Text color={Default.color.blueOriginal} textAlignCenter>
            We want to fill in the gap in the it market, the technology is
            growing in a fast pace, schools, universities <br />
            and other educational institutes are not enough to the huge and
            emerging need of it specialist. <br />
            <br />
            We have identified the gap, and we want to be part of the change of
            the digital labor, we want to <br />
            contribute with talented people, creating the strong message that
            &quot;code is for everyone&quot;.
          </Default.Text>
          <Default.Space h="1.25rem" />
          <Default.Row justifyContent="center">
            <Link to="/jobs">
              <ButtonSite bgColor={Default.color.spotlight}>
                Take your opportunity here
              </ButtonSite>
            </Link>
          </Default.Row>
          <Default.Space h="12.0625rem" />

          <Default.Row>
            <ImageContent>
              <Image />
              <ImageOrnament />
            </ImageContent>
            <Default.Column>
              <Default.Row>
                <Default.Space w="4.6875rem" />
                <Default.Column>
                  <div>
                    <IconExcellence src={ImageExcellence1} />
                    <IconExcellence src={ImageExcellence2} />
                    <IconExcellence src={ImageExcellence3} />
                  </div>
                  <Default.Space h="2.8125rem" />
                  <Default.TitleH3 color={Default.color.blueBase}>
                    Learn to code
                  </Default.TitleH3>
                  <Default.Space h="1.25rem" />
                  <Default.Subtitle color={Default.color.gray}>
                    In our CBTalents IT Academy we will have the opportunity to
                    train it skills ike java, web developer, php and na entire
                    world of digital languages. <br />
                    <br />
                    We have identified the gap, and we want to be part of the
                    change of the digital labor, we want to contitribute with
                    talented people, creating the Strong message that &quot;code
                    is for everyone&quot;. <br />
                    <br />
                    CBT IT Talents Academy is part of a network of companies
                    under the Cross Border Talents trademark, which has been
                    nominated a Horizon 2020 SME Champion by the European
                    Commission with the Seal of Excellence. <br />
                    <br />
                    We have a strong relationship with a wide number of
                    technological partners willing to provide training on how to
                    operate on many software programming tools. <br />
                    <br />
                    Is this your dream, but don’t have the Java knowledge yet?
                    SO, grab this opportunity! This is your opportunity to get
                    into the ICT sector, you will be trained at no cost, and
                    based on your performance will have the change to considered
                    for a job opportunity as Junior Java Developer.
                  </Default.Subtitle>
                </Default.Column>
              </Default.Row>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BlockAcademy>
    </ContentSite>
  );
}
