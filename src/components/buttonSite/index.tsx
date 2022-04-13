import React, { ButtonHTMLAttributes } from 'react';

import { ContentButton, Text } from './style';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'outlined';
}

export default function DefaultButtonSite({
  children,
  variant,
  ...rest
}: IProps): JSX.Element {
  return (
    <ContentButton variant={variant} {...rest}>
      <Text variant={variant}>{children}</Text>
    </ContentButton>
  );
}

DefaultButtonSite.defaultProps = {
  variant: '',
};
