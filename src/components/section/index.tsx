import * as React from 'react';
import { SectionField, Label, Content } from './style';

interface IProps {
  label: string;
  children: JSX.Element | JSX.Element[];
}

export default function Section({ label, children }: IProps): JSX.Element {
  return (
    <SectionField>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </SectionField>
  );
}
