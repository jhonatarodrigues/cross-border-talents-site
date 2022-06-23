import styled from 'styled-components';
import Default from '../../default';

import About from '../../assets/images/about/about-interna.jpg';
import BePart from '../../assets/images/about/bePart.jpg';
import Map from '../../assets/images/about/img-map.png';
import MapLegend from '../../assets/images/about/mapLegend.jpg';
import ImagemBanner from '../../assets/images/about/banner.jpg';

export const Banner = styled.div`
  height: 40.8125rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${Default.color.grayExtremeLight};
  padding-top: 6.25rem;
  max-height: 41rem;
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
`;
export const ImageBanner = styled.div`
  width: 43.75rem;
  height: 27.6875rem;
  border-radius: 3.125rem;
  margin-left: -2.5rem;
  position: relative;
  z-index: 1;
  background: url(${ImagemBanner}) no-repeat center center;
  background-size: cover;
`;
export const IconImageBanner = styled.img`
  width: 5rem;
  height: 4.0625rem;
  margin-right: 0.9375rem;
  margin-top: 1.25rem;
`;
export const BlockAcademy = styled(Default.BlockContent)`
  background: ${Default.color.blue};
`;
export const ImageContent = styled.div`
  width: 36.9375rem;
  position: relative;
`;
export const Image = styled.div`
  width: 36.9375rem;
  height: 18.5rem;
  border-radius: 3.125rem;
  background: url(${About}) center no-repeat;
  background-size: cover;
  position: relative;
  margin-left: -60px;
  margin-top: -60px;
  position: absolute;
  z-index: 1;
`;
export const ImageOrnament = styled.div`
  width: 36.9375rem;
  height: 18.5rem;
  border-radius: 3.125rem;
  background: ${Default.color.blueOriginal};
  position: relative;
`;
export const TextInfoCompany = styled(Default.Title2)`
  padding: 3.125rem 5.875rem;
  border: 1px solid ${Default.color.blueBase};
  background: #7fa0c733;
  text-align: center;
  border-radius: 1.25rem;
`;
export const ItemOrnament = styled.div`
  width: 26.625rem;
  box-shadow: 0px 0px 30px #0000001a;
  background: ${Default.color.white};
  padding: 2.5rem 2.0625rem 2.125rem;
  position: relative;
  border-radius: 1.25rem;
  flex-direction: column;
  margin-top: 5rem;
`;
export const IconItemOrnament = styled.div`
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  background: ${Default.color.spotlight};
  position: absolute;
  left: 2.0625rem;
  top: 0;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
`;

export const BlockStopWorrying = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
`;
export const BlockStopWorryingImageContent = styled(Default.Column)`
  margin-left: 8.25rem;
  width: 45.375rem;
  position: relative;
  justify-content: flex-end;
`;
export const BlockStopWorryingImage = styled.div`
  width: 34.9375rem;
  height: 23.6875rem;
  background: url(${BePart}) center no-repeat;
  background-size: cover;
  border-radius: 3.125rem;
  top: 0;
  position: relative;
  right: 0;
  z-index: 1;
`;

export const BlockStopWorryingImageBack = styled.div`
  width: 34.9375rem;
  height: 23.6875rem;
  border: 1px solid ${Default.color.spotlight};
  border-radius: 3.125rem;
  top: 0;
  position: absolute;
  margin-right: 2.5rem;
  margin-top: -2.5rem;
  right: 0;
  z-index: 0;
  opacity: 0.4;
`;

export const BestPraticeBlock = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
`;
export const ExpertiseBlockType = styled.div`
  border: 1px solid ${Default.color.blueBase};
  padding: 2.875rem 2.5rem;
  border-radius: 1.25rem;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  margin: 2.5rem 1rem 0;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  background: transparent;
  transition: all 0.3s ease;
  &:hover {
    background: #7fa0c733;
    transition: all 0.2s ease;
  }
`;
export const ImageContentBestPratice = styled.div`
  width: 40.6875rem;
  position: relative;
`;
export const ImageBestPratice = styled.div`
  width: 36.9375rem;
  height: 31.4375rem;
  border-radius: 3.125rem;
  background: url(${About}) center no-repeat;
  background-size: cover;
  position: relative;
  margin-left: 0px;
  margin-top: -3.75rem;
  position: absolute;
  z-index: 1;
`;
export const ImageOrnamentBestPratice = styled.div`
  width: 36.9375rem;
  height: 31.4375rem;
  border-radius: 3.125rem;
  background: #374565;
  position: relative;
  top: 0;
  left: 0;
  margin-left: 3.75rem;
`;
export const MapImageBlock = styled(Default.BlockContent)`
  background: ${Default.color.white2};
  flex-direction: column;
`;
export const MapImage = styled.div`
  width: 100%;
  height: 41.875rem;
  background: url(${Map}) center no-repeat;
  background-size: contain;
`;
export const MapImageLegend = styled.div`
  width: 100%;
  height: 1.875rem;
  background: url(${MapLegend}) center no-repeat;
`;
export const BlockBaseHistory = styled(Default.BlockContent)`
  background: ${Default.color.blueLight};
  padding-top: 13.625rem;
`;
export const BlockBaseItem = styled.div`
  width: 22rem;
  height: 24.875rem;
  border: 1px solid ${Default.color.success};
  border-radius: 1.25rem;
  align-items: flex-end;
  padding: 1.875rem;
  position: relative;
  &:before {
    content: '';
    width: 22rem;
    height: 24.875rem;
    top: 0;
    position: absolute;
    border: 1px solid ${Default.color.success};
    border-radius: 1.25rem;
    margin-top: -8.125rem;
    margin-right: -1.875rem;
    right: 0;
  }
`;
export const ContentIconMark = styled.div`
  width: 1.875rem;
`;
