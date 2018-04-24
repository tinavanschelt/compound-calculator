/**
 * StyledA (styled-component)
 */

import styled from 'styled-components';
import * as base from './buttonStyles';

export const StyledASolid = styled.a`
  ${base.Button};
  ${props => props.size && base[props.size]};
`;

export const StyledAOutline = StyledASolid.extend`
  background-color: transparent;
  border: border: ${props =>
    props.color
      ? `2px solid ${props.theme[`color${props.color}`].default}`
      : `2px solid ${props.theme.colorGray.default}`};
  color: ${props =>
    props.color
      ? `props.theme.color${props.color}.default`
      : props.theme.colorGray.default};

  &:hover {
    background-color: transparent;
    border: border: ${props =>
      props.color
        ? `2px solid ${props.theme[`color${props.color}`].tint}`
        : `2px solid ${props.theme.colorGray.tint}`};
    color: ${props =>
      props.color
        ? `props.theme.color${props.color}.tint`
        : props.theme.colorGray.tint};
  }
`;

export const StyledATransparent = StyledASolid.extend`
  background-color: transparent;
  border: 2px solid transparent;
  color: ${props =>
    props.color
      ? `props.theme.color${props.color}.default`
      : props.theme.colorGray.default};

  &:hover {
    background-color: transparent;
    border: 2px solid transparent;
    color: ${props =>
      props.color
        ? `props.theme.color${props.color}.tint`
        : props.theme.colorGray.tint};
  }
`;
