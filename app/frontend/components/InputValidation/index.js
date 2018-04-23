/**
 * Input Validation
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from './LoadingIndicator';
import { Icon, IconGreen, IconRed } from './Icon';
import Wrapper from './Wrapper';

class InputValidation extends Component {
  render() {
    let validation;

    if (this.props.showValid) {
      if (this.props.loading) {
        validation = <LoadingIndicator />;
      } else {
        if (this.props.valid) {
          validation = (
            <Wrapper>
              <IconGreen className="fas fa-check-circle" />
            </Wrapper>
          );
        } else {
          validation = (
            <Wrapper>
              <IconRed className="fas fa-exclamation-circle" />
            </Wrapper>
          );
        }
      }
    }

    return <div>{validation}</div>;
  }
}

InputValidation.propTypes = {
  loading: PropTypes.bool,
  valid: PropTypes.bool,
  showValid: PropTypes.bool
};

export default InputValidation;
