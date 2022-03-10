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
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
`;

export const ContentUser = styled.div<IMain>`
  width: 100%;
  height: 6.25rem;
  align-items: center;
  display: flex;
  padding: ${({ openMain }) => (openMain ? `0 0.9375rem` : `0.3125rem`)};
`;

export const ContentImage = styled.div<IMain>`
  border-radius: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  ${({ openMain }) =>
    openMain
      ? ` width: 3.125rem;
      height: 3.125rem;`
      : ` width: 1.875rem;
      height: 1.875rem;`}
`;

export const ImageName = styled.div<IMain>`
  width: 3.125rem;
  height: 3.125rem;
  background: ${Default.color.white};
  font-size: 1.25rem;
  letter-spacing: -0.0437rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Default.color.blue};
  font-weight: 700;
  transition: all 0.2s ease;
  ${({ openMain }) =>
    openMain ? `font-size: 1.25rem;` : `font-size: 0.8125rem;`}
`;

export const ContentInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  color: ${Default.color.black};
  margin-bottom: 0.3125rem;
`;

export const ContentNav = styled.div`
  height: 100%;
`;

export const ContentFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background: ${Default.color.blue};
  height: 2.8125rem;
  overflow: hidden;
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
