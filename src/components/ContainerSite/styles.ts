import styled from 'styled-components';

// -- images
interface IRow {
  row?: boolean;
}
export const Container = styled.div<IRow>`
  width: 75rem;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
`;

export const BaseContent = styled.div`
  width: 100%;
  justify-content: center;
`;
