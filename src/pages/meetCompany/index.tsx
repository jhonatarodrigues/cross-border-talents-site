import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import ImageExcellence1 from '../../assets/images/excellence1.png';
import ImageExcellence2 from '../../assets/images/excellence2.png';
import ImageExcellence3 from '../../assets/images/excellence3.png';
import IconMultilingual from '../../assets/svg/multilingual';
import IconFilter from '../../assets/svg/filter';
import IconBell from '../../assets/svg/bell';
import IconIct from '../../assets/svg/ict';
import IconGear from '../../assets/svg/gear';
import IconStar from '../../assets/svg/star';

import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';

import {
  Banner,
  Title,
  BannerContentTitle,
  ImageBanner,
  IconImageBanner,
  BlockAcademy,
  ImageContent,
  Image,
  ImageOrnament,
  TextInfoCompany,
  ItemOrnament,
  IconItemOrnament,
  BlockStopWorrying,
  BlockStopWorryingImageContent,
  BlockStopWorryingImage,
  BlockStopWorryingImageBack,
  ExpertiseBlockType,
  MapImage,
  BlockBaseHistory,
  BlockBaseItem,
  MapImageLegend,
  ContentIconExpertise,
  TitleExpertiseBlockType,
  TextExpertiseBlockType,
  ImageWorkWith,
  ImageWorkWithContent,
  OrnamentContent,
  OrnamentIconUser,
  ExpertiseBlockTypeContent,
} from './style';

