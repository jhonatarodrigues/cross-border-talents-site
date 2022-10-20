import styled from 'styled-components';
import { Mobile } from '../../styles/responsiveVariables';

import Default from '../../default';
import BannerTalent from '../../assets/images/talentAcquision/bannerTalentAcquision.png';
import ImageWork from '../../assets/images/talentAcquision/howWork.jpg';

export const Banner = styled.div`
  height: 37.0625rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: url(${BannerTalent}) top center no-repeat;
  background-size: cover;
  max-height: 41rem;
  ${Mobile(`
    padding: 0 30px;
  `)}
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.white};
  margin-bottom: 1.25rem;
  ${Mobile(`
    font-size: 1.875rem;
    line-height: 2.25rem;
  `)}
`;
export const ContentTitle = styled.div`
  padding: 4.6875rem;
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
  background: ${Default.color.grayBackground};
`;

export const ContentImageHowWork = styled.div`
  position: relative;
  min-width: 38.125rem;
  display: block;
  margin-right: 4.6875rem;

  ${Mobile(`
    min-width: 100%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 1.875rem;
  `)}
`;

export const ImageHowWork = styled.div`
  width: 34.25rem;
  height: 36.5rem;
  border-radius: 3.125rem;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${ImageWork}) center center no-repeat;
  background-size: cover;
  z-index: 1;

  ${Mobile(`
    position: relative;
    width: 17.5rem;
    height: 18.75rem;
  `)}
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

  ${Mobile(`
        display: none;
  `)}
`;

export const ContentIcon = styled.div`
  display: flex;
  height: 100%;
  margin-right: 1.875rem;

  ${Mobile(`
    width: 100%;
    justify-content: center;
    margin-right: 0;
    margin-bottom: 1.875rem;
  `)};
`;

export const ContentCard = styled.div`
  border-radius: 1.25rem;
  background: ${Default.color.white};
  box-shadow: 0px 0px 30px #0000000d;
  padding: 3.125rem;
  ${Mobile(`
    flex-direction: column;
    padding: 1.875rem;
  `)}
`;
export const NewJobBLock = styled(Default.BlockContent)`
  background: ${Default.color.white};
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const NewJobItem = styled.div`
  background: ${Default.color.white};
  padding: 2.5rem;
  flex-direction: column;
  border-radius: 1.25rem;
  margin: 0 0.625rem;
  width: 100%;
  position: relative;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${Mobile(`
    margin: 0;
    margin-bottom: 1.875rem;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
  `)}
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
export const BoxTag = styled.div`
  position: absolute;
  border-top-left-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
  top: -1px;
  left: -1px;
  background: ${Default.color.blueBase};
  padding: 0.5rem 1rem;
  font-size: 0.625rem;
  color: ${Default.color.white};
`;
