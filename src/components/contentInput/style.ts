import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 0.3125rem;

  .contentField {
    margin: 0 0.4688rem;
  }
  .contentField:first-child {
    margin-left: 0;
  }
  .contentField:last-child {
    margin-right: 0;
  }
`;
