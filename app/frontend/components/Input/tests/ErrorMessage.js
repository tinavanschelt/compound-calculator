/**
 * Tests for InputErrorMessage
 */

import React from 'react';
import { mount } from 'enzyme';

import InputErrorMessage from '../ErrorMessage';
import ErrorWrapper from '../ErrorWrapper';

const children = 'This is an error message!';
const renderComponent = (props = {}) =>
  mount(<InputErrorMessage {...props}>{children}</InputErrorMessage>);

describe('<InputErrorMessage />', () => {
  it('should render wrapper around text', () => {
    const renderedComponent = renderComponent({});
    expect(renderedComponent.contains(<ErrorWrapper />)).toEqual(true);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
