/**
 * Select / StyledSelect (Styled Component)
 */

import styled from 'styled-components';

const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  box-sizing: border-box;
  color: ${props => props.theme.colorCharcoal};
  cursor: pointer;
  border: 1px solid ${props => props.theme.colorGray.default};
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.fontSizeLarge};
  margin: 0.5em 0;
  min-height: 50px;
  padding: 8px;
  width: 100%;
  z-index: 2;

  &:focus {
    ${props => props.theme.fontSizeLarge};
  }
`;

export default StyledSelect;
