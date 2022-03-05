import styled from 'styled-components';

import Default from '../../default';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerPages = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  padding-top: 3.125rem;
`;

export const ContentChildren = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const GridPage = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
`;

export const StylePage = styled.div`
  padding: 1.875rem 1.875rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 2.4375rem;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #f00;
`;

export const TextFooter = styled.p`
  font-size: 0.75rem;
  color: #f0f;
  text-align: center;
`;
export const HeaderPage = styled.div`
  width: 100%;
  background: #f0f;
  padding: 1.1875rem 0.9375rem;
`;
export const TitlePage = styled.h1`
  font-size: 20px;
  color: #00f;
`;
export const PageHistory = styled.p`
  font-size: 0.75rem;
  color: #ff0;
  margin-bottom: 0.625rem;
`;

export const ContentAction = styled.div`
  padding: 1.875rem 1.875rem 0;
`;
