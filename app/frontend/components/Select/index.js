/**
 * Select (Component)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import StyledSelect from './StyledSelect';
import Wrapper from './Wrapper';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = props.selected
      ? { value: props.selected }
      : { value: props.default };
  }

  componentWillReceiveProps({ selected }) {
    this.setState({ value: selected });
  }

  render() {
    const { data } = this.props;
    let { firstOption } = this.props;
    let options;

    if (data) {
      // render first option of select
      if (!firstOption) {
        firstOption = 'Please Select';
      }

      options = [[firstOption, 'default']];

      // Normalize supplied data as an two dimensional array
      // Check if data supplied is an array
      if (Array.isArray(data)) {
        // Check if array or an object array
        if (typeof data[0] === 'object') {
          // set firstOption (if specified)
          data.map(option => {
            const key = option[this.props.optionKey];
            const val = option[this.props.optionValue];

            options.push([key, val]);
          });
          // else it is treated as a one dimensional array
        } else {
          data.map(option => {
            options.push([option, option]);
          });
        }
        // else it is treated as an object
      } else {
        Object.entries(data).forEach(([key, value]) => {
          options.push([key, value]);
        });
      }
    }

    return (
      <Wrapper
        className={this.props.className}
        style={this.props.style}
        label={this.props.label}
      >
        <Label>
          {this.props.label}
          <StyledSelect
            value={this.state.value}
            onChange={this.props.onChange}
            id={this.props.id}
          >
            {options &&
              options.map(option => {
                // First check for selected value
                if (option[1] === this.props.selected) {
                  return (
                    <option key={option[0]} value={option[1]}>
                      {option[0]}
                    </option>
                  );
                }

                return (
                  <option key={option[0]} value={option[1]}>
                    {option[0]}
                  </option>
                );
              })}
          </StyledSelect>
        </Label>
      </Wrapper>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  default: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  firstOption: PropTypes.string
};

export default Select;
