import React, { useRef, useCallback } from 'react';

import Default from '../../default';

import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';

import {
  Banner,
  Title,
  ContentTitle,
  BlockHowWeWork,
  ImageHowWork,
  OrnamentImageHowWork,
  ContentImageHowWork,
} from './style';

export default function TalentAcquisition(): JSX.Element {
  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Default.Row>
            <ContentTitle>
              <Title>
                Our team is ready <br className="hiddenMobile" />
                to help you for any <br className="hiddenMobile" />
                questions
              </Title>
              <Default.Title2 color={Default.color.success}>
                SEND US A MESSAGE
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
        </ContainerSite>
      </BlockHowWeWork>
    </ContentSite>
  );
}
