/**
 * Input
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledInput from './StyledInput';

class Input extends Component {
  render() {
    return (
      <StyledInput
        defaultValue={this.props.defaultValue}
        id={this.props.id}
        name={this.props.name}
        type={this.props.type}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        required={this.props.required}
      />
    );
  }
}

Input.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  id: '',
  label: '',
  name: '',
  placeholder: '',
  required: false
};

export default Input;
