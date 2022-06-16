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
export const ContentButton = styled.div`
  display: flex;
  align-items: center;
`;
export const TextError = styled.p`
  padding: 0;
  margin: 0;
  color: ${Default.color.red};
  margin-top: 0.3125rem;
`;
export const NameFIle = styled.p`
  padding: 0;
  color: ${Default.color.gray};
  padding-bottom: 2px;
  font-size: 0.875rem;
  padding: 0.3125rem 0 0.3125rem 0.3125rem;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const ButtonRemove = styled.button`
  width: 1.5625rem;
  height: 1.5625rem;
  min-width: 1.5625rem;
  min-height: 1.5625rem;
  border: none;
  background: ${Default.color.red};
  border-radius: 50%;
  color: ${Default.color.white};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
