import styled from 'styled-components';
import Default from '../../default';

import TopCandidates from '../../assets/images/forEmployers/topCandidates.jpg';
import GetFreeAccess from '../../assets/images/forEmployers/getFreeAccess.jpg';
import ImageMen from '../../assets/images/forEmployers/img-top-for-employers.png';
import BGImageMen from '../../assets/images/forEmployers/bg-top-for-employers.png';

interface IWidth {
  width?: string;
}

export const Banner = styled.div`
  height: 98vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: ${Default.color.blueOriginal};
  background-size: cover;
  padding-top: 6.25rem;
  max-height: 41rem;
  overflow: hidden;
`;
export const MenImage = styled.div`
  width: 25.125rem;
  height: 36.1875rem;
  background: url(${ImageMen}) no-repeat top center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-70%);
  z-index: 2;
`;
export const BackgroundBannerMen = styled.div`
  width: 44.9375rem;
  height: 56.25rem;
  background: url(${BGImageMen}) no-repeat top center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(20%, -60%);
  z-index: 1;
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.white};
  margin-bottom: 2.1875rem;
`;
export const ContentSearch = styled.div<IWidth>`
  padding: 1.125rem 1.875rem;
  background: ${Default.color.white};
  border-radius: 0.9375rem;
  align-items: center;
  width: ${props => props.width || '37.5rem'};
`;
export const InputSearch = styled.input`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  border: none;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;
export const ButtonSearch = styled.button`
  background: ${Default.color.success};
  color: ${Default.color.white};
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  border-radius: 0.625rem;
  padding: 1.125rem;
  min-width: 7.5rem;
`;
export const IconSearch = styled.img`
  width: 2.6875rem;
  height: 2.1875rem;
  margin-right: 0.625rem;
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

export const CandidatesWeek = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
  justify-content: center;
  align-items: center;
`;
export const TitleExpertise = styled(Default.TitleH3)`
  color: ${Default.color.blue};
  display: flex;
  justify-content: center;
`;
export const ExpertiseBLockImage = styled.div`
  height: 23.6875rem;
  margin-right: 3.75rem;
  position: relative;
`;
export const ExpertiseBLockImageOrnament = styled.div`
  width: 34.9375rem;
  height: 23.6875rem;
  position: absolute;
  left: 0;
  margin-top: -3.125rem;
  border-radius: 3.125rem;
  border: 1px solid ${Default.color.spotlight};
`;
export const ExpertiseBLockImageBack = styled.div`
  width: 34.9375rem;
  height: 23.6875rem;
  background: url(${TopCandidates}) center no-repeat;
  border-radius: 3.125rem;
  margin-left: 3.125rem;
  position: relative;
  z-index: 2;
`;
export const ExpertiseBLockContentText = styled.div`
  padding: 0;
`;
export const NewJobItem = styled.div`
  background: ${Default.color.white};
  padding: 2.5rem;
  flex-direction: column;
  border-radius: 1.25rem;
  margin: 0 0.625rem;
  width: 100%;
  box-shadow: 0px 0px 30px #0000000d;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
export const NewJobItemContentIcon = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NewJobItemContentIconText = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.gray};
  padding-left: 0.625rem;
`;

export const TagItem = styled.div`
  padding: 0.375rem 0.9375rem;
  font-size: 0.625rem;
  color: ${Default.color.white};
  text-transform: uppercase;
  background: ${Default.color.blueBase};
  border-radius: 1.25rem;
  font-weight: 700;
`;
export const BlockWasted = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
`;
export const ContentWastedImage = styled.div`
  width: 29.3125rem;
  margin-right: 4.6875rem;
`;
export const WastedImage = styled.div`
  background: url(${GetFreeAccess}) center no-repeat;
  width: 29.3125rem;
  height: 29.9375rem;
  border-radius: 3.125rem;
  position: relative;
  z-index: 10;
`;
export const WastedImageContent = styled.div`
  width: 29.3125rem;
  border-radius: 3.125rem;
  height: 38.0625rem;
  background: #374565;
  position: absolute;
  left: -3.75rem;
  z-index: 0;
  top: -3.75rem;
`;
export const WastedImageContentAll = styled(Default.Column)`
  position: relative;
`;
export const WastedTextImage = styled(Default.Title2)`
  position: relative;
  z-index: 1;
`;
export const WastedIconContent = styled(Default.Column)`
  width: auto;
  margin-right: 70px;
  cursor: pointer;
`;
