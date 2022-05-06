import styled from 'styled-components';
import Default from '../../default';

interface IWidth {
  width?: string;
}

export const Banner = styled.div`
  height: 98vh;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: #0f0;
`;
export const Title = styled(Default.Title)`
  color: ${Default.color.white};
  margin-bottom: 1.25rem;
`;
export const InputSearch = styled.input`
  font-size: 0.875rem;
  color: ${Default.color.gray};
  border: none;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;
export const TextIconSearch = styled.h3`
  flex-direction: column;
  font-size: 0.75rem;
  color: ${Default.color.gray};
  span {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${Default.color.spotlight};
  }
`;
export const IconSearch = styled.div`
  width: 43px;
  height: 35px;
  background: #ff0;
  margin-right: 0.625rem;
`;
export const BlockAcademy = styled(Default.BlockContent)`
  background: ${Default.color.grayBackground};
`;
export const ImageContent = styled.div`
  width: 36.9375rem;
  position: relative;
`;
export const Image = styled.div`
  width: 36.9375rem;
  height: 42.125rem;
  border-radius: 3.125rem;
  background: #f00;
  position: relative;
  margin-left: -60px;
  margin-top: -60px;
  position: absolute;
  z-index: 1;
`;
export const ImageOrnament = styled.div`
  width: 36.9375rem;
  height: 42.125rem;
  border-radius: 3.125rem;
  background: ${Default.color.blueOriginal};
  position: relative;
`;
export const IconExcellence = styled.div`
  width: 4.125rem;
  height: 3.3125rem;
  background: #ff0;
  margin-right: 0.625rem;
`;
