import styled from 'styled-components';
import { Form } from '@unform/web';
import { Mobile } from '../../styles/responsiveVariables';

import Default from '../../default';

interface IColor {
  color: string;
}

export const Banner = styled.div`
  height: 80vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${Default.color.blueAqua};
  max-height: 41rem;
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.blueOriginal};
  margin-bottom: 2.1875rem;
  padding-bottom: 6.25rem;
`;
export const BlockForEmployers = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
  justify-content: center;
  align-items: center;
  padding-top: 0;
`;
export const BlockFilter = styled.div`
  padding: 3.75rem 3.125rem;
  background: ${Default.color.white};
  border-radius: 1.25rem;
  width: 100%;
  position: relative;
  flex-direction: column;
  box-shadow: 0px 0px 30px #0000000d;
  margin-top: -15rem;
`;
export const ContentButtonSearch = styled.div`
  display: block;
  min-width: 7.3125rem;

  ${Mobile(`
    display: flex;
    justify-content: center;
  `)}
`;

export const ContentBox = styled.div`
  flex-wrap: wrap;
`;

export const Box = styled.div`
  padding: 3.125rem;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 30px #0000000d;
  margin-right: 1.875rem;
  margin-bottom: 30px;
  width: calc(33.33% - 1.25rem);
  border: 1px solid ${Default.color.white};
  position: relative;
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &last-child {
    margin-right: 0;
  }
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.2s ease;
    border-color: ${Default.color.spotlight};
  }

  ${Mobile(`
    width: 100%;
  `)}
`;
export const NewJobItemContentIconText = styled.p`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  padding-left: 0.625rem;
`;
export const TagNewJobItem = styled.div<IColor>`
  padding: 0.5rem 1.25rem;
  background: ${props => props.color};
  color: ${Default.color.white};
  font-size: 0.8125rem;
  border-radius: 1.25rem;
`;
export const TagBox = styled.div`
  border-top-left-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
  background: ${Default.color.spotlight};
  padding: 0.5rem 1.125rem;
  position: absolute;
  top: -0.0625rem;
  left: -0.0625rem;
  font-size: 0.625rem;
  color: ${Default.color.white};
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

  ${Mobile(`
    width: 100%;
    padding: 4.375rem 2.5rem 3.125rem;
    margin-left: 0;
  `)}

  .MuiTextField-root:hover fieldset,
  .MuiFormControl-root:hover fieldset {
    border-color: ${Default.color.success};
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

  ${Mobile(`
    padding: 1.875rem 3.125rem;
  `)}
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

  ${Mobile(`
    flex-direction: column;
    text-align: center;
    margin-left: 0;
    align-items: center;
  `)}
`;
export const TextModal = styled(Default.Text2)`
  color: ${Default.color.white};
  a {
    text-decoration: underline;
    color: ${Default.color.white};
  }
`;

export const InputCheck = styled.input`
  margin-right: 0.4375rem;
  margin-top: -0.1875rem;
`;
