import * as React from 'react';
import { Content } from './style';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function ContentInput({ children }: IProps): JSX.Element {
  return <Content>{children}</Content>;
}
