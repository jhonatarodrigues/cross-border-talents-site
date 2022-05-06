import styled from 'styled-components';

import Default from '../../default';

interface IContentButton {
  variant?: string;
  bgColor?: string;
}

export const ContentButton = styled.button<IContentButton>`
  background: ${props =>
    props.variant === 'outlined'
      ? 'transparent'
      : props.bgColor || Default.color.blueOriginal};
  padding: 0.6875rem 1.25rem;
  border: 1px solid
    ${props =>
      props.variant === 'outlined'
        ? props.bgColor || Default.color.blueLight
        : props.bgColor || Default.color.blueOriginal};
  border-radius: 0.625rem;
  display: flex;
`;

export const Text = styled.p<IContentButton>`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  color: ${props =>
    props.variant === 'outlined'
      ? props.bgColor || Default.color.blueLight
      : Default.color.white};
  font-weight: 700;
  text-wrap: nowrap;
  align-items: center;
  justify-content: center;
  display: flex;
`;
