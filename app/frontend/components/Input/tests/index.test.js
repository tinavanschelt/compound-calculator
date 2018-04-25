/**
 * Tests for App Container
 */

import React from 'react';
import { mount } from 'enzyme';

import Input from '../index';
import InputValidation from '../../InputValidation';

const renderComponent = (props = {}) => mount(<Input {...props} />);

describe('<Input />', () => {
  const renderedComponent = renderComponent();

  it('should render <input> tag', () => {
    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should render the Validation component', () => {
    expect(renderedComponent.contains(<InputValidation />)).toEqual(true);
  });
});
