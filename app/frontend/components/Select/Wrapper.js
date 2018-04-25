/**
 * Wrapper (Styled Component)
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 50px;
  position: relative;
  width: 100%;

  &::after {
    content: '\\f107';
    color: ${props => props.theme.colorCharcoal};
    font-family: 'Font Awesome 5 Free';
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight: 900;
    line-height: 20px;
    position: absolute;
    right: 15px;
    top: ${props => (props.label ? '50px' : '30px')};
    z-index: 1;
  }
`;

export default Wrapper;
