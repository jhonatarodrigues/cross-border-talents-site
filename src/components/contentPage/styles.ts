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
  background: #f9fafb;
`;

export const GridPage = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
`;

export const StylePage = styled.div`
  margin: 1.875rem 1.875rem;
  background: #fff;
  padding: 1.875rem;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 30px #00000029;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 2.4375rem;
  padding: 0 3.125rem;
`;

export const TextFooter = styled.p`
  font-size: 0.75rem;
  color: ${Default.color.blueLight2};
  text-align: right;
  width: 100%;
`;
export const HeaderPage = styled.div`
  width: 100%;

  padding: 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitlePage = styled.h1`
  font-size: 1.25rem;
  color: ${Default.color.blue};
  span {
    color: ${Default.color.gray};
  }
`;

export const ContentAction = styled.div`
  padding-left: 1.875rem;
`;
export const ContentHeaderPage = styled.div``;
export const ContentActionButtons = styled.div``;
