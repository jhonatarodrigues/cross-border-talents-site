import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

export default function DefaultButton({
  children,
  ...rest
}: IProps): JSX.Element {
  return (
    <Button variant="contained" {...rest}>
      {children}
    </Button>
  );
}
