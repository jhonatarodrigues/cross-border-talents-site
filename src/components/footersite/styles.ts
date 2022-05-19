import styled from 'styled-components';

import Default from '../../default';
// -- images

interface IPaddingLeft {
  paddingLeft?: string;
}
interface IMail extends IPaddingLeft {
  mail?: boolean;
}
interface IColumns {
  columns?: boolean;
}

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
export const RowNav = styled.div`
  justify-content: space-between;
  width: 100%;
`;
export const LeftContentFirst = styled.div`
  width: 10.375rem;
`;
export const ContentLogo = styled.img`
  width: 9.375rem;
  height: 3.125rem;
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

export const Content = styled.div<IColumns>`
  align-items: center;
  flex-direction: ${({ columns }) => (columns ? 'column' : 'row')};
`;

export const ContentNav = styled.div`
  width: 100%;
  padding-left: 3.4375rem;
  flex-direction: column;
`;

export const Selo = styled.img`
  width: 3.5rem;
  height: 2.875rem;
  margin-left: 0.625rem;
`;

export const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Default.color.blueOriginal};
  margin: 1.875rem 0;
`;
export const Description = styled.p`
  font-size: 0.625rem;
  line-height: 1rem;
  color: ${Default.color.white};
`;

export const TitleFooter = styled.h3`
  font-size: 1.125rem;
  color: ${Default.color.white};
  line-height: 28px;
`;

export const LinkFooter = styled.h3<IMail>`
  font-size: 0.875rem;
  color: ${({ mail }) =>
    mail ? Default.color.success : Default.color.whiteLight};
  line-height: 1.75rem;
  text-decoration: ${({ mail }) => (mail ? 'underline' : 'none')};
  align-items: center;
`;

export const CopyrightText = styled.h3<IMail>`
  font-size: 0.875rem;
  color: ${Default.color.blueLight};
  padding-left: ${({ paddingLeft }) => paddingLeft || 0};
`;

export const ButtonSocial = styled.button`
  background: ${Default.color.blueBase};
  width: 1.5625rem;
  height: 1.5625rem;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: 0;
  font-size: 0.75rem;
  color: ${Default.color.blue};
  margin-right: 0.3125rem;
  margin-top: 1.125rem;
`;

export const ContentCopyright = styled.div`
  padding: 0.9375rem 0 0;
  justify-content: space-between;
  width: 100%;
`;
