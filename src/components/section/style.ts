import styled from 'styled-components';

import Default from '../../default';

export const SectionField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.875rem;
  border-bottom: 1px solid #efefef;
  margin-bottom: 1.875rem;
`;

export const Label = styled.legend`
  color: ${Default.color.blue};
  font-size: 1rem;
`;
export const Content = styled.div`
  width: 100%;
  padding-top: 1.25rem;
`;
