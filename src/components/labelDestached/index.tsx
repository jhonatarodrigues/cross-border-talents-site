import * as React from 'react';
import Default from '../../default';
import { LabelDiv } from './style';

interface IProps {
  text: string;
  background?: string;
}

export default function LabelDestached({
  text,
  background,
}: IProps): JSX.Element {
  return <LabelDiv style={{ background }}>{text}</LabelDiv>;
}

LabelDestached.defaultProps = {
  background: Default.color.blue,
};
