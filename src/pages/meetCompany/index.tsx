import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import IconBookMark from '../../assets/svg/bookMark';

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
  BestPraticeBlock,
  ExpertiseBlockType,
  ImageContentBestPratice,
  ImageBestPratice,
  ImageOrnamentBestPratice,
  MapImageBlock,
  MapImage,
  BlockBaseHistory,
  BlockBaseItem,
  ContentIconMark,
  MapImageLegend,
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
              <Default.Row>
                <IconImageBanner />
                <IconImageBanner />
                <IconImageBanner />
              </Default.Row>
            </BannerContentTitle>
            <ImageBanner />
          </Default.Row>
        </ContainerSite>
      </Banner>
      <BlockAcademy>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            Meet our company
          </Default.TitleH3>
          <Default.Space h="2.5rem" />
          <TextInfoCompany>
            Cross Border Talents is a specialist recruitment consultancy with a
            network of recruitment partners across the globe. We provide
            permanent recruitment solutions for the Engineering, ICT(Information
            Technology), and Multilingual sectors.
          </TextInfoCompany>

          <Default.Space h="8.125rem" />

          <Default.Row>
            <Default.Column>
              <ImageContent>
                <Image />
                <ImageOrnament />
              </ImageContent>
              <ItemOrnament>
                <IconItemOrnament>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.white}
                    fontSize={18}
                  />
                </IconItemOrnament>
                <Default.Title2 color={Default.color.blueOriginal}>
                  We never stop!
                </Default.Title2>
                <Default.Space h="0.625rem" />
                <Default.Text2 color={Default.color.gray}>
                  These are just some of the things that make us continue to
                  improve the world of work and strive for diversity.
                </Default.Text2>
              </ItemOrnament>
            </Default.Column>
            <Default.Column>
              <Default.Row>
                <Default.Space w="4.6875rem" />
                <Default.Column>
                  <Default.Subtitle color={Default.color.gray}>
                    Since 2013, our specialized international recruitment team
                    has integrated more than 500 engineers from Central Europe
                    (80% of European engineers). And for 9 years we have been
                    building not only a structured company, but promoting a more
                    human community of professionals from all over the world.
                    <br />
                    <br />
                    The company has a team of international recruiters members
                    across 35 countries. As a Cross Border Talents partner you
                    will join a diverse, that facilitates opportunities
                    regardless of race, nationality, gender or age. With
                    experience in cross-border recruitment we are a
                    multicultural team across 35 countries. We have over 1,000
                    partners in 50 countries. <br />
                    <br />
                    As part of our team you will work in the only recruitment
                    agency in the world awarded 3 seals of excellence by the
                    European Union&apos;s Horizon 2000 research and innovation
                    funding programme.
                  </Default.Subtitle>
                  <Default.Space h="3.75rem" />
                  <Default.TitleH3 color={Default.color.success}>
                    Furthermore, we are:
                  </Default.TitleH3>
                  <Default.Space h="1.25rem" />
                  <Default.Row>
                    <ContentIconMark>
                      <IconBookMark />
                    </ContentIconMark>
                    <Default.Space w="1.25rem" />
                    <Default.Title2 color={Default.color.blueBase}>
                      Committed to helping refugees with job opportunities over
                      the last 2 years;
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.875rem" />
                  <Default.Row>
                    <ContentIconMark>
                      <IconBookMark />
                    </ContentIconMark>
                    <Default.Space w="1.25rem" />
                    <Default.Title2 color={Default.color.blueBase}>
                      Helping people in need that are fleeing Ukraine offering
                      International. Recruitment and Developers opportunities;
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.875rem" />
                  <Default.Row>
                    <ContentIconMark>
                      <IconBookMark />
                    </ContentIconMark>
                    <Default.Space w="1.25rem" />
                    <Default.Title2 color={Default.color.blueBase}>
                      Webinar sessions to explain our career path with our
                      Global Recruitment Managers;
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.875rem" />
                  <Default.Row>
                    <ContentIconMark>
                      <IconBookMark />
                    </ContentIconMark>
                    <Default.Space w="1.25rem" />
                    <Default.Title2 color={Default.color.blueBase}>
                      With 3 Seals of Excellence we strive to solve the skills
                      shortage by 2025;
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.875rem" />
                  <Default.Row>
                    <ContentIconMark>
                      <IconBookMark />
                    </ContentIconMark>
                    <Default.Space w="1.25rem" />
                    <Default.Title2 color={Default.color.blueBase}>
                      Improving the world of work by facilitating employment
                      transitions.
                    </Default.Title2>
                  </Default.Row>
                  <Default.Space h="1.875rem" />
                </Default.Column>
              </Default.Row>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BlockAcademy>
      <BlockStopWorrying>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
            Keen to Join the Team?
          </Default.TitleH3>
          <Default.Space h="6.9375rem" />
          <Default.Row>
            <Default.Column>
              <Default.TitleH3 color={Default.color.blueBase}>
                Be part of this <br />
                opportunity
              </Default.TitleH3>
              <Default.Space h="1.25rem" />
              <Default.Subtitle color={Default.color.gray}>
                Cross Border Talents offers its team members the possibility of
                working from anywhere in the world in the comfort of their
                homes. Being a fully remote company allowed us to multiply
                diversity, and at the same time provide opportunities
                cross-countries.
              </Default.Subtitle>
              <Default.Space h="2.5rem" />
              <Link to="/for-employers">
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
      </BlockStopWorrying>
      <BestPraticeBlock>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.white} textAlignCenter>
            Considered Best Patrice at Labour Mobility
          </Default.TitleH3>
          <Default.Space h="2.5rem" />
          <Default.Title2 color={Default.color.success} textAlignCenter>
            By the European Comission
          </Default.Title2>

          <Default.Space h="5rem" />
          <Default.Row alignItens="stretch">
            <ExpertiseBlockType>
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
              </div>
              <Default.Space w="1.25rem" />
              <Default.Column>
                <Default.Title2 color={Default.color.success}>
                  Our mission
                </Default.Title2>
                <Default.Space h="0.9375rem" />
                <Default.Text color={Default.color.white}>
                  We work hard to improve the world of work. Our ambition is to
                  contribute to solve the skills shortage challenge through
                  consistently facilitating employment transitions in
                  increasingly volatile and complex labor markets.
                </Default.Text>
              </Default.Column>
            </ExpertiseBlockType>
            <ExpertiseBlockType>
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color={Default.color.white}
                  fontSize={30}
                />
              </div>
              <Default.Space w="1.25rem" />
              <Default.Column>
                <Default.Title2 color={Default.color.success}>
                  Our vision
                </Default.Title2>
                <Default.Space h="0.9375rem" />
                <Default.Text color={Default.color.white}>
                  CBT is committed to the Europa 2020 targets specifically
                  concerning employment (75% of the 20-64 years-old to be
                  employed until 2020).
                </Default.Text>
              </Default.Column>
            </ExpertiseBlockType>
          </Default.Row>
          <Default.Space h="8.125rem" />

          <Default.Row>
            <Default.Column>
              <ImageContentBestPratice>
                <ImageBestPratice />
                <ImageOrnamentBestPratice />
              </ImageContentBestPratice>
            </Default.Column>
            <Default.Column>
              <Default.Row>
                <Default.Space w="4.6875rem" />
                <Default.Column>
                  <Default.TitleH3 color={Default.color.blueBase}>
                    3 Unique selling points
                  </Default.TitleH3>
                  <Default.Space h="2.5rem" />
                  <Default.Column>
                    <Default.Title2 color={Default.color.success}>
                      Global Recruitment Partners
                    </Default.Title2>
                    <Default.Text color={Default.color.white}>
                      More than 1000 recruitment partners across 50 countries.
                    </Default.Text>
                    <Default.Space h="1.875rem" />
                  </Default.Column>
                  <Default.Column>
                    <Default.Title2 color={Default.color.success}>
                      CB Talents Academy
                    </Default.Title2>
                    <Default.Text color={Default.color.white}>
                      We “produce” the skills that you are looking for and not
                      finding.
                    </Default.Text>
                    <Default.Space h="1.875rem" />
                  </Default.Column>
                  <Default.Column>
                    <Default.Title2 color={Default.color.success}>
                      IT Nearshore Outsourcing Solutions
                    </Default.Title2>
                    <Default.Text color={Default.color.white}>
                      Our experts partners offers a high standard highly
                      competitive service level.
                    </Default.Text>
                    <Default.Space h="1.875rem" />
                  </Default.Column>
                </Default.Column>
              </Default.Row>
            </Default.Column>
          </Default.Row>
        </ContainerSite>
      </BestPraticeBlock>
      <MapImageBlock>
        <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
          Cross Border Talent Group
        </Default.TitleH3>
        <Default.Space h="4.0625rem" />
        <MapImage />
        <MapImageLegend />
      </MapImageBlock>
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

            <Default.Space w="100px" />

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
