/**
 * ButtonStyles
 */

import { css } from 'styled-components';

export const Button = css`
  background: ${props =>
    props.color
      ? `${props.theme[`color${props.color}`].default}`
      : props.theme.colorGray.default};
  border: ${props =>
    props.color
      ? `2px solid ${props.theme[`color${props.color}`].default}`
      : `2px solid ${props.theme.colorGray.default}`};
  border-radius: ${props => props.theme.borderRadius};
  box-sizing: border-box;
  color: ${props => props.theme.colorWhite};
  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.theme.fontFamilySans};
  font-size: ${props => props.theme.fontSizeLarge};
  font-weight: ${props => props.theme.fontWeightSansBold};
  height: 50px;
  letter-spacing: 0.05em;
  line-height: 46px;
  outline: 0;
  text-align: ${props => (props.align ? props.align : 'center')};
  text-decoration: none;
  text-transform: uppercase;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};

  &:hover {
    background-color: ${props =>
      props.color
        ? `${props.theme[`color${props.color}`].light}`
        : props.theme.colorGray.tint};
    border: ${props =>
      props.color
        ? `2px solid ${props.theme[`color${props.color}`].light}`
        : `2px solid ${props.theme.colorGray.tint}`};
    color: ${props => props.theme.colorWhite};
  }
`;

export const large = css`
  font-size: ${props => props.theme.fontSizePlus};
  height: 50px;
  line-height: 46px;
  padding: 0 3em;
`;

export const tiny = css`
  font-size: ${props => props.theme.fontSizeSmall};
  height: 30px;
  line-height: 26px;
  padding: 0 1em;
`;
