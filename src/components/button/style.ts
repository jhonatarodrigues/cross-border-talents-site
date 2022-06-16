import styled from 'styled-components';

import Button from '@mui/material/Button';

interface ISize {
  size: string;
}

export const ButtonMui = styled(Button)<ISize>`
  border-radius: 0.625rem !important;
  text-transform: capitalize !important;
  box-shadow: none !important;
  padding: ${({ size }) =>
    size === 'small'
      ? '0.3rem 0.625rem !important'
      : '0.61rem 1.5625rem !important'};
  font-size: ${({ size }) =>
    size === 'small' ? '0.5625rem !important' : '0.75rem !important'};
`;
