import styled from 'styled-components';
import Default from '../../default';
import { Mobile } from '../../styles/responsiveVariables';

import image1 from '../../assets/images/home/ourExpertise.jpg';
import imageNewJob from '../../assets/images/home/newJobs.jpg';
import ImageWoman from '../../assets/images/home/img-top-home.png';
import BackgroundWoman from '../../assets/images/home/bg-top-home.png';

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
  max-height: 37.5rem;
  overflow: hidden;
  position: relative;
  ${Mobile(`
    padding: 0 1.875rem;
    height: 43.75rem;
    max-height: 43.75rem;
    padding-bottom: 9.375rem;
    align-items: center;
  `)}
`;
export const ImageBannerWoman = styled.div`
  width: 31.625rem;
  height: 39.125rem;
  background: url(${ImageWoman}) no-repeat top center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-70%);
  z-index: 2;
  ${Mobile(`
    width: 12.5rem;
    height: 15.625rem;
    transform: translateY(20%);
  `)}
`;
export const BackgroundBannerWoman = styled.div`
  width: 34.75rem;
  height: 43.25rem;
  background: url(${BackgroundWoman}) no-repeat top center;
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(10%, -60%);
  z-index: 1;
  ${Mobile(`
    width: 13.75rem;
    height: 16.25rem;
    transform: translate(10%, 0%);
  `)}
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.blue};
  margin-bottom: 2.1875rem;
  ${Mobile(`
    text-align: center;
    br{
        display: none;
    }
  `)}
`;
export const ContentSearch = styled.div<IWidth>`
  padding: 1.125rem 1.875rem;
  background: ${Default.color.white};
  border-radius: 0.9375rem;
  align-items: center;
  width: ${props => props.width || '37.5rem'};
  z-index: 3;
  position: relative;
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
  min-width: 6.25rem;
  cursor: pointer;
`;
export const SubtitleSearchBanner = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.gray};
  padding: 1.25rem 0 3.75rem;
  a {
    text-decoration: underline;
    color: ${Default.color.blue};
  }
  ${Mobile(`
    text-align: center;
    flex-direction: column;
    align-items: center;
    a {
        padding-top: 0.625rem;
    }
  `)}
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

export const ExpertiseBLock = styled(Default.BlockContent)`
  background: ${Default.color.blue};
  justify-content: center;
  align-items: center;
`;
export const TitleExpertise = styled(Default.TitleH3)`
  color: ${Default.color.white};
  display: flex;
  justify-content: center;

  ${Mobile(`
    text-align: center;
  `)}
`;
export const ExpertiseBlockType = styled.div`
  border: 1px solid ${Default.color.blueBase};
  padding: 2.875rem 2.5rem;
  border-radius: 1.25rem;
  flex-direction: row;
  align-items: flex-start;
  margin: 2.5rem 1rem 0;
  cursor: pointer;
  width: 100%;

  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }

  ${Mobile(`
    padding: 1.875rem 1.25rem;
    margin: 0;
    margin-bottom: 1.875rem;
    &:last-child{
        margin-bottom: 0;
    }
    &:first-child {
        margin-top: 1.875rem;
      }
  `)}

  background: transparent;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
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
  height: 36.9375rem;
  position: relative;

  ${Mobile(`
    width: 100%;
    height: 17.5rem;
  `)}
`;

export const ExpertiseBlockImageBack = styled.div`
  width: 37.5rem;
  height: 33.4375rem;
  background: url(${image1}) no-repeat center;
  background-size: cover;
  margin-top: -3.75rem;
  border-radius: 3.125rem;
  position: absolute;
  z-index: 1;

  ${Mobile(`
    width: 100%;
    height: 15.625rem;
    margin-top: 0;
    position: relative
  `)}
`;
export const ExpertiseBlockImageFunny = styled.div`
  width: 37.8125rem;
  height: 33.4375rem;
  background: ${Default.color.blueLight};
  margin-left: 3.75rem;
  border-radius: 3.125rem;
  opacity: 0.4;

  ${Mobile(`
    width: 100%;
    display: none;
  `)}
`;
export const ExpertiseBLockContentText = styled.div`
  padding: 4.5625rem;

  ${Mobile(`
    padding: 0.9375rem 0;
  `)}
`;
export const ExpertiseContentIcons = styled.div``;
export const ExpertiseIcon = styled.div`
  padding-right: 3.875rem;
  font-size: 2.1875rem;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;

  ${Mobile(`
      padding: 0 0.9375rem;
      font-size: 1.875rem;
      text-align: center;
      align-items: center;
  `)}
`;
export const ExpertiseIconTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.5625rem;
  color: ${Default.color.white};
  font-weight: 600;
  padding-top: 0.3125rem;
`;

export const JoinTeam = styled(Default.BlockContent)`
  background: ${Default.color.white2};
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const NewJobBLock = styled(Default.BlockContent)`
  background: url(${imageNewJob}) no-repeat center;
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
export const BestChoice = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .slick-list {
    overflow: visible;
    .slick-slide {
      opacity: 0.3;
      &.slick-active {
        opacity: 1;
      }
    }
  }
  .slick-arrow {
    z-index: 10;
  }
`;
export const BestChoiceItem = styled.div`
  border: 1px solid ${Default.color.success};
  padding: 2.8125rem 2.5rem;
  border-radius: 1.25rem;
  width: 28.4375rem;
  margin: 0 0.9375rem;
`;
export const BestChoiceItemText = styled(Default.Text)`
  font-size: 0.75rem;
`;
export const IconExpertiseContent = styled.div`
  width: 1.875rem;
`;

export const ImageJoinTeam = styled.div`
  width: 34.9375rem;
  height: 23.6875rem;
  border-radius: 3.125rem;
  background: #808080;
  margin-left: 3.125rem;
  position: relative;
  z-index: 1;

  ${Mobile(`
    width: 17.5rem;
    height: 12.5rem;
    margin-top: 4.375rem;
  `)}
`;

export const ImageJoinTeamOrnament = styled.div`
  width: 34.9375rem;
  height: 23.6875rem;
  border-radius: 3.125rem;
  border: 1px solid ${Default.color.spotlight};
  position: absolute;
  margin-left: 0;
  margin-top: -3.125rem;

  ${Mobile(`
    width: 17.5rem;
    height: 12.5rem;
    margin-top: 1.875rem
  `)}
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
