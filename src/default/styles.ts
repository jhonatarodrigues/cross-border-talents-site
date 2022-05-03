import styled from 'styled-components';
import { color as Color } from './constants';

interface ISpace {
  height?: string;
}

interface IColor {
  color?: string;
}

interface ITitle extends IColor {
  textAlignCenter?: boolean;
}
interface IAlignCenter {
  alignItens?: string;
  justifyContent?: string;
}

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.125rem;
  font-weight: 600;
`;
export const TitleH3 = styled.h3<ITitle>`
  font-size: 3rem;
  line-height: 3.125rem;
  font-weight: 600;
  color: ${({ color }) => color};
  text-align: ${({ textAlignCenter }) => (textAlignCenter ? 'center' : 'left')};
  display: flex;
  justify-content: ${({ textAlignCenter }) =>
    textAlignCenter ? 'center' : 'flex-start'};
`;
export const Subtitle = styled.p<ITitle>`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ color }) => color || Color.whiteLight};
  text-align: ${({ textAlignCenter }) => (textAlignCenter ? 'center' : 'left')};
  justify-content: ${({ textAlignCenter }) =>
    textAlignCenter ? 'center' : 'flex-start'};
`;
export const Title2 = styled.p<IColor>`
  font-size: 1.25rem;
  line-height: 1.375rem;
  font-weight: 600;
  color: ${({ color }) => color || Color.whiteLight};
`;

export const Text = styled.p<ITitle>`
  font-size: 14px;
  line-height: 1.25rem;
  color: ${({ color }) => color || Color.whiteLight};
  text-align: ${({ textAlignCenter }) => (textAlignCenter ? 'center' : 'left')};
  justify-content: ${({ textAlignCenter }) =>
    textAlignCenter ? 'center' : 'flex-start'};
`;

export const BlockContent = styled.div`
  padding: 8.75rem 0;
`;
export const Row = styled.div<IAlignCenter>`
  flex-direction: row;
  width: 100%;
  align-items: ${({ alignItens }) => alignItens || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;
export const Column = styled.div<IAlignCenter>`
  flex-direction: column;
  justify-content: ${({ alignItens }) => alignItens || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;
export const Space = styled.div<ISpace>`
  width: 100%;
  height: ${props => props.height || '1rem'};
`;
