import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import ContentSite from '../../components/ContentSite';
import ContainerSite from '../../components/ContainerSite';
import ButtonSite from '../../components/buttonSite';
import Default from '../../default';

import {
  Banner,
  Title,
  BannerContentTitle,
  ImageBanner,
  BlockTestimonials,
  TestimonialsContent,
  TestimonialsItem,
  ImageTestimonials,
} from './style';

export default function Testimonials(): JSX.Element {
  return (
    <ContentSite>
      <Banner>
        <ContainerSite>
          <Default.Row alignItens="center">
            <BannerContentTitle>
              <Title>
                Proud to <br />
                work in their <br />
                dream job
              </Title>

              <Default.Subtitle color={Default.color.success}>
                OUR CROSS BORDER TALENTS
              </Default.Subtitle>
            </BannerContentTitle>
            <ImageBanner />
          </Default.Row>
        </ContainerSite>
      </Banner>
      <BlockTestimonials>
        <ContainerSite>
          <Default.TitleH3 color={Default.color.blueOriginal} textAlignCenter>
            Check all testimonials from our candidates
          </Default.TitleH3>
          <Default.Space h="7.75rem" />
          <TestimonialsContent>
            <TestimonialsItem>
              <ImageTestimonials />
              <Default.Row justifyContent="space-between">
                <Default.Row>
                  <Default.Subtitle color={Default.color.success}>
                    Mariana C.
                  </Default.Subtitle>
                </Default.Row>

                <Default.Row justifyContent="flex-end">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <Default.Space w="0.9375rem" />
                  <Default.Text2 color={Default.color.blueLight2}>
                    Portugal
                  </Default.Text2>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.9375rem" />
              <Default.Text color={Default.color.gray}>
                I would like to thank Morgane for all her help during the
                recruiting process. She showed great professionalism by
                explaining to me in detail how the company works and what it
                could provide me, in addition to finding a job offer that
                matched my professional experience and expectations, carefully
                advising me through the entire process until the time of hiring.
              </Default.Text>
              <Default.Space h="0.9375rem" />
              <Default.Text2 color={Default.color.blueLight2}>
                Mariana is working as a Customer Delight in Portugal
              </Default.Text2>
            </TestimonialsItem>
            <TestimonialsItem>
              <ImageTestimonials />
              <Default.Row justifyContent="space-between">
                <Default.Row>
                  <Default.Subtitle color={Default.color.success}>
                    Mariana C.
                  </Default.Subtitle>
                </Default.Row>

                <Default.Row justifyContent="flex-end">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <Default.Space w="0.9375rem" />
                  <Default.Text2 color={Default.color.blueLight2}>
                    Portugal
                  </Default.Text2>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.9375rem" />
              <Default.Text color={Default.color.gray}>
                I would like to thank Morgane for all her help during the
                recruiting process. She showed great professionalism by
                explaining to me in detail how the company works and what it
                could provide me, in addition to finding a job offer that
                matched my professional experience and expectations, carefully
                advising me through the entire process until the time of hiring.
              </Default.Text>
              <Default.Space h="0.9375rem" />
              <Default.Text2 color={Default.color.blueLight2}>
                Mariana is working as a Customer Delight in Portugal
              </Default.Text2>
            </TestimonialsItem>
            <TestimonialsItem>
              <ImageTestimonials />
              <Default.Row justifyContent="space-between">
                <Default.Row>
                  <Default.Subtitle color={Default.color.success}>
                    Mariana C.
                  </Default.Subtitle>
                </Default.Row>

                <Default.Row justifyContent="flex-end">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <Default.Space w="0.9375rem" />
                  <Default.Text2 color={Default.color.blueLight2}>
                    Portugal
                  </Default.Text2>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.9375rem" />
              <Default.Text color={Default.color.gray}>
                I would like to thank Morgane for all her help during the
                recruiting process. She showed great professionalism by
                explaining to me in detail how the company works and what it
                could provide me, in addition to finding a job offer that
                matched my professional experience and expectations, carefully
                advising me through the entire process until the time of hiring.
              </Default.Text>
              <Default.Space h="0.9375rem" />
              <Default.Text2 color={Default.color.blueLight2}>
                Mariana is working as a Customer Delight in Portugal
              </Default.Text2>
            </TestimonialsItem>
            <TestimonialsItem>
              <ImageTestimonials />
              <Default.Row justifyContent="space-between">
                <Default.Row>
                  <Default.Subtitle color={Default.color.success}>
                    Mariana C.
                  </Default.Subtitle>
                </Default.Row>

                <Default.Row justifyContent="flex-end">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color={Default.color.success}
                    fontSize={20}
                  />
                  <Default.Space w="0.9375rem" />
                  <Default.Text2 color={Default.color.blueLight2}>
                    Portugal
                  </Default.Text2>
                </Default.Row>
              </Default.Row>
              <Default.Space h="0.9375rem" />
              <Default.Text color={Default.color.gray}>
                I would like to thank Morgane for all her help during the
                recruiting process. She showed great professionalism by
                explaining to me in detail how the company works and what it
                could provide me, in addition to finding a job offer that
                matched my professional experience and expectations, carefully
                advising me through the entire process until the time of hiring.
              </Default.Text>
              <Default.Space h="0.9375rem" />
              <Default.Text2 color={Default.color.blueLight2}>
                Mariana is working as a Customer Delight in Portugal
              </Default.Text2>
            </TestimonialsItem>
          </TestimonialsContent>
          <Default.Row justifyContent="center">
            <ButtonSite bgColor={Default.color.blueOriginal}>
              Load More
            </ButtonSite>
          </Default.Row>
        </ContainerSite>
      </BlockTestimonials>
    </ContentSite>
  );
}
