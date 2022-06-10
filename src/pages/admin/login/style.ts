import styled from 'styled-components';
import { Form } from '@unform/web';
import Default from '../../../default';

import BannerLogin from '../../../assets/images/login/banner.jpg';

interface IActive {
  active: boolean;
}

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${Default.color.grayExtremeLight};
  * {
    font-family: 'Epilogue', sans-serif;
  }
`;

export const IconLogin = styled.div`
  width: 8.375rem;
  height: 2.625rem;
  margin-bottom: 2.5rem;
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

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const ContentImage = styled.div`
  height: 100vh;
  width: 40.625rem;
  min-width: 40.625rem;
  background: url(${BannerLogin}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
`;
export const ContentLogo = styled.div`
  width: 100%;
  height: 100vh;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  padding-right: 19.5rem;
  flex-direction: column;
`;
export const ContentInitLogo = styled.div``;
export const BaseLogin = styled.div`
  width: 28.4375rem;
  background: ${Default.color.white};
  box-shadow: 0px 0px 50px #0000000d;
  border-radius: 1.25rem;
  overflow: hidden;
  margin-left: -10.8125rem;
`;
export const BaseLoginContent = styled.div`
  padding: 3.125rem 3.125rem;
`;
export const BaseLoginCreateAccountLink = styled.div`
  padding: 1.875rem 3.75rem;
  background: ${Default.color.blueOriginal};
`;
export const BaseLoginCreateAccountLinkSpan = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${Default.color.white};
  text-decoration: underline;
`;

export const InputRadio = styled.input`
  color: ${Default.color.blueOriginal};
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
  border: 1px solid ${Default.color.blueOriginal};
  float: left;
  margin-top: -0.0625rem;
  margin-right: 0.3125rem;
`;

export const ContentSwitch = styled.div`
  display: flex;
  border-radius: 0.625rem;
  overflow: hidden;
  width: 100%;
`;
export const ContentSwitchItem = styled.button<IActive>`
  background: ${({ active }) =>
    active ? Default.color.blueBase : Default.color.grayExtremeLight};
  font-size: 0.75rem;
  color: ${({ active }) => (active ? Default.color.white : Default.color.gray)};
  padding: 0.9375rem 0;
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  font-weight: 600;
`;
