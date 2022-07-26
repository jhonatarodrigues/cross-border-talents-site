import styled from 'styled-components';
import Default from '../../default';
import { Mobile } from '../../styles/responsiveVariables';
import BannerTestimonials from '../../assets/images/testimonials/testimonials.jpg';

export const Banner = styled.div`
  height: 40.8125rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${Default.color.grayExtremeLight};
  padding-top: 6.25rem;
  max-height: 41rem;

  ${Mobile(`
    height: 43.75rem;
    max-height: 43.75rem;
  `)}
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.blueOriginal};
  margin-bottom: 1.25rem;
`;
export const BannerContentTitle = styled.div`
  padding: 3.75rem;
  border-radius: 3.125rem;
  border: 1px solid ${Default.color.spotlight};
  flex-direction: column;
  margin-left: -2.5rem;
  width: 37.5rem;
  position: relative;
  z-index: 2;

  ${Mobile(`
    margin-left: 0px;
    width: 18.75rem;
    padding: 1.875rem;
    margin-bottom: 1.875rem;
  `)}
`;
export const ImageBanner = styled.div`
  width: 43.75rem;
  height: 27.6875rem;
  border-radius: 3.125rem;
  margin-left: -2.5rem;
  position: relative;
  z-index: 1;
  background: url(${BannerTestimonials}) center no-repeat;
  background-size: cover;

  ${Mobile(`
    width: 18.75rem;
    height: 12.5rem;
    margin-left: 0;
  `)}
`;
export const BlockTestimonials = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
`;
export const TestimonialsContent = styled.div`
  flex-wrap: wrap;
`;

export const TestimonialsItem = styled.div`
  padding: 3.125rem;
  flex-direction: column;
  margin-right: 4rem;
  background: ${Default.color.white};
  box-shadow: 0px 0px 30px #0000000d;
  width: calc(50% - 2rem);
  position: relative;
  padding-top: 4.75rem;
  margin-bottom: 3.75rem;
  border-radius: 1.25rem;
  &:nth-child(2n) {
    margin-right: 0;
  }

  ${Mobile(`
    width: 100%;
    margin-right: 0;
    padding: 1.875rem;
    margin-bottom: 3.75rem;
    align-items: center;
    text-align: center;
  `)}
`;
export const ImageTestimonials = styled.div`
  position: absolute;
  left: 3.125rem;
  top: 0;
  transform: translateY(-50%);
  width: 6.1875rem;
  height: 6.1875rem;
  border-radius: 50%;
  background-size: cover !important;

  ${Mobile(`
    width: 3.75rem;
    height: 3.75rem;
    left: 1.875rem;
  `)}
`;
