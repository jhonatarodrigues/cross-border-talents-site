import styled from 'styled-components';

import { Mobile } from '../../styles/responsiveVariables';

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

  ${Mobile(`
    flex-direction: column;
    .contentField{
        margin: 0 0 0.9375rem 0!important;
    }
  `)}
`;
