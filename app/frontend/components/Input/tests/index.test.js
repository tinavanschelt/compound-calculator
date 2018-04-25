/**
 * Tests for App Container
 */

import React from 'react';
import { mount } from 'enzyme';

import Input from '../index';
import InputValidation from '../../InputValidation';
// import InputErrorMessage from '../../InputErrorMessage';

const renderComponent = (props = {}) => mount(<Input {...props} />);

describe('<Input />', () => {
  const renderedComponent = renderComponent();

  it('should render <input> tag', () => {
    expect(renderedComponent.find('input').length).toEqual(1);
  });

  // it('should render the ErrorMessage component if there is an error', () => {
  //   const error = 'This is an error!';
  //   const renderedComponent = renderComponent({ error });
  //   expect(renderedComponent.contains(<StyledInput error />)).toEqual(true);
  // });

  it('should render the Validation component', () => {
    expect(renderedComponent.contains(<InputValidation />)).toEqual(true);
  });
});
