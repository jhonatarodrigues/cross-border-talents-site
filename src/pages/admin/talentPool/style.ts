import styled from 'styled-components';

import Default from '../../../default';
import { color } from '../../../default/constants';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentLogin = styled.div`
  width: 25rem;
  height auto;
  padding: 1.25rem 1.875rem;
  margin-top: 3.125rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);

`;

export const IconLogin = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background: ${Default.color.blue};
  border-radius: 100%;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  display: flex;
`;

export const TitleLogin = styled.p`
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const Space = styled.div`
  width: 100%;
  margin-bottom: 0.9375rem;
`;
export const InvisibleButton = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-right: 0.9375rem;
  &:hover {
    transition: all 0.2s ease;
    opacity: 0.5;
  }
`;
export const ContentModal = styled.div`
  width: 80vw;
  max-width: 56.25rem;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalImage = styled.div`
  width: 100%;
  padding: 6.25rem 5.3125rem;
  background: ${color.success};
`;
export const ModalScroll = styled.div`
  flex-direction: column;
  width: 100%;
`;
export const InformationModal = styled.div`
  padding: 6.25rem 5.3125rem;
  width: 100%;
`;
export const TitleModal = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${color.gray};
  min-width: 17.5rem;
  max-width: 17.5rem;
`;
export const InfoModal = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: ${color.gray};
  flex-direction: column;
  line-height: 1.5625rem;
`;
export const ModalLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: ${color.blueLight2};
  margin: 3.125rem 0;
`;
export const TitleSectionModal = styled.div`
  font-size: 1.5625rem;
  font-weight: 600;
  color: ${color.blueOriginal};
`;
