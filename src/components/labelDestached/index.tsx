import * as React from 'react';
import Default from '../../default';
import { LabelDiv, Content } from './style';

interface IProps {
  text: string;
  background?: string;
  type?: 'default' | 'info';
}

export default function LabelDestached({
  text,
  background,
  type,
}: IProps): JSX.Element {
  let backgroundStyle = background;

  if (type === 'info' && !background) {
    backgroundStyle = Default.color.grayLight;
  } else {
    backgroundStyle = Default.color.blue;
  }

  return (
    <Content>
      <LabelDiv style={{ background: backgroundStyle }}>{text}</LabelDiv>
    </Content>
  );
}

LabelDestached.defaultProps = {
  background: '',
  type: 'default',
};
