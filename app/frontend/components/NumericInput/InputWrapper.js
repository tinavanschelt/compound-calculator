/**
 * Wrapper
 */

import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &.symbol-align-left {
    .symbol {
      left: 0.75em;
      text-align: left;
    }

    input {
      padding-left: 30px;
    }
  }

  &.symbol-align-right {
    .symbol {
      right: 0.75em;
      text-align: right;
    }
  }

  &.symbol-width-normal {
    .symbol {
      width: 30px;
    }

    &.symbol-align-left {
      input {
        padding-left: 30px;
      }
    }

    &.symbol-align-right {
      input {
        padding-right: 30px;
      }
    }
  }

  &.symbol-width-wide {
    .symbol {
      font-size: ${props => props.theme.fontSizeSmall};
      width: 65px;
    }

    &.symbol-align-left {
      input {
        padding-left: 65px;
      }
    }

    &.symbol-align-right {
      input {
        padding-right: 65px;
      }
    }
  }

  input {
    left: 0;
    position: absolute;
    top: 0;
  }
`;

export default InputWrapper;
