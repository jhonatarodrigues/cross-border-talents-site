import styled from 'styled-components';
import { Mobile } from '../../styles/responsiveVariables';

// -- images
interface IRow {
  row?: boolean;
}
export const Container = styled.div<IRow>`
  width: 75rem;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  position: relative;
  ${Mobile(`
    width: 100%;
  `)}
`;

export const BaseContent = styled.div`
  width: 100%;
  justify-content: center;
`;
