import * as React from 'react';
import { ButtonProps } from '@mui/material/Button';

import { ButtonMui } from './style';

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

export default function DefaultButton({
  children,
  ...rest
}: IProps): JSX.Element {
  return (
    <ButtonMui variant="contained" {...rest}>
      {children}
    </ButtonMui>
  );
}
