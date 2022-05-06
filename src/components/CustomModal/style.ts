import styled from 'styled-components';

import Default from '../../default';

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: rgba(33, 47, 83, 0.8);
  flex-direction: column;
`;
export const ContentModal = styled.div`
  background: ${Default.color.white};
  border-radius: 1.25rem;
  overflow: hidden;
  flex-direction: column;
  position: relative;
`;
export const Modal = styled.div`
  padding: 4.375rem;
  padding-bottom: 0;
  flex-direction: column;
  position: relative;
`;
export const ContentBlue = styled.div`
  padding: 1.875rem 4.375rem;
  background: ${Default.color.blueOriginal};
  width: 100%;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid ${Default.color.gray};
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  z-index: 10;
  &:hover {
    transition: all 0.2s ease;
    opacity: 0.5;
  }
`;
