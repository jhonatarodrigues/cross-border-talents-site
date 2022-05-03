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
  padding: 0.625rem 1.25rem;
  border: 1px solid
    ${props =>
      props.variant === 'outlined'
        ? Default.color.blueLight
        : Default.color.blueOriginal};
  border-radius: 0.625rem;
`;

export const Text = styled.p<IContentButton>`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  color: ${props =>
    props.variant === 'outlined'
      ? Default.color.blueLight
      : Default.color.white};
  font-weight: 700;
`;
