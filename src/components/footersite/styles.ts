import styled from 'styled-components';

import { Mobile } from '../../styles/responsiveVariables';
import Default from '../../default';
// -- images

interface IMobileRow {
  row?: boolean;
}

interface IPaddingLeft {
  paddingLeft?: string;
}
interface IMail extends IPaddingLeft {
  mail?: boolean;
  marginMobile?: boolean;
}
interface IColumns {
  columns?: boolean;
}

export const ContentFooter = styled.footer`
  background: ${Default.color.blue};
  padding-top: 4.375rem;
  padding-bottom: 2.8125rem;

  ${Mobile(`
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  `)}
`;
export const Footer = styled.div`
  width: 100%;
  flex-direction: column;
`;
export const Row = styled.div<IMobileRow>`
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 750px) {
    flex-direction: ${({ row }: IMobileRow) => (row ? 'row' : 'column')};
    max-width: ${({ row }: IMobileRow) => (row ? '150px' : '100%')};
  }
  ${Mobile(`
    margin-bottom: 1.25rem;
  `)}
`;
export const RowNav = styled.div`
  justify-content: space-between;
  width: 100%;
  ${Mobile(`
    flex-direction: column;
  `)}
`;
export const LeftContentFirst = styled.div`
  width: 10.375rem;

  ${Mobile(`
    width: 100%;
    margin-bottom: 1.25rem;
  `)}
`;
export const ContentLogo = styled.img`
  width: 9.375rem;
  height: 3.125rem;
`;

export const Nav = styled.ul`
  margin-left: 3.75rem;
  a {
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  ${Mobile(`
    display: none;
  `)}
`;

export const ItemNav = styled.li`
  font-size: 0.875rem;
  color: ${Default.color.blueLight};
`;

export const Content = styled.div<IColumns>`
  align-items: center;
  flex-direction: ${({ columns }) => (columns ? 'column' : 'row')};
`;

export const ContentNav = styled.div`
  width: 100%;
  padding-left: 3.4375rem;
  flex-direction: column;

  ${Mobile(`
    padding-left: 0;
    text-align: center;
    align-items: center;
  `)}
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

  ${Mobile(`
    text-align: center;
  `)}
`;

export const TitleFooter = styled.h3`
  font-size: 1.125rem;
  color: ${Default.color.white};
  line-height: 1.75rem;
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

  @media only screen and (max-width: 750px) {
    margin: ${({ marginMobile }) => (marginMobile ? '0 0.3125rem' : '')};
  }

  ${Mobile(`
    padding-left: 0;
    margin-bottom: 0.625rem;
    &:last-child{
        margin-bottom: 0;
    }
  `)}
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

  ${Mobile(`
    flex-direction: column;
  `)}
`;
