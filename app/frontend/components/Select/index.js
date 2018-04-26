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
    // The Select component takes data as an Array, 2D Array or Object and outputs a fully populated Select element
    let { firstOption } = this.props;
    const { optionKey, optionValue } = this.props;
    let options;

    if (data) {
      // Render first option of select
      if (!firstOption) {
        firstOption = 'Please Select';
      }

      options = [[firstOption, 'default']];

      // Normalize supplied data to a two dimensional array
      // Check if data supplied is an array
      if (Array.isArray(data)) {
        // Check if data is an array or an object array
        if (typeof data[0] === 'object') {
          /* eslint-disable array-callback-return */
          data.map(option => {
            const key = option[optionKey];
            const val = option[optionValue];

            options.push([key, val]);
          });
          // else data is treated as a one dimensional array
        } else {
          data.map(option => {
            options.push([option, option]);
          });
        }
        // else data is treated as an object
      } else {
        Object.entries(data).forEach(([key, value]) => {
          options.push([key, value]);
        });
      }
    }

    return (
      <Wrapper className={this.props.className} label={this.props.label}>
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
                    <option key={option[0]} value={option[1]} selected>
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
  firstOption: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  optionKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Select;
