import React from 'react';

import { Container, BaseContent } from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function ContainerSite({ children }: IProps): JSX.Element {
  return (
    <BaseContent>
      <Container>{children}</Container>
    </BaseContent>
  );
}
