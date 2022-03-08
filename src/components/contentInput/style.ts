import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 0.3125rem;

  .MuiTextField-root {
    margin: 0 0.4688rem;
  }
  .MuiTextField-root:first-child {
    margin-left: 0;
  }
  .MuiTextField-root:last-child {
    margin-right: 0;
  }
`;
