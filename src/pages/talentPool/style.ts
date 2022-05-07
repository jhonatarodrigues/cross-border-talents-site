import styled from 'styled-components';
import Default from '../../default';

interface IWidth {
  width?: string;
}

export const Banner = styled.div`
  height: 98vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${Default.color.blueOriginal};
  padding-top: 6.25rem;
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

export const CandidatesWeek = styled(Default.BlockContent)`
  background: ${Default.color.white};
  justify-content: center;
  align-items: center;
`;
export const TitleExpertise = styled(Default.TitleH3)`
  color: ${Default.color.blue};
  display: flex;
  justify-content: center;
`;
export const ExpertiseBLockImage = styled.div`
  width: 34.9375rem;
  min-width: 34.9375rem;
  height: 23.6875rem;
  background: #0f0;
  margin-right: 3.75rem;
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
  background: #f0f;
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
`;
