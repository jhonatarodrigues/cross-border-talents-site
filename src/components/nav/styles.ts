import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Default from '../../default';

interface IMain {
  openMain: boolean;
}

interface IActive extends IMain {
  active?: boolean;
  white?: boolean;
  first?: boolean;
}

export const ContainerNav = styled.div<IMain>`
  height: 100%;
  background: ${Default.color.white};
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  ${({ openMain }) => (openMain ? `width: 16vw;` : `width: 2.5rem`)}
  min-width: 15rem;
  z-index: 1;
`;

export const ContentNav = styled.div`
  height: 100%;
`;

export const ItemNav = styled.div<IActive>`
  width: 100%;
  background: ${props =>
    props.active ? Default.color.white2 : Default.color.white};
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    background: rgba(0, 0, 0, 0.16);

    ${props =>
      !props.openMain &&
      `.activeTooltip{
        display: block;   
        opacity: 1;
    }`}
  }
`;

export const ItemIcon = styled(FontAwesomeIcon)<IMain>`
  margin-right: ${props => (props.openMain ? '.9375rem' : '0')};
`;
export const TextNav = styled.p<IActive>`
  font-size: 0.9375rem;
  text-decoration: none;
  font-weight: 400;
  color: ${props =>
    props.active ? Default.color.graySemiDark : Default.color.gray};
  };
`;

export const ContainerTitle = styled.div<IMain>`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 15px 1.875rem;
  ${({ openMain }) =>
    !openMain &&
    `
    justify-content: center;
    align-items: center;
  `}
`;

export const ContentLogo = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 0.9375rem 0;
`;
export const LogoImage = styled.img`
  width: 9.375rem;
`;
