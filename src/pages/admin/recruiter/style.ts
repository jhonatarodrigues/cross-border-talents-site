import styled from 'styled-components';

import Default from '../../../default';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentLogin = styled.div`
  width: 25rem;
  height auto;
  padding: 1.25rem 1.875rem;
  margin-top: 3.125rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);

`;

export const IconLogin = styled.div`
  width: 50px;
  height: 50px;
  background: ${Default.color.blue};
  border-radius: 100%;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  display: flex;
`;

export const TitleLogin = styled.p`
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const Space = styled.div`
  width: 100%;
  margin-bottom: 0.9375rem;
`;
export const InvisibleButton = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-right: 0.9375rem;
  &:hover {
    transition: all 0.2s ease;
    opacity: 0.5;
  }
`;
