/**
 * Wrapper
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: salmon;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0 0 ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius};
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  height: 50px;
  line-height: 54px;
  padding: 0 0.75em;
  width: 100%;

  &:before {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid salmon;
    content: '';
    height: 0;
    margin: -5px 0 0 5px;
    position: absolute;
    width: 0;
  }
`;

export default Wrapper;