export default function MeetCompany(): JSX.Element {
  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Default.Row alignItens="center">
            <BannerContentTitle>
              <Title>
                Made to find the <br />
                perfect match
              </Title>

              <Default.Title2 color={Default.color.success}>
                OUR AWARDS
              </Default.Title2>
              <Default.Subtitle color={Default.color.gray}>
                Operating in over 102 countries
              </Default.Subtitle>
              <Default.Row className="hiddenMobile">
                <IconImageBanner src={ImageExcellence1} />
                <IconImageBanner src={ImageExcellence2} />
                <IconImageBanner src={ImageExcellence3} />
              </Default.Row>
            </BannerContentTitle>
            <ImageBanner />
          </Default.Row>
        </ContainerSite>
      </Banner>
      <BlockAcademy>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            About us
          </Default.TitleH3>
          <Default.Space h="1.25rem" />
          <Default.Title2 color={Default.color.whiteLight} textAlignCenter>
            The only recruitment agency that has been awarded 3 seals of
            excellence
          </Default.Title2>

          <Default.Space h="8.4375rem" className="hiddenMobile" />
          <Default.Space h="5rem" className="visibleMobile" />

          <Default.Row>
            <Default.Column>
              <ImageContent>
                <Image />
                <ImageOrnament />
              </ImageContent>
            </Default.Column>
            <Default.Column>
              <Default.Row>
                <Default.Space w="4.6875rem" />
                <Default.Column>
                  <Default.Subtitle color={Default.color.gray}>
                    For 9 years we have been building not only a structured
                    company, but also fostering a more human community of
                    professionals from all over the world. Since 2013, our
                    specialized international recruitment team has integrated
                    more than 500 engineers from Central Europe (80% of European
                    engineers) and 5500 multilingual candidates. We have over
                    1,000 partners in 50 countries. Always in accordance with
                    the needs of our clients. <br />
                    <br /> We offer permanent placement solutions in
                    engineering, ICT (information technology) and multilingual.
                    With a team of international recruiters from 35 countries,
                    we promote a more human community of professionals from all
                    over the world / we strive for diversity.
                  </Default.Subtitle>
                </Default.Column>
              </Default.Row>
            </Default.Column>
          </Default.Row>

          <Default.Space h="8.125rem" />
          <Default.Row justifyContent="center">
            <Default.TitleH3 color={Default.color.success} textAlignCenter>
              Our goals
            </Default.TitleH3>
          </Default.Row>
          <ExpertiseBlockTypeContent>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconIct />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>Humanization</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  We are a company that relies on and connects with people. We
                  have built solid and genuine relationships that involve
                  talent, customers and our partners.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconMultilingual />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>Innovation</TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  Our company is committed to constant innovation and makes
                  Every effort to represent a group with a creatine and positive
                  attitude aimed at obtaining technically advanced solutions and
                  future-oriented technologies.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <ContentIconExpertise>
                <IconGear />
              </ContentIconExpertise>
              <Default.Column>
                <TitleExpertiseBlockType>
                  Sustainability
                </TitleExpertiseBlockType>
                <TextExpertiseBlockType>
                  CBT engages in a conscious approach to all processes based on
                  sustainable business practices, across the entire
                  organization. We invest in society and culture and support
                  social projects whose values we believe in.
                </TextExpertiseBlockType>
              </Default.Column>
            </ExpertiseBlockType>
          </ExpertiseBlockTypeContent>
          <Default.Space h="3.125rem" />
          <Default.Row justifyContent="center">
            <ButtonSite bgColor={Default.color.spotlight}>
              Work with us
            </ButtonSite>
          </Default.Row>
          <Default.Space h="3.125rem" />
          <Default.Row>
            <Default.Column>
              <Default.TitleH3 color={Default.color.success}>
                In addition, we are:
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Row alignItens="center">
                <Default.Row style={{ width: '42px', height: '42px' }}>
                  <IconStar />
                </Default.Row>
                <Default.Space w="1.25rem" className="hiddenMobile" />
                <Default.Space h="1.25rem" className="visibleMobile" />
                <Default.Title2 color={Default.color.blueBase}>
                  For the past 2 years, we have been involved in helping
                  refugees find jobs;
                </Default.Title2>
              </Default.Row>
              <Default.Space h="1.25rem" />
              <Default.Row alignItens="center">
                <Default.Row style={{ width: '42px', height: '42px' }}>
                  <IconStar />
                </Default.Row>
                <Default.Space w="1.25rem" className="hiddenMobile" />
                <Default.Space h="1.25rem" className="visibleMobile" />
                <Default.Title2 color={Default.color.blueBase}>
                  We help people in need fleeing Ukraine and provide
                  International recruitment and development opportunities;
                </Default.Title2>
              </Default.Row>
              <Default.Space h="1.25rem" />
              <Default.Row alignItens="center">
                <Default.Row style={{ width: '42px', height: '42px' }}>
                  <IconStar />
                </Default.Row>
                <Default.Space w="1.25rem" className="hiddenMobile" />
                <Default.Space h="1.25rem" className="visibleMobile" />
                <Default.Title2 color={Default.color.blueBase}>
                  Webinar sessions to explain our career path with our Global
                  Recruitment Managers;
                </Default.Title2>
              </Default.Row>
              <Default.Space h="1.25rem" />
              <Default.Row alignItens="center">
                <Default.Row style={{ width: '42px', height: '42px' }}>
                  <IconStar />
                </Default.Row>
                <Default.Space w="1.25rem" className="hiddenMobile" />
                <Default.Space h="1.25rem" className="visibleMobile" />
                <Default.Title2 color={Default.color.blueBase}>
                  With 3 seals of excellence, we strive to solve the skills
                  shortage by 2025;
                </Default.Title2>
              </Default.Row>
              <Default.Space h="1.25rem" />
              <Default.Row alignItens="center">
                <Default.Row style={{ width: '42px', height: '42px' }}>
                  <IconStar />
                </Default.Row>
                <Default.Space w="1.25rem" className="hiddenMobile" />
                <Default.Space h="1.25rem" className="visibleMobile" />
                <Default.Title2 color={Default.color.blueBase}>
                  Improving the world of work by facilitating employment
                  transitions.
                </Default.Title2>
              </Default.Row>
            </Default.Column>
            <Default.Column>
              <Default.Row>
                <Default.Column>
                  <Default.Space w="10rem" className="hiddenMobile" />
                  <Default.Column alignItens="flex-end">
                    <ImageWorkWith />
                    <ImageWorkWithContent />
                  </Default.Column>
                  <Default.Space w="3.75rem" />
                  <Default.Column alignItens="flex-end">
                    <ItemOrnament>
                      <IconItemOrnament>
                        <IconBell />
                      </IconItemOrnament>
                      <Default.Title2 color={Default.color.blueOriginal}>
                        We never stop!
                      </Default.Title2>
                      <Default.Space h="0.625rem" />
                      <Default.Text2 color={Default.color.gray}>
                        These are just some of the things that make us continue
                        to improve the world of work and strive for diversity.
                      </Default.Text2>
                    </ItemOrnament>
                  </Default.Column>
                </Default.Column>
              </Default.Row>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BlockAcademy>
      <BlockStopWorrying>
        <Default.Column>
          <ContainerSite>
            <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
              Learn more
            </Default.TitleH3>
            <Default.Space h="6.9375rem" className="hiddenMobile" />
            <Default.Space h="3.125rem" className="visibleMobile" />
            <Default.Row>
              <Default.Column>
                <Default.TitleH3 color={Default.color.blueBase}>
                  Be part of this <br />
                  opportunity
                </Default.TitleH3>
                <Default.Space h="1.25rem" />
                <Default.Subtitle color={Default.color.gray}>
                  Cross Border Talents offers its team members the possibility
                  of working from anywhere in the world in the comfort of their
                  homes. Being a fully remote company allowed us to multiply
                  diversity, and at the same time provide opportunities
                  cross-countries.
                </Default.Subtitle>
                <Default.Space h="2.5rem" />
                <Link to="/jobs">
                  <ButtonSite bgColor={Default.color.blueOriginal}>
                    Join our team
                  </ButtonSite>
                </Link>
              </Default.Column>

              <BlockStopWorryingImageContent>
                <BlockStopWorryingImage />
                <BlockStopWorryingImageBack />
              </BlockStopWorryingImageContent>
            </Default.Row>
          </ContainerSite>

          <Default.Space h="8.75rem" className="hiddenMobile" />
          <Default.Space h="5rem" className="visibleMobile" />
          {/* <MapImageBlock> */}
          <Default.Row justifyContent="center">
            <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
              Cross Border Talent Group
            </Default.TitleH3>
          </Default.Row>
          <Default.Space h="4.0625rem" className="hiddenMobile" />
          <Default.Space h="2.1875rem" className="visibleMobile" />
          <MapImage />
          <MapImageLegend />
          {/* </MapImageBlock> */}
          <Default.Space h="4.875rem" />
          <ContainerSite>
            <OrnamentContent>
              <OrnamentIconUser>
                <FontAwesomeIcon icon={faUser} color={Default.color.white} />
              </OrnamentIconUser>
              <Default.Subtitle color={Default.color.gray}>
                As a Cross Border Talents partner, you will become part of a
                diverse team that creates opportunities regardless of race,
                nationality, gender or age. With our experience in cross-border
                recruitment, we are a multicultural team in 35 countries. We
                have over 1,000 partners in 50 countries. As part of our team,
                you will work in the only recruitment agency in the world that
                has been awarded 3 seals of excellence from the European
                Union&apos;s Horizon 2000 research and innovation funding
                program.
              </Default.Subtitle>
            </OrnamentContent>
          </ContainerSite>
        </Default.Column>
      </BlockStopWorrying>
      <BlockBaseHistory>
        <ContainerSite>
          <Default.Row>
            <Default.Column>
              <Default.TitleH3 color={Default.color.success}>
                The base of <br />
                our history
              </Default.TitleH3>
            </Default.Column>
            <Default.Column>
              <BlockBaseItem>
                <Default.Column>
                  <Default.Title2 color={Default.color.success}>
                    Ricardo Nobre
                  </Default.Title2>
                  <Default.Text color={Default.color.white}>
                    Founder & Group CEO
                  </Default.Text>
                </Default.Column>
              </BlockBaseItem>
            </Default.Column>

            <Default.Space w="100px" className="hiddenMobile" />

            <Default.Column>
              <BlockBaseItem>
                <Default.Column>
                  <Default.Title2 color={Default.color.success}>
                    Ben Noteboom
                  </Default.Title2>
                  <Default.Text color={Default.color.white}>
                    Shareholder
                  </Default.Text>
                </Default.Column>
              </BlockBaseItem>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BlockBaseHistory>
    </ContentSite>
  );
}
