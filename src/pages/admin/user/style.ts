import styled from 'styled-components';

export const InvisibleButton = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-right: 0.625rem;
  &:hover {
    transition: all 0.2s ease;
    opacity: 0.5;
  }
`;
