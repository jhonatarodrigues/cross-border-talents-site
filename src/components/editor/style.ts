import styled from 'styled-components';
import TextField from '@mui/material/TextField';

import Default from '../../default';

export const InputField = styled(TextField)`
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
export const Title = styled.p`
  font-size: 0.75em;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  text-overflow: ellipsis;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  text-transform: capitalize;
  margin-bottom: 0.3125rem;
`;
