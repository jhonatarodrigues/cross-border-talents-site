import styled from 'styled-components';

import Default from '../../default';

interface IVariant {
  variant?: string;
}

export const ContentButton = styled.button<IVariant>`
  background: ${props =>
    props.variant === 'outlined' ? 'transparent' : Default.color.blueOriginal};
  padding: 0.625rem 1.25rem;
  border: 1px solid
    ${props =>
      props.variant === 'outlined'
        ? Default.color.blueLight
        : Default.color.blueOriginal};
  border-radius: 0.625rem;
`;

export const Text = styled.p<IVariant>`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  color: ${props =>
    props.variant === 'outlined'
      ? Default.color.blueLight
      : Default.color.white};
  font-weight: 700;
`;
