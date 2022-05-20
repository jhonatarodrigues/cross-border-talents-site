import styled from 'styled-components';
import { Form } from '@unform/web';

import TalentPool from '../../assets/images/talentPool/talent-pool.jpg';
import StopWorrying from '../../assets/images/talentPool/stop-worrying.jpg';
import Default from '../../default';

interface IColor {
  color: string;
}

export const Banner = styled.div`
  height: 43.3125rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: url(${TalentPool}) center no-repeat;
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
  background: transparent;
  transition: all 0.3s ease;
  &:hover {
    background: #7fa0c733;
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
  width: 41.5625rem;
  height: 36.9375rem;
  background: #0f0;
`;
export const ContentIconExpertise = styled.div``;
export const ExpertiseArrow = styled.div`
  position: relative;
  padding-left: 2.5rem;
  height: 100%;
  align-items: center;
`;
export const NewJobBLock = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
  justify-content: center;
  align-items: center;
`;
export const NewJobItem = styled.div`
  width: 100%;
  background: ${Default.color.white};
  padding: 2.5rem;
  flex-direction: column;
  border-radius: 1.25rem;
  margin: 0 0.625rem;
  border: 1px solid ${Default.color.white};
  box-shadow: 0px 0px 30px #0000000d;
  position: relative;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.2s ease;
    border: 1px solid ${Default.color.spotlight};
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
export const NewJobTitleContent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 60.0625rem;
`;
export const TagNewJobItem = styled.div<IColor>`
  padding: 0.375rem 1rem;
  background: ${props => props.color};
  color: ${Default.color.white};
  font-size: 10px;
  border-radius: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
`;
export const NewJobTagType = styled.div`
  font-size: 0.625rem;
  color: ${Default.color.white};
  font-weight: 700;
  position: absolute;
  top: -0.0625rem;
  left: -0.0625rem;
  border-top-left-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
  background: ${Default.color.spotlight};
  padding: 0.5rem 1.125rem;
`;
export const BlockStopWorrying = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
`;
export const WastedIconContent = styled(Default.Column)`
  width: auto;
  margin-right: 70px;
`;
export const BlockStopWorryingImageContent = styled(Default.Column)`
  margin-left: 8.25rem;
  width: 45.375rem;
  position: relative;
`;
export const BlockStopWorryingImage = styled.div`
  width: 41.625rem;
  height: 33.1875rem;
  background: url(${StopWorrying}) center no-repeat;
  border-radius: 3.125rem;
  top: 0;
  position: relative;
  margin-top: -3.75rem;
  right: 0;
  z-index: 1;
`;

export const BlockStopWorryingImageBack = styled.div`
  width: 41.625rem;
  height: 33.1875rem;
  background: ${Default.color.white};
  border-radius: 3.125rem;
  top: 0;
  position: absolute;
  margin-right: 3.75rem;
  right: 0;
  z-index: 0;
  opacity: 0.4;
`;
export const BlockContactUs = styled(Default.BlockContent)`
  background: ${Default.color.grayExtremeLight};
`;
export const BlockContactUsForm = styled.div`
  background: ${Default.color.blue};
  padding: 6.625rem 5.25rem 4.4375rem;
  border-radius: 3.125rem;
  width: 762px;
  margin-left: 7.375rem;
  position: relative;
  flex-direction: column;

  .css-uaehr5-MuiFormControl-root-MuiTextField-root:hover fieldset,
  .css-8l3ogp-MuiFormControl-root:hover fieldset {
    border-color: ${Default.color.success};
  }

  .css-uaehr5-MuiFormControl-root-MuiTextField-root
    .MuiOutlinedInput-root.Mui-focused
    fieldset,
  .css-8l3ogp-MuiFormControl-root .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: ${Default.color.success};
  }
  .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root,
  .css-bpeome-MuiSvgIcon-root-MuiSelect-icon,
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root,
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    color: ${Default.color.white};
  }
  .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
    color: ${Default.color.white};
    &::placeholder {
      color: ${Default.color.white};
    }
  }
  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    color: ${Default.color.white};
    opacity: 0.5;
    &:hover {
      border-color: ${Default.color.white};
    }
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${Default.color.white};
    &:hover {
      border-color: ${Default.color.white};
    }
    legend span {
      color: ${Default.color.white};
    }
  }
`;
export const ContactBlockInfo = styled.div`
  color: ${Default.color.white};
  font-size: 1.125rem;
  padding: 2.5rem 5rem;
  background: ${Default.color.success};
  position: absolute;
  border-radius: 1.25rem;
  top: 0;
  left: 0;
  transform: translateY(-50%);
`;
export const FormRender = styled(Form)`
  width: 100%;
`;
export const TextHaveAccount = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.white};
  margin-left: 1.875rem;
  a {
    text-decoration: underline;
    color: ${Default.color.white};
  }
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

export const BlockGetFree = styled(Default.BlockContent)`
  background: ${Default.color.grayExtremeLight};
`;
export const BlockGetFreeItem = styled.div`
  background: ${Default.color.white};
  padding: 3.125rem 5rem;
  margin-right: 3.125rem;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 30px #0000000d;
  align-items: center;
  width: 100%;
  &:last-child {
    margin-right: 0;
  }
`;
export const GetFreeContentIcon = styled.div`
  width: 3.125rem;
`;
