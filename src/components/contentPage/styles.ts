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
  background: #e7e7e9;
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
`;

export const TextFooter = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.gray};
  text-align: center;
`;
export const HeaderPage = styled.div`
  width: 100%;

  padding: 1.875rem;
`;
export const TitlePage = styled.h1`
  font-size: 1.875rem;
  color: ${Default.color.grayLight};
`;
export const PageHistory = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.black};
  margin-bottom: 0.625rem;
  opacity: 0.5;
`;

export const ContentAction = styled.div`
  padding: 0 1.875rem 0;
`;
