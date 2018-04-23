/**
 * Symbol
 */

import styled from 'styled-components';

const Symbol = styled.div`
  font-size: ${props => props.theme.fontSizeLarge};
  font-weight: ${props => props.theme.fontWeightSans};
  line-height: 50px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export default Symbol;
