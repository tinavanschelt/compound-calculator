/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.colorGreen.light};

  &:hover {
    color: ${props => props.theme.colorGreen.tint};
  }
`;

export default A;
