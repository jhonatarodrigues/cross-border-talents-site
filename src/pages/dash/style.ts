import styled from 'styled-components';
import Default from '../../default';

import image1 from '../../assets/images/home/ourExpertise.png';

interface IWidth {
  width?: string;
}

export const Banner = styled.div`
  height: 98vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: #f0f;
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.blue};
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
export const InputDropDownSearch = styled.select`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  border: none;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  background: ${Default.color.white};
  color: ${Default.color.success};
  margin-right: 1.25rem;
`;
export const ButtonSearch = styled.button`
  background: ${Default.color.success};
  color: ${Default.color.white};
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  border-radius: 0.625rem;
  padding: 1.125rem;
  min-width: 5.9375rem;
`;
export const SubtitleSearchBanner = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.gray};
  padding: 1.25rem 0 3.75rem;
  a {
    text-decoration: underline;
    color: ${Default.color.blue};
  }
`;
export const IconSearch = styled.div`
  width: 43px;
  height: 35px;
  background: #ff0;
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

export const ExpertiseBLock = styled(Default.BlockContent)`
  background: ${Default.color.blue};
  justify-content: center;
  align-items: center;
`;
export const TitleExpertise = styled(Default.TitleH3)`
  color: ${Default.color.white};
  display: flex;
  justify-content: center;
`;
export const ExpertiseBlockType = styled.div`
  border: 1px solid ${Default.color.blueBase};
  padding: 2.875rem 2.5rem;
  border-radius: 1.25rem;
  flex-direction: row;
  align-items: flex-start;
  margin: 2.5rem 1rem 0;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
`;
export const TitleExpertiseBlockType = styled.p`
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: ${Default.color.success};
  padding-left: 0.9375rem;
  margin-bottom: 0.3125rem;
`;
export const TextExpertiseBlockType = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${Default.color.white};
  padding-left: 0.9375rem;
`;
export const ExpertiseBLockImage = styled.div`
  width: 41.5625rem;
  height: 36.9375rem;
  position: relative;
`;

export const ExpertiseBlockImageBack = styled.div`
  width: 37.8125rem;
  height: 33.4375rem;
  background: url(${image1}) no-repeat center;
  background-size: cover;
  margin-top: -3.75rem;
  border-radius: 3.125rem;
  position: absolute;
  z-index: 1;
`;
export const ExpertiseBlockImageFunny = styled.div`
  width: 37.8125rem;
  height: 33.4375rem;
  background: ${Default.color.blueLight};
  margin-left: 3.75rem;
  border-radius: 3.125rem;
  opacity: 0.4;
`;
export const ExpertiseBLockContentText = styled.div`
  padding: 4.5625rem;
`;
export const ExpertiseContentIcons = styled.div``;
export const ExpertiseIcon = styled.div`
  padding-right: 3.875rem;
  font-size: 2.1875rem;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
`;
export const ExpertiseIconTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.5625rem;
  color: ${Default.color.white};
  font-weight: 600;
  padding-top: 0.3125rem;
`;

export const NewJobBLock = styled(Default.BlockContent)`
  background: #f00;
  justify-content: center;
  align-items: center;
`;
export const NewJobItem = styled.div`
  background: ${Default.color.white};
  padding: 2.5rem;
  flex-direction: column;
  border-radius: 1.25rem;
  margin: 0 0.625rem;
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
export const BestChoice = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
  justify-content: center;
  align-items: center;
`;
export const BestChoiceItem = styled.div`
  border: 1px solid ${Default.color.success};
  padding: 2.8125rem 2.5rem;
  border-radius: 1.25rem;
  width: 28.4375rem;
`;
export const BestChoiceItemText = styled(Default.Text)`
  font-size: 0.75rem;
`;
