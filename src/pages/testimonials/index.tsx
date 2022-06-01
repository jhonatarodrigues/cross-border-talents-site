import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { GetCountries, ICountrie } from '../../hooks/admin/useCountry';
import {
  GetTestimonialsSearch,
  ITestimonials,
} from '../../hooks/admin/useTestimonials';
import Modal from '../../components/modal';
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
  const baseURL = process.env.REACT_APP_URL_API;
  const [country, setCountry] = useState<ICountrie[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);

  const getCountries = useCallback(async () => {
    const { countries } = await GetCountries();
    if (countries) {
      setCountry(countries);
    } else {
      Modal({ keyType: 'getCountries', icon: 'error' });
    }
  }, []);

  const getTestimonials = useCallback(async () => {
    try {
      const response = await GetTestimonialsSearch({
        // itensPerPage: 4,
        // page: 1,
      });
      setTestimonials(response.testimonialsSearch.testimonials);
    } catch {
      Modal({ keyType: 'getTestimonials', icon: 'error' });
    }
  }, []);

  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

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

              <Default.Title2 color={Default.color.success}>
                OUR CROSS BORDER TALENTS
              </Default.Title2>
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
            {testimonials.map(testimonial => {
              let countryDesc = '';

              if (country.length > 0) {
                countryDesc =
                  country.find(
                    (countryItem: ICountrie) =>
                      countryItem.countryShortCode === testimonial.country,
                  )?.countryName || '';
              }

              return (
                <TestimonialsItem>
                  <ImageTestimonials
                    style={{
                      background: `url(${baseURL}/files/${testimonial.picture}) center no-repeat`,
                    }}
                  />
                  <Default.Row justifyContent="space-between">
                    <Default.Row>
                      <Default.Subtitle color={Default.color.success}>
                        {testimonial.name}
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
                        {countryDesc}
                      </Default.Text2>
                    </Default.Row>
                  </Default.Row>
                  <Default.Space h="0.9375rem" />
                  <Default.Text
                    color={Default.color.gray}
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonial,
                    }}
                  />
                  <Default.Space h="0.9375rem" />
                  <Default.Text2 color={Default.color.blueLight2}>
                    {testimonial.observations}
                  </Default.Text2>
                </TestimonialsItem>
              );
            })}
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
