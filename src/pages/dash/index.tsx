import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
      <ExpertiseBLock>
        <ContainerSite>
          <TitleExpertise>Our expertise is your success</TitleExpertise>
          <div>
            <ExpertiseBlockType>
              <Default.Column>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
              </Default.Column>
              <Default.Column>
                <TitleExpertiseBlockType>ICT</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <Default.Column>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
              </Default.Column>
              <Default.Column>
                <TitleExpertiseBlockType>ICT</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <Default.Column>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
              </Default.Column>
              <Default.Column>
                <TitleExpertiseBlockType>ICT</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
          </div>
          <Default.Space height="5.875rem" />
          <Default.Row>
            <ExpertiseBLockImage />
            <ExpertiseBLockContentText>
              <Default.Column>
                <Default.TitleH3 color={Default.color.success}>
                  Benefits of using
                  <br /> our system
                </Default.TitleH3>
                <Default.Space />
                <Default.Subtitle>
                  Lots of technology and great experience for the global
                  recruitment market
                </Default.Subtitle>
                <Default.Space height="4.25rem" />
                <ExpertiseContentIcons>
                  <ExpertiseIcon>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color={Default.color.spotlight}
                    />
                    <ExpertiseIconTitle>
                      Easy talent
                      <br />
                      search
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                  <ExpertiseIcon>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color={Default.color.spotlight}
                    />
                    <ExpertiseIconTitle>
                      Constant <br /> content update
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                </ExpertiseContentIcons>
                <Default.Space height="2.5rem" />
                <ExpertiseContentIcons>
                  <ExpertiseIcon>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color={Default.color.spotlight}
                    />
                    <ExpertiseIconTitle>
                      Privacy and <br />
                      security
                    </ExpertiseIconTitle>
                  </ExpertiseIcon>
                  <ExpertiseIcon>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color={Default.color.spotlight}
                    />
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
          <Default.Space height="2.5rem" />
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
          <Default.Space height="1.875rem" />
          <Default.Row>
            <NewJobItem>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
              </Default.Title2>
              <Default.Space height="0.625rem" />
              <NewJobItemContentIcon>
                <Default.Row alignItens="center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <NewJobItemContentIconText>
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
              </NewJobItemContentIcon>
              <Default.Space height="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
            <NewJobItem>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
              </Default.Title2>
              <Default.Space height="0.625rem" />
              <NewJobItemContentIcon>
                <Default.Row alignItens="center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <NewJobItemContentIconText>
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
              </NewJobItemContentIcon>
              <Default.Space height="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
            <NewJobItem>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
              </Default.Title2>
              <Default.Space height="0.625rem" />
              <NewJobItemContentIcon>
                <Default.Row alignItens="center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <NewJobItemContentIconText>
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
              </NewJobItemContentIcon>
              <Default.Space height="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
            <NewJobItem>
              <Default.Title2 color={Default.color.blue}>
                Backend Engineer
                <br />
                Connectivity Team
              </Default.Title2>
              <Default.Space height="0.625rem" />
              <NewJobItemContentIcon>
                <Default.Row alignItens="center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <NewJobItemContentIconText>
                    London, UK
                  </NewJobItemContentIconText>
                </Default.Row>
              </NewJobItemContentIcon>
              <Default.Space height="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...
              </Default.Subtitle>
            </NewJobItem>
          </Default.Row>
          <Default.Space height="2.5rem" />
          <Default.Row justifyContent="center">
            <div>
              <ButtonSite>Discover all opportunities</ButtonSite>
            </div>
          </Default.Row>
        </ContainerSite>
      </NewJobBLock>
      <BestChoice>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            Why CBT is your best choice?
          </Default.TitleH3>
          <Default.Space height="1.25rem" />
          <Default.Subtitle textAlignCenter>
            Testimonials from our candidates
          </Default.Subtitle>
          <Default.Space height="4.375rem" />

          <Default.Row>
            <BestChoiceItem>
              <Default.Column justifyContent="space-between">
                <Default.Title2 color={Default.color.success}>
                  Mariana C.
                </Default.Title2>
                <Default.Space height="15px" />
                <Default.Text color={Default.color.white}>
                  I would like to thank Morgane for all her help during the
                  recruiting process. She showed great professionalism by
                  explaining to me in detail how the company works and what it
                  could provide me, in addition to finding a job offer that
                  matched my professional experience and expectations, carefully
                  advising me through the entire process until the time of
                  hiring.
                </Default.Text>
                <Default.Space height="30px" />
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
                <Default.Space height="15px" />
                <Default.Text color={Default.color.white}>
                  I would like to thank Morgane for all her help during the
                  recruiting process. She showed great professionalism by
                  explaining to me in detail how the company works and what it
                  could provide me, in addition to finding a job offer that
                  matched my professional experience and expectations, carefully
                  advising me through the entire process until the time of
                  hiring.
                </Default.Text>
                <Default.Space height="30px" />
                <BestChoiceItemText color={Default.color.whiteLight}>
                  Mariana is working as a Customer Delight in Portugal
                </BestChoiceItemText>
              </Default.Column>
            </BestChoiceItem>
          </Default.Row>

          <Default.Space height="2.5rem" />
          <Default.Row justifyContent="center">
            <div>
              <ButtonSite bgColor={Default.color.spotlight}>
                See all testimonials
              </ButtonSite>
            </div>
          </Default.Row>
        </ContainerSite>
      </BestChoice>
    </ContentSite>
  );
}
