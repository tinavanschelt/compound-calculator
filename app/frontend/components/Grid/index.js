/**
 * Grid
 */

import styled from 'styled-components';

function colWidth(columns, gap) {
  let margin = gap;

  if (margin === undefined) {
    margin = 2;
  }

  const totalMargin = margin * columns - margin;
  return `${(100 - totalMargin) / columns}% `;
}

const Container = styled.div`
  display: grid;
  grid-gap: ${props => (props.gap ? `${props.gap}%` : '2%')};
  ${props => props.columns && 'grid-template-columns: 1fr;'};
  margin: ${props => (props.margin ? `${props.margin}` : '0')};
  width: 100%;

  @media (min-width: ${props => props.theme.breakpointSmall}) {
    ${props =>
      props.columns &&
      `grid-template-columns: repeat(${props.columns}, [col] ${colWidth(
        props.columns,
        props.gap
      )});`};
    ${props => props.custom && `grid-template-columns: ${props.custom};`};
  }
`;

export default Container;
