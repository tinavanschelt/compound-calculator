/**
 * StyledButton (styled-component)
 */

import styled from 'styled-components';
import * as base from './buttonStyles';

export const ButtonSolid = styled.button`
  ${base.Button};
  ${props => props.size && base[props.size]};
`;

export const ButtonOutline = ButtonSolid.extend`
  background-color: transparent;
  border: ${props =>
    props.color && `2px solid ${props.theme[`color${props.color}`].default}`};
  color: ${props =>
    props.color && `${props.theme[`color${props.color}`].default}`};

  &:hover {
    background-color: transparent;
    border: ${props =>
      props.color && `2px solid ${props.theme[`color${props.color}`].light}`};
    color: ${props =>
      props.color && `${props.theme[`color${props.color}`].light}`};
  }
`;
