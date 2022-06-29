import * as React from 'react';
import Default from '../../default';
import { LabelDiv, Content } from './style';

interface IProps {
  text: string;
  background?: string;
  type?: 'default' | 'info' | 'approached' | 'available';
}

export default function LabelDestached({
  text,
  background,
  type,
}: IProps): JSX.Element {
  let backgroundStyle = background;

  if (type === 'approached' && !background) {
    backgroundStyle = Default.color.success;
  } else if (type === 'info' && !background) {
    backgroundStyle = Default.color.grayLight;
  } else if (type === 'available' && !background) {
    backgroundStyle = Default.color.blueLight2;
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
