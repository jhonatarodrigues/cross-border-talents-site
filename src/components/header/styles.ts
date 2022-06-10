import styled from 'styled-components';

import Default from '../../default';

// -- images
import ImageLogo from '../../assets/images/logo.png';

interface IFirst {
  first?: boolean;
  openMain: boolean;
}

export const ContainerHeader = styled.div`
  width: 100%;
  height: 3.125rem;
  background: ${Default.color.blue};
  padding: 0 0.9375rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  background: url(${ImageLogo}) center no-repeat;
  background-size: contain;
`;

export const ButtonUser = styled.div`
  width: 2.1875rem;
  height: 2.1875rem;
  font-size: 1.25rem;
  background: rgba(88, 104, 127, 0.5);
  border-radius: 100%;
  border: none;

  color: ${Default.color.blue};
  transition: all 0.2s ease;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: center;
  display: flex;
  position: relative;

  &:hover {
    transition: all 0.2s ease;
    background: rgba(88, 104, 127, 0.8);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    .dropdownUser {
      transition: all 0.2s ease;
      display: flex;
      opacity: 1;
    }
  }
`;
export const Dropdown = styled.div`
  background: ${Default.color.white};
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  box-shadow: 0px 0px 30px #0000001a;
  border-radius: 1.25rem;
  padding: 1.5625rem 1.875rem;
  display: none;
  opacity: 0;
  transition: all 0.2s ease;
  border-top-right-radius: 0;
  flex-direction: column;
`;
export const DropdownItem = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border: 0;
  }
  &:hover {
    transition: all 0.2s ease;
    opacity: 0.8;
  }
`;
export const Content = styled.div`
  display: flex;
`;

export const ContainerSanduich = styled.button`
  flex-direction: column;
  display: flex;
  width: 1.25rem;
  justify-content: center;
  align-items: center;
  margin-right: 0.9375rem;
  padding: 0;
  background: transparent;
  border: 0;
  opacity: 1;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
    opacity: 0.8;
  }
`;

export const SanduichLine = styled.div<IFirst>`
  width: 100%;
  height: 0.125rem;
  background: ${Default.color.white};
  margin-top: ${props => (props.first ? '0' : '0.1875rem')};
  transition: all 0.2s ease;
  ${props =>
    !props.openMain
      ? `
        opacity: 1;
        transform: rotate(0deg);
        `
      : `
        opacity: 0;
        &:first-child {
            transform: rotate(45deg);
            opacity: 1;
            margin-top: -0.25rem;
        }
        &:last-child {
            transform: rotate(-45deg);
            opacity: 1;
            margin-top: -0.4375rem;
        }
  `}
`;
export const ContainerHeaderFull = styled.div`
  width: 100%;
  position: relative;
  z-index: 50;
`;
export const ContentButton = styled.div`
  display: flex;
  align-items: center;
`;
export const NameUser = styled.p`
  margin: 0;
  padding: 0;
  margin-right: 0.625rem;
  font-size: 0.9375rem;
  color: ${Default.color.blueLight};
  text-transform: capitalize;
`;
export const NameBusiness = styled.p`
  font-size: 18px;
  color: ${Default.color.blueLight};
`;

export const ChangePasswordContent = styled.div`
  width: 350px;
`;
