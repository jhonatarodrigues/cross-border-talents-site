import styled from 'styled-components';

import { Mobile } from '../../styles/responsiveVariables';
import Default from '../../default';

interface ITransparent {
  transparent?: boolean;
}

interface IOpenMenu {
  openMenu?: boolean;
}

export const HeaderDefault = styled.header<ITransparent>`
  padding: 1.875rem 3.125rem;
  width: 100%;
  position: absolute;
  z-index: 200;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : Default.color.white};
  align-items: center;

  ${Mobile(`
    padding: 1.875rem 1.875rem;
    position: fixed;
    top: 0;
    justify-content: space-between;
  `)}
`;

export const ContainerContentSite = styled.div<IOpenMenu>`
  width: 60%;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${Mobile(`
    width: 80%;
    position: fixed;
    height: 100vh;
    background: ${Default.color.blueOriginal};
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: all .2s ease;
  `)}

  ${({ openMenu }) =>
    openMenu
      ? Mobile(`
    transform: translateX(0%);
    transition: all .2s ease;
  `)
      : ''}
`;
export const ContentSite = styled.div`
  width: 75rem;
  position: relative;

  @media (max-width: 1400px) {
    max-width: 56.25rem;
  }

  ${Mobile(`
    max-width: 100%;
    width: 100%;
  `)}
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${Mobile(`
    width: 100%;
  `)}
`;

export const Content = styled.div`
  flex-direction: row;
  ${Mobile(`
    width: 100%;
  `)}
`;

export const ContentButtons = styled.div`
  flex-direction: row;
  position: absolute;
  right: 3.125rem;
  ${Mobile(`
    display: none!important;
  `)}
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

  ${Mobile(`
    width: 100%;
    justify-content: center;
    padding-left: 0;
  `)}
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  ${Mobile(`
    flex-direction: column;
  `)}
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
  ${Mobile(`
    margin: 0;
    text-align: center;
    justify-content: center;
    margin-bottom: 1.875rem;
    a {
        color: ${Default.color.white2};
    }
  `)}
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

  ${Mobile(`
    color: ${Default.color.white2};
  `)}
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

export const ContentSandwich = styled.button`
  width: 1.875rem;
  display: none;
  border: none;
  background: none;
  padding: 0;

  ${Mobile(`
    display: block!important;
  `)}
`;

export const SandwichLine = styled.div<IOpenMenu>`
  width: 100%;
  height: 0.1875rem;
  background: ${Default.color.blueOriginal};
  margin-bottom: 0.1875rem;
  transition: all 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  ${Mobile(`
    display: block;
  `)};

  ${({ openMenu }) =>
    openMenu
      ? Mobile(`
    display: none!important;
    transition: all 0.2s ease;
    &:first-child{
        display: block!important;
        transform: rotate(45deg);
    }
    &:last-child{
        display: block!important;
        transform: rotate(-45deg);
        margin-top: -0.3125rem;
    }
  `)
      : ''}
`;
