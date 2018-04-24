/**
 * Tests for App Container
 */

import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '../index';
import StyledInput from '../StyledInput';
import InputValidation from '../../components/InputValidation';
import InputErrorMessage from '../../components/InputErrorMessage';

const renderComponent = (props = {}) =>
  mount(<Input {...props}>{children}</Input>);

describe('<Input />', () => {
  const renderedComponent = shallow(<Input />);

  it('should render the StyledInput component', () => {
    expect(renderedComponent.contains(<StyledInput />)).toEqual(true);
  });

  it('should render the ErrorMessage component if there is and error', () => {
    const error = 'This is an error!';
    const renderedComponent = renderComponent({ error });
    expect(renderedComponent.contains(<StyledInput error />)).toEqual(true);
  });

  it('should render the Validation component', () => {
    expect(renderedComponent.contains(<StyledInput />)).toEqual(true);
  });
});
