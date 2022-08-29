import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import ImageExcellence1 from '../../assets/images/excellence1.png';
import ImageExcellence2 from '../../assets/images/excellence2.png';
import ImageExcellence3 from '../../assets/images/excellence3.png';
import Paper from '../../assets/svg/paper';

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
  ContentWhite,
  BlockNecessaryProgramming,
  ContentDescription,
  ContentDescriptionOrnament,
  Description,
} from './style';

export default function OurItAcademy(): JSX.Element {
  return (
    <ContentSite>
      <Banner>
        <Default.Column>
          <ContainerSite>
            <Title>
              Code is for <br className="hiddenMobile" />
              everyone and our <br className="hiddenMobile" />
              Academy is for you
            </Title>
            <a
              href="http://www.cbtalentsacademy.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonSite bgColor={Default.color.success}>Apply now</ButtonSite>
            </a>
          </ContainerSite>
          <ContainerSite>
            <BackgroundBannerMen />
            <ImageBannerMen />
          </ContainerSite>
        </Default.Column>
      </Banner>
      <BlockAcademy>
        <ContainerSite>
          <ContentWhite>
            <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
              How does it work?
            </Default.TitleH3>
            <Default.Space h="1.875rem" className="hiddenMobile" />
            <Default.Space h="3.125rem" className="visibleMobile" />
            <Default.Text color={Default.color.blueOriginal} textAlignCenter>
              In our CBT IT Academy, we teach IT skills such as Java, PHP, Web
              Developer, and a variety of other digital languages. It&apos;s
              quite simple to join:
              <br />
              1. You enroll in a training program
              <br />
              2. Complete an assessment
              <br />
              3. If successful, we provide a placement with one of our clients
              companies to complete your training
              <br />
              <br />
              Our coding academy does not require any prior knowledge. We will
              get you up to speed and familiarize you with the fundamentals of
              coding, whether you have previously coded or are starting from
              scratch.
            </Default.Text>
          </ContentWhite>
          <Default.Space h="3.125rem" />
          <Default.Row justifyContent="center">
            <a
              href="http://www.cbtalentsacademy.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonSite bgColor={Default.color.spotlight}>
                Apply now
              </ButtonSite>
            </a>
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
                    Equipping people <br />
                    with the right <br />
                    Tech Skills
                  </Default.TitleH3>
                  <Default.Space h="1.25rem" />
                  <Default.Subtitle color={Default.color.gray}>
                    Our Academy is a part of the European Commission&apos;s
                    Actions and part of a network of companies under the Cross
                    Border Talents brand, named Horizon 2020 SME Champion by the
                    European Commission with 3 Seals of Excellence. <br />
                    <br />
                    Launched in 2016, the Digital Skills and Jobs Coalition
                    brings together Member States, businesses, social partners,
                    non-profit organizations, and education providers to address
                    Europe&apos;s digital skills shortage. In less than a year,
                    Members of the coalition have trained over seven million
                    Europeans.
                  </Default.Subtitle>
                </Default.Column>
              </Default.Row>
            </Default.Column>
          </Default.Row>
          <Default.Space h="1.875rem" />
          <Default.Subtitle color={Default.color.gray}>
            The demand for information and communications technology
            professionals is rapidly increasing. At the same time, amongst 169
            million Europeans aged 16 to 74, 44% lack basic digital skills.
            <br />
            <br />
            Given that digital skills are required for 9 out of 10 jobs.
            Companies have a difficult time finding qualified candidates. We
            recognize this gap and want to be part of the change in the digital
            workforce. We aim to contribute with talented individuals to deliver
            the strong message that &quot;Code is for everyone&quot;.
          </Default.Subtitle>
          <Default.Space h="2.125rem" />
          <Default.Row justifyContent="center" alignItens="center">
            <a
              href="http://www.cbtalentsacademy.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonSite bgColor={Default.color.spotlight}>
                Learn more
              </ButtonSite>
            </a>
          </Default.Row>
        </ContainerSite>
      </BlockAcademy>
      <BlockNecessaryProgramming>
        <ContainerSite>
          <Default.Row>
            <Default.Column>
              <Default.TitleH3 color={Default.color.white}>
                Do you lack <br />
                the necessary programming
                <br /> skills?
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Title2 color={Default.color.success}>
                Take advantage of this opportunity!
              </Default.Title2>
              <Default.Space h="2.5rem" />
              <a
                href="http://www.cbtalentsacademy.com/en"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonSite bgColor={Default.color.spotlight}>
                  I want to learn
                </ButtonSite>
              </a>
            </Default.Column>
            <Default.Column>
              <Description>
                <ContentDescriptionOrnament />
                <ContentDescription>
                  <Paper />
                  <Default.Space h="0.9375rem" />
                  <Default.Subtitle color={Default.color.white}>
                    This is your chance to enter the field of information
                    technology. In the academy you will be trained for free and,
                    depending on your performance, you will have the opportunity
                    to be considered for a position as a Junior Java Developer.
                  </Default.Subtitle>
                </ContentDescription>
              </Description>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BlockNecessaryProgramming>
    </ContentSite>
  );
}
