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
  background-color: ${Default.color.blueOriginal};
  max-height: 41rem;

  ${Mobile(`
        padding: 0 1.875rem;
  `)}
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.white};
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
  min-width: 6.6875rem;

  ${Mobile(`
    display: flex;
    text-align: center;
    justify-content: center;
  `)}
`;
export const ContainerTag = styled.div`
  align-items: center;

  ${Mobile(`
    text-align: center;
    margin-bottom: 0.625rem;
    margin-right: 0;
    justify-content: center;
    width: 100%;
  `)}
`;
export const TagIcon = styled.div<IColor>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 15px;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    opacity: 0.4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
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
  border: 1px solid transparent;
  position: relative;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &last-child {
    margin-right: 0;
  }
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid ${Default.color.blueBase};
    transition: all 0.2s ease;
  }

  ${Mobile(`
    width: 100%;
    text-align: center;
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
export const ButtonSocial = styled.button`
  background: ${Default.color.blueBase};
  width: 1.5625rem;
  height: 1.5625rem;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: 0;
  font-size: 0.75rem;
  color: ${Default.color.blue};
  margin-right: 0.3125rem;
  margin-top: 0.9375rem;
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
export const FormRender = styled(Form)`
  width: 100%;
`;
