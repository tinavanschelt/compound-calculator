/**
 * Input Validation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from './LoadingIndicator';
import { IconGreen, IconRed } from './Icon';
import ValidationWrapper from './Wrapper';

class InputValidation extends Component {
  render() {
    let validation;
    const { loading, showValid, valid } = this.props;

    if (showValid) {
      if (!loading) {
        if (valid) {
          validation = <IconGreen className="fas fa-check-circle" />;
        } else {
          validation = <IconRed className="fas fa-exclamation-circle" />;
        }
      } else {
        validation = <LoadingIndicator />;
      }
    }

    return <ValidationWrapper>{validation}</ValidationWrapper>;
  }
}

InputValidation.propTypes = {
  loading: PropTypes.bool,
  valid: PropTypes.bool,
  showValid: PropTypes.bool
};

export default InputValidation;
