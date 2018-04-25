/**
 * Styled Input
 */

import styled from 'styled-components';

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #cdcdcd;
  border-radius: ${props => props.theme.borderRadius};
  color: #808080;
  font-size: ${props => props.theme.fontSizeLarge};
  min-height: 50px;
  padding: 0.75em;
  width: 100%;

  &.error {
    border-bottom: 0;
    border-radius: ${props => props.theme.borderRadius}
      ${props => props.theme.borderRadius} 0 0;
  }

  &::placeholder {
    color: #cdcdcd;
  }
`;

export default StyledInput;
