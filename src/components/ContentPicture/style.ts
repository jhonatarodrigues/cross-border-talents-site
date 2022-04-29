import styled from 'styled-components';
import Default from '../../default';

export const ContainerPicture = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  background: ${Default.color.white};
  border-radius: 100%;
  background-size: cover;
  position: relative;
`;

export const ButtonRemove = styled.button`
  border: none;
  background: ${Default.color.red};
  width: 20px;
  height: 20px;
  color: ${Default.color.white};
  border-radius: 100%;
  position: absolute;
  right: 0;
  cursor: pointer;
`;
