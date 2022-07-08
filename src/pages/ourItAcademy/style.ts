import styled from 'styled-components';
import { Mobile } from '../../styles/responsiveVariables';
import Default from '../../default';

import LearCode from '../../assets/images/academy/learnCode.jpg';
import ImageBanner from '../../assets/images/academy/img-top-academy.png';
import BgImageBanner from '../../assets/images/academy/bg-top-academy.png';

interface IWidth {
  width?: string;
}

export const Banner = styled.div`
  height: 98vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: ${Default.color.grayExtremeLight};
  background-size: cover;
  max-height: 41rem;
  overflow: hidden;

  ${Mobile(`
    padding: 0 1.875rem;

    height: 700px;
    max-height: 1400rem;
    a{
        justify-content: center;
    }
  `)}
`;
export const ImageBannerMen = styled.div`
  width: 29.1875rem;
  height: 35.8125rem;
  background: url(${ImageBanner}) no-repeat top center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-60%);
  z-index: 2;

  ${Mobile(`
    width: 11.25rem;
    height: 14.375rem;
    transform: translateY(10%);
  `)}
`;
export const BackgroundBannerMen = styled.div`
  width: 50rem;
  height: 43.25rem;
  background: url(${BgImageBanner}) no-repeat top center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(10%, -60%);
  z-index: 1;

  ${Mobile(`
    width: 300px;
    height: 25rem;
    transform: translate(10%, 10%);
  `)}
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.blueOriginal};
  margin-bottom: 1.25rem;
`;
export const InputSearch = styled.input`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  border: none;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;
export const TextIconSearch = styled.h3`
  flex-direction: column;
  font-size: 0.75rem;
  color: ${Default.color.gray};
  span {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${Default.color.spotlight};
  }
`;
export const IconSearch = styled.img`
  width: 2.6875rem;
  height: 2.1875rem;
  margin-right: 0.625rem;
`;
export const BlockAcademy = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
`;
export const ImageContent = styled.div`
  width: 36.9375rem;
  position: relative;

  ${Mobile(`
    width: 100%;
    margin-bottom: 1.875rem;
  `)}
`;
export const Image = styled.div`
  width: 36.9375rem;
  height: 42.125rem;
  border-radius: 3.125rem;
  background: url(${LearCode}) center no-repeat;
  background-size: cover;
  position: relative;
  margin-left: -60px;
  margin-top: -60px;
  position: absolute;
  z-index: 1;

  ${Mobile(`
    width: 100%;
    height: 260px;
    margin-left: -30px;
    margin-top: -30px;
  `)}
`;
export const ImageOrnament = styled.div`
  width: 36.9375rem;
  height: 42.125rem;
  border-radius: 3.125rem;
  background: ${Default.color.blueOriginal};
  position: relative;

  ${Mobile(`
    width: 100%;
    height: 260px;
  `)}
`;
export const IconExcellence = styled.img`
  width: 4.125rem;
  height: 3.3125rem;
  margin-right: 0.625rem;
`;
