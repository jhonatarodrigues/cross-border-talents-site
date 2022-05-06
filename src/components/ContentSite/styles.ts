import styled from 'styled-components';

import Default from '../../default';

// -- images

export const Container = styled.div`
  background: ${Default.color.blue};
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  * {
    display: flex;
    font-family: 'Epilogue', sans-serif;
  }
`;
export const ContentPage = styled.div`
  flex-direction: column;
`;
