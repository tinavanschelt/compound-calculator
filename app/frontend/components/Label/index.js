/**
 * Input Label (styled-component)
 */

import styled from 'styled-components';

const StyledSelect = styled.label`
  color: ${props => props.theme.colorGray.default};
  display: inline-block;
  font-family: sans-serif;
  margin: 0.5em 0;
  min-height: 75px;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  width: 100%;

  .label-text {
    font-size: ${props => props.theme.fontSizeSmall};
    margin-bottom: 0.5em;
  }

  &.hidden {
    display: none;
  }
`;

export default StyledSelect;
