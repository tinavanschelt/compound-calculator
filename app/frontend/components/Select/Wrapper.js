/**
 * Wrapper (Styled Component)
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 50px;
  position: relative;
  width: 100%;

  &::after {
    content: '\\f078';
    color: ${props => props.theme.colorCharcoal};
    font-family: 'FontAwesome';
    font-size: ${props => props.theme.fontSizeReg};
    font-weight: 500;
    line-height: 20px;
    position: absolute;
    right: 15px;
    top: ${props => (props.label ? '50px' : '30px')};
    z-index: 1;
  }
`;

export default Wrapper;
