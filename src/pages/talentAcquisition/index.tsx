import React, { useRef, useCallback } from 'react';

import Default from '../../default';

import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import IconDocument from '../../assets/svg/document';

import {
  Banner,
  Title,
  ContentTitle,
  BlockHowWeWork,
  ImageHowWork,
  OrnamentImageHowWork,
  ContentImageHowWork,
  ContentIcon,
  ContentCard,
} from './style';

export default function TalentAcquisition(): JSX.Element {
  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Default.Row>
            <ContentTitle>
              <Title>
                Mobilizing great <br className="hiddenMobile" /> professionals
                <br className="hiddenMobile" />
                around the world
              </Title>
              <Default.Title2 color={Default.color.success}>
                JOIN OUR INCREDIBLE TEAM
              </Default.Title2>
            </ContentTitle>
          </Default.Row>
        </ContainerSite>
      </Banner>
      <BlockHowWeWork>
        <ContainerSite>
          <Default.Row>
            <ContentImageHowWork>
              <ImageHowWork />
              <OrnamentImageHowWork />
            </ContentImageHowWork>

            <Default.Column>
              <Default.TitleH3 color={Default.color.success}>
                How we work
              </Default.TitleH3>
              <Default.Space h="1.875rem" />
              <Default.Subtitle color={Default.color.gray}>
                We use technology, but our team consists of people searching for
                people anywhere in the world to find the best solution for
                candidates and clients. Our recruiters specialize in finding
                professionals, executives, salespeople, multilingual candidates,
                and candidates with a diverse professional background ranging
                from senior to entry-level positions.
              </Default.Subtitle>
              <Default.Space h="4.6875rem" />
              <Default.TitleH3 color={Default.color.success}>
                A compelling team
              </Default.TitleH3>
              <Default.Space h="1.875rem" />
              <Default.Subtitle color={Default.color.gray}>
                Since 2013, Cross Border Talents has offered not only freelance
                and contract opportunities, but also the chance to build a
                diverse business, regardless of race, age, nationality or
                gender. <br /> <br /> More than 200 professional colleagues in
                37 different countries search for candidates with rare skills
                and support the move to countries like Portugal, Spain, Greece,
                Netherlands, Germany, Israel, USA, Brazil, etc.
              </Default.Subtitle>
            </Default.Column>
          </Default.Row>
          <Default.Space h="8.125rem" />
          <ContentCard>
            <ContentIcon>
              <IconDocument />
            </ContentIcon>
            <Default.Column>
              <Default.Title2 color={Default.color.blueOriginal}>
                What we do
              </Default.Title2>
              <Default.Space h="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                International Talent Acquisition is a way to strategically focus
                on attracting and retaining international talent and hiring in
                new locations to meet specific business needs. We gladly claim
                our status as the global leader in cross-border recruitment with
                our Recruiter Forward approach.
              </Default.Subtitle>
            </Default.Column>
          </ContentCard>

          <Default.Space h="3.125rem" />

          <ContentCard>
            <ContentIcon>
              <IconDocument />
            </ContentIcon>
            <Default.Column>
              <Default.Title2 color={Default.color.blueOriginal}>
                Want to join our team?
              </Default.Title2>
              <Default.Space h="0.625rem" />
              <Default.Subtitle color={Default.color.gray}>
                If you are interested in joining a fast-paced work environment
                with international professional recruiters, you have come to the
                right place. Our Talent Acquisition job openings focus on
                technical and multilingual roles. <br /> <br />
                Have you ever worked as a recruiter? Do not worry about it! Our
                Global Recruitment Manager will take care of all your client
                needs, match you with job opportunities, coach you and give you
                tips on how to approach the right candidates.
              </Default.Subtitle>
            </Default.Column>
          </ContentCard>
        </ContainerSite>
      </BlockHowWeWork>
    </ContentSite>
  );
}
