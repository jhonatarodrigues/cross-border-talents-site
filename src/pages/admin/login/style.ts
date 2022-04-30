import styled from 'styled-components';
import { Form } from '@unform/web';
import Default from '../../../default';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Default.color.blueAqua};
`;

export const ContentLogin = styled.div`
  width: 28.125rem;
  height auto;
  padding: 4.375rem 3.75rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
    background: ${Default.color.white};
    border-radius: 1.25rem;
`;

export const IconLogin = styled.div`
  width: 8.375rem;
  height: 2.625rem;
  background: ${Default.color.blue};
  margin-bottom: 2.5rem;
`;

export const Space = styled.div`
  width: 100%;
  margin-bottom: 0.9375rem;
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FormStyled = styled(Form)`
  width: 100%;
`;

export const ButtonForgotPassword = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${Default.color.blueLight};
  font-size: 0.75rem;
  font-weight: 600;
`;
