import React, { ButtonHTMLAttributes } from 'react';

import { ContentButton, Text } from './style';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'outlined';
  bgColor?: string;
}

export default function DefaultButtonSite({
  children,
  variant,
  bgColor,
  ...rest
}: IProps): JSX.Element {
  return (
    <ContentButton variant={variant} {...rest} bgColor={bgColor}>
      <Text variant={variant}>{children}</Text>
    </ContentButton>
  );
}

DefaultButtonSite.defaultProps = {
  variant: '',
  bgColor: '',
};
