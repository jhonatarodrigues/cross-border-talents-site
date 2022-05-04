import styled from 'styled-components';
import Default from '../../default';

interface IColor {
  color: string;
}

export const Banner = styled.div`
  height: 80vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${Default.color.blueOriginal};
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.white};
  margin-bottom: 2.1875rem;
  padding-bottom: 6.25rem;
`;
export const BlockForEmployers = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
  justify-content: center;
  align-items: center;
  padding-top: 0;
`;
export const BlockFilter = styled.div`
  padding: 3.75rem 3.125rem;
  background: ${Default.color.white};
  border-radius: 1.25rem;
  width: 100%;
  position: relative;
  flex-direction: column;
  box-shadow: 0px 0px 30px #0000000d;
  margin-top: -15rem;
`;
export const ContentButtonSearch = styled.div`
  display: block;
  min-width: 107px;
`;
export const ContainerTag = styled.div`
  margin-right: 1.875rem;
  align-items: center;
`;
export const TagIcon = styled.div<IColor>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 15px;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    opacity: 0.4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
`;
export const ContentBox = styled.div`
  flex-wrap: wrap;
`;

export const Box = styled.div`
  padding: 3.125rem;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 30px #0000000d;
  margin-right: 1.875rem;
  margin-bottom: 30px;
  width: calc(33.33% - 1.25rem);
  &:nth-child(3n) {
    margin-right: 0;
  }
  &last-child {
    margin-right: 0;
  }
`;
export const NewJobItemContentIconText = styled.p`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  padding-left: 0.625rem;
`;
export const TagNewJobItem = styled.div<IColor>`
  padding: 0.5rem 1.25rem;
  background: ${props => props.color};
  color: ${Default.color.white};
  font-size: 0.8125rem;
  border-radius: 1.25rem;
`;
