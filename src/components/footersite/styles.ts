import styled from 'styled-components';

import Default from '../../default';
// -- images

export const ContentFooter = styled.footer`
  background: ${Default.color.blue};
  padding-top: 70px;
  padding-bottom: 45px;
`;
export const Footer = styled.div`
  width: 100%;
  flex-direction: column;
`;
export const Row = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftContentFirst = styled.div`
  width: 10.375rem;
  border: 1px solid #fff;
`;
export const ContentLogo = styled.div`
  width: 150px;
  height: 50px;
  background: #f00;
`;

export const Nav = styled.ul`
  margin-left: 3.75rem;
`;

export const ItemNav = styled.li`
  font-size: 0.875rem;
  color: ${Default.color.blueLight};
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  align-items: center;
`;

export const Selo = styled.div`
  width: 56px;
  height: 46px;
  background: #0ff;
  margin-left: 0.625rem;
`;

export const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Default.color.blueOriginal};
  margin: 1.875rem 0;
`;
