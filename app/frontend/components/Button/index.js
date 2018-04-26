/**
 * Button
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from '../A';

import { ButtonSolid, ButtonOutline } from './StyledButton';
import Wrapper from './Wrapper';

function Button(props) {
  const buttonProps = {
    color: props.color,
    fill: props.fill,
    margin: props.margin,
    onClick: props.onClick,
    size: props.size
  };

  if (props.submit) {
    // Used with forms
    buttonProps.type = 'submit';
  }

  let button;

  // Occassionaly you want links to look / act like buttons
  // This allows you to render an outlined, solid or transparent button (or link) by simple adding a prop
  // Useful in a larger design system

  if (props.outline) {
    button = (
      <ButtonOutline {...buttonProps}>
        {Children.toArray(props.children)}
      </ButtonOutline>
    );
  } else {
    button = (
      <ButtonSolid {...buttonProps}>
        {Children.toArray(props.children)}
      </ButtonSolid>
    );
  }

  if (props.href.length > 0) {
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
  href: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.string,
  submit: PropTypes.bool
};

Button.defaultProps = {
  color: 'Gray',
  fill: 'false',
  href: '',
  margin: '1em 0',
  outline: false,
  submit: false
};

export default Button;
