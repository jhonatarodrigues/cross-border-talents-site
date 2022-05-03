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
  }
`;
export const ContentPage = styled.div`
  flex-direction: column;
`;
