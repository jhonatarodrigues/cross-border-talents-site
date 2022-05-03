import React from 'react';

import { Container, BaseContent } from './styles';

interface IProps {
  children: React.ReactNode;
  row?: boolean;
}

export default function ContainerSite({ children, row }: IProps): JSX.Element {
  return (
    <BaseContent>
      <Container row={row}>{children}</Container>
    </BaseContent>
  );
}
ContainerSite.defaultProps = {
  row: false,
};
