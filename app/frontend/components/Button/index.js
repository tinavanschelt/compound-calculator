/**
 * Button (Component)
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from '../A';

import { ButtonSolid, ButtonOutline, ButtonTransparent } from './StyledButton';
import Wrapper from './Wrapper';

function Button(props) {
  const buttonProps = {
    color: props.color,
    fill: props.fill,
    margin: props.margin,
    onClick: props.onClick,
    round: props.round,
    size: props.size
  };

  if (props.submit) {
    buttonProps.type = 'submit';
  }

  let button;

  if (props.outline) {
    button = (
      <ButtonOutline {...buttonProps}>
        {Children.toArray(props.children)}
      </ButtonOutline>
    );
  } else if (props.transparent) {
    button = (
      <ButtonTransparent {...buttonProps}>
        {Children.toArray(props.children)}
      </ButtonTransparent>
    );
  } else {
    button = (
      <ButtonSolid {...buttonProps}>
        {Children.toArray(props.children)}
      </ButtonSolid>
    );
  }

  if (props.href) {
    button = <A href={props.href}>{button}</A>;
  }

  return (
    <Wrapper size={props.size} margin={props.margin} fill={props.fill}>
      {button}
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fill: PropTypes.string,
  // can't use boolean at this stage, throws error in console
  // see github issue: https://github.com/styled-components/styled-components/issues/1198
  // handleRoute: PropTypes.func,
  href: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.string,
  submit: PropTypes.bool,
  transparent: PropTypes.bool
};

Button.defaultProps = {
  fill: 'false'
};

export default Button;
