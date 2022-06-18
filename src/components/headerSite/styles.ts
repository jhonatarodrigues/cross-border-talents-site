import styled from 'styled-components';

import Default from '../../default';

interface ITransparent {
  transparent?: boolean;
}

export const HeaderDefault = styled.header<ITransparent>`
  padding: 1.875rem 3.125rem;
  width: 100%;
  position: absolute;
  z-index: 200;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : Default.color.white};
  align-items: center;
`;

export const ContainerContentSite = styled.div`
  width: 100%;
  justify-content: center;
  position: absolute;
  left: 0;
`;
export const ContentSite = styled.div`
  width: 75rem;
  position: relative;

  @media (max-width: 1400px) {
    max-width: 56.25rem;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex-direction: row;
`;

export const ContentButtons = styled.div`
  flex-direction: row;
  position: absolute;
  right: 3.125rem;
`;

export const ContentLogo = styled.div`
  width: 6.9375rem;
  height: 2.1875rem;
`;
export const ContentLogoImage = styled.img``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    padding-left: 1.25rem;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const Li = styled.li`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 10px;
  a {
    color: ${Default.color.blueOriginal};
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
export const Dropdown = styled.div`
  flex-direction: column;
  position: relative;
  align-items: center;
  color: ${Default.color.blueOriginal};
  &:hover {
    .listDropdown {
      opacity: 1;
      display: flex;
      transition: opacity 0.5s;
    }
  }
`;
export const ListDropdown = styled.div`
  background: ${Default.color.white};
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  width: 10.375rem;
  padding: 1.5625rem 1.875rem;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 30px #0000001a;
  flex-direction: column;
  transition: all 0.2s ease;
  opacity: 0;
  display: hidden;
  z-index: 200;
`;
export const ListDropdownItem = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  margin-bottom: 0.625rem;
  a {
    color: ${Default.color.blueOriginal};
  }
`;
