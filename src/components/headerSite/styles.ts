import styled from 'styled-components';

import Default from '../../default';

interface ITransparent {
  transparent?: boolean;
}

export const HeaderDefault = styled.header<ITransparent>`
  padding: 1.875rem 0;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : Default.color.white};
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Content = styled.div`
  flex-direction: row;
`;

export const ContentLogo = styled.div`
  width: 6.9375rem;
  height: 2.1875rem;
`;
export const ContentLogoImage = styled.img``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 9.375rem;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const Li = styled.li`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
