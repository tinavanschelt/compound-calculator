/**
 * Grid (Components)
 */

import styled from 'styled-components';

const GridItem = styled.div`
  ${props => props.textAlign && `text-align: ${props.textAlign};`};
  ${props => props.padding && `padding: ${props.padding};`};

  &.flex {
    display: flex;
    flex-direction: column;

    &.flex-start {
      justify-content: flex-start;
    }

    &.flex-center {
      justify-content: center;
    }

    &.flex-end {
      justify-content: flex-end;
    }
  }

  @media (min-width: ${props => props.theme.breakpointSmall}) {
    ${props => props.row && `grid-row: row ${props.row};`};
    ${props => props.col && `grid-column: col ${props.col};`};
  }
`;

export default GridItem;
