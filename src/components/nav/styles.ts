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
  border-top: 1px solid #efefef;
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
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  color: ${props => (props.active ? Default.color.blue : Default.color.gray)};
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
  padding: 0.9375rem 1.875rem;
`;
export const LogoImage = styled.img`
  width: 7.375rem;
  height: 2.3125rem;
`;

export const ContentItemText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LineActive = styled.div`
  width: 2rem;
  height: 1px;
  background: ${Default.color.blueLight};
  margin-right: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Default.color.gray};
`;
export const ContentDivider = styled.div`
  padding: 0.9375rem 1.25rem;
`;
