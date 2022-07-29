import styled from 'styled-components';
import { Form } from '@unform/web';

import Default from '../../default';

interface IColor {
  color: string;
}

export const Banner = styled.div`
  height: 80vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${Default.color.white};
  max-height: 41rem;
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.blueOriginal};
  margin-bottom: 2.1875rem;
  padding-bottom: 6.25rem;
  text-align: center;
  width: 100%;
`;
