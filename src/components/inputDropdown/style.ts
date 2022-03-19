import styled from 'styled-components';
import Select from '@mui/material/Select';

import Default from '../../default';

export const SelectField = styled(Select)`
  width: 100%;
`;
export const ContentFiled = styled.div`
  width: 100%;
  margin-bottom: 0.9375rem !important;
`;
export const TextError = styled.p`
  padding: 0;
  margin: 0;
  color: ${Default.color.red};
  margin-top: 0.3125rem;
`;
