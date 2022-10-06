import styled from 'styled-components';
import { Form } from '@unform/web';
import { Mobile } from '../../styles/responsiveVariables';

import BannerContact from '../../assets/images/contact/bannerContact.jpg';
import Default from '../../default';

export const Banner = styled.div`
  height: 37.0625rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: url(${BannerContact}) top center no-repeat;
  background-size: cover;
  max-height: 41rem;
  ${Mobile(`
    padding: 0 30px;
  `)}
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.white};
  margin-bottom: 1.25rem;
`;
export const ContentTitle = styled.div`
  padding: 4.6875rem;
  margin-left: -4.6875rem;
  flex-direction: column;
  background: ${Default.color.blueOriginal};
  opacity: 0.85;
  border-radius: 3.125rem;
  margin-top: 3.125rem;

  ${Mobile(`
    padding: 1.875rem;
    margin-left: 0px;
    align-items: center;
  `)}
`;

export const BlockHowWeWork = styled(Default.BlockContent)`
  background: ${Default.color.white};
`;

export const ContentImageHowWork = styled.div`
  position: relative;
  min-width: 38.125rem;
  display: block;
  margin-right: 4.6875rem;
`;

export const ImageHowWork = styled.div`
  width: 34.25rem;
  height: 36.5rem;
  border-radius: 3.125rem;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid;
`;

export const OrnamentImageHowWork = styled.div`
  width: 34.25rem;
  height: 36.5rem;
  border-radius: 3.125rem;
  position: relative;
  top: 3.75rem;
  left: 3.75rem;
  background: ${Default.color.blueOriginal};
  opacity: 0.5;
`;
