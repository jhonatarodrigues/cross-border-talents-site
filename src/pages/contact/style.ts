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

export const BlockContactUs = styled(Default.BlockContent)`
  background: ${Default.color.blueOriginal};
`;

export const BlockContactUsForm = styled.div`
  background: ${Default.color.blue};
  padding: 6.625rem 5.25rem 4.4375rem;
  border-radius: 3.125rem;
  width: 762px;
  margin-left: 7.375rem;
  position: relative;
  flex-direction: column;

  ${Mobile(`
    width: 100%;
    padding: 4.375rem 2.5rem 3.125rem;
    margin-left: 0;
  `)}

  .MuiTextField-root:hover fieldset,
  .MuiFormControl-root:hover fieldset {
    border-color: ${Default.color.success};
  }

  .MuiInputBase-root textarea {
    height: 100px !important;
    overflow: visible !important;
    color: ${Default.color.white};
    padding: 0.9375rem;
  }

  .MuiFormControl-root .MuiOutlinedInput-root.Mui-focused fieldset,
  .MuiFormControl-root .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: ${Default.color.success};
  }
  .MuiInputLabel-root,
  .MuiSelect-icon,
  .MuiInputLabel-root,
  .MuiInputLabel-root {
    color: ${Default.color.white};
  }
  .MuiOutlinedInput-input {
    color: ${Default.color.white};
    &::placeholder {
      color: ${Default.color.white};
    }
  }
  .MuiSelect-icon {
    color: ${Default.color.white};
    opacity: 0.5;
    &:hover {
      border-color: ${Default.color.white};
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${Default.color.white};
    &:hover {
      border-color: ${Default.color.white};
    }
    legend span {
      color: ${Default.color.white};
    }
  }

  .MuiInputLabel-root {
    color: #fff !important;
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

  ${Mobile(`
    margin-right: 0;
    margin-bottom: 30px;
    padding: 1.875rem;
    &:last-child{
        margin-bottom: 0;
    }
  `)}
`;
export const CheckUnitItemImage = styled.div`
  background: ${Default.color.gray};
  width: 13.625rem;
  min-width: 13.625rem;
  height: 14.875rem;
  border-radius: 1.25rem;
  background-size: cover !important;

  ${Mobile(`
    width: 11.25rem;
    min-width: 11.25rem;
    height: 12.5rem;
  `)}
`;
