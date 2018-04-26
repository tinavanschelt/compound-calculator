/**
 * Input
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import LabelText from '../Label/LabelText';
import Input from '../Input';
import InputValidation from '../InputValidation';

import Symbol from './Symbol';
import InputInnerWrapper from './InputInnerWrapper';
import InputOuterWrapper from './InputOuterWrapper';

class NumericInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false,
      valid: false,
      showValid: false
    };
  }

  // Prevent user from entering alpha characters
  handleKeyDown(e, type, max) {
    this.setState({ showValid: true, loading: true });

    const inputLength = e.target.value.length;
    const maxIndex = parseInt(max, 10);

    const keyCode = e.which;
    const numeric = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]; // 0-9
    const allowedCodes = [8, 9, 13, 190]; // allow backspace, tab, enter and period

    if (maxIndex > 0 && inputLength === maxIndex) {
      if (allowedCodes.indexOf(keyCode) < 0) {
        e.preventDefault();
      }
    }

    if (numeric.indexOf(keyCode) < 0 && allowedCodes.indexOf(keyCode) < 0) {
      e.preventDefault();
    }
  }

  handleBlur(e) {
    const { value } = e.target;
    this.setState({ loading: false });

    const pattern = e.target.getAttribute('pattern');
    const regex = new RegExp(pattern);

    // If regex pattern was provided, test the pattern first
    if (pattern !== null) {
      if (this.validateInputPattern(value, regex)) {
        this.setState({ valid: true });
      } else {
        this.setState({ valid: false });
      }
      // else check the length of the input
    } else if (value.length > 0) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }

  /* eslint-disable class-methods-use-this */
  validateInputPattern(value, pattern) {
    return pattern.test(value);
  }

  render() {
    let symbolWidth = 'symbol-width-normal';

    if (this.props.symbol.length > 2) {
      symbolWidth = 'symbol-width-wide';
    }

    return (
      <Label
        onKeyDownCapture={e =>
          this.handleKeyDown(e, 'numeric', this.props.maxChars)
        }
        onBlurCapture={e => this.handleBlur(e)}
      >
        <LabelText>{this.props.label}</LabelText>

        <InputOuterWrapper>
          <InputInnerWrapper
            className={`symbol-align-${this.props.alignSymbol} ${symbolWidth}`}
          >
            <Symbol className="symbol">{this.props.symbol}</Symbol>
            <Input
              defaultValue={this.props.defaultValue}
              type="text"
              id={this.props.id}
              name={this.props.name}
              onChange={this.props.onChange}
              placeholder={this.props.placeholder}
              pattern={this.props.pattern}
              required={this.props.required}
            />
          </InputInnerWrapper>

          <InputValidation
            loading={this.state.loading}
            showValid={this.state.showValid}
            valid={this.state.valid}
          />
        </InputOuterWrapper>
      </Label>
    );
  }
}

NumericInput.propTypes = {
  alignSymbol: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  maxChars: PropTypes.number,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  symbol: PropTypes.string,
  required: PropTypes.bool
};

NumericInput.defaultProps = {
  aligntSymbol: 'left',
  defaultValue: '',
  id: '',
  label: '',
  maxChars: 0,
  name: '',
  pattern: '',
  placeholder: '',
  symbol: '',
  required: false
};

export default NumericInput;
