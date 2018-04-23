/**
 * Input
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Validation from '../InputValidation';
import Label from '../Label';
import LabelText from '../Label/LabelText';
import Input from '../Input';

import Symbol from './Symbol';
import InputWrapper from './InputWrapper';

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

  handleBlur(e, type) {
    const value = e.target.value;
    this.setState({ loading: false });

    const pattern = e.target.getAttribute('pattern');
    const regex = new RegExp(pattern);

    if (pattern !== null) {
      if (this.validateInputPattern(value, regex)) {
        this.setState({ valid: true });
      } else {
        this.setState({ valid: false });
      }
    } else if (value.length > 0) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }

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

        <InputWrapper
          className={`symbol-align-${this.props.alignSymbol} ${symbolWidth}`}
        >
          <Symbol className="symbol ">{this.props.symbol}</Symbol>
          <Input
            border={this.props.border}
            defaultValue={this.props.defaultValue}
            error={this.state.error}
            type="text"
            inputType="numeric"
            id={this.props.id}
            loading={this.state.loading}
            name={this.props.name}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            pattern={this.props.pattern}
            required={this.props.required}
            showValid={this.state.showValid}
            valid={this.state.valid}
          />
        </InputWrapper>
      </Label>
    );
  }
}

NumericInput.propTypes = {
  border: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  maxChars: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  symbol: PropTypes.string,
  required: PropTypes.bool
};

NumericInput.defaultProps = {
  label: '',
  maxChars: '0'
};

export default NumericInput;
