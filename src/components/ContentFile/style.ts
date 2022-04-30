import styled from 'styled-components';
import Default from '../../default';

export const ContainerFile = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  min-width: 3.125rem;
  min-height: 3.125rem;
  background: ${Default.color.blue};
  border-radius: 100%;
  background-size: cover;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${Default.color.white};
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
  top: 0;
  cursor: pointer;
`;
export const FileName = styled.p`
  font-size: 12px;
  width: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 0.3125rem;
  text-align: right;
`;
export const ContentFileGeneral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  justify-content: space-between;
`;
