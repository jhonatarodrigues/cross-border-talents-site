import styled from 'styled-components';
import { Form } from '@unform/web';

import BannerContact from '../../assets/images/contact/bannerContact.jpg';
import Default from '../../default';

export const Banner = styled.div`
  height: 37.0625rem;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background: url(${BannerContact}) center no-repeat;
  background-size: cover;
  max-height: 41rem;
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

export const BlockContactUs = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
`;
export const BlockContactUsForm = styled.div`
  background: ${Default.color.blue};
  padding: 4.4375rem 5.25rem;
  border-radius: 3.125rem;
  width: 47.625rem;
  margin-left: 5.0625rem;
  position: relative;
  flex-direction: column;

  .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input {
    height: 100px !important;
    overflow: visible !important;
    color: ${Default.color.white};
    padding: 0.9375rem;
  }

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
export const BlockCheckUnits = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
`;
export const CheckUnitItem = styled.div`
  box-shadow: 0px 0px 30px #0000000d;
  background: ${Default.color.white};
  border-radius: 1.25rem;
  width: 100%;
  margin-right: 3.125rem;
  &:last-child {
    margin-right: 0;
  }
`;
export const CheckUnitItemImage = styled.div`
  background: ${Default.color.gray};
  width: 13.625rem;
  min-width: 13.625rem;
  height: 14.875rem;
  border-radius: 1.25rem;
`;
