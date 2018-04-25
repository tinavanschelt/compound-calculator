/**
 * Tests for InputErrorMessage
 */

import React from 'react';
import { mount } from 'enzyme';

import InputErrorMessage from '../index';
import Wrapper from '../Wrapper';

const children = 'This is an error message!';
const renderComponent = (props = {}) =>
  mount(<InputErrorMessage {...props}>{children}</InputErrorMessage>);

describe('<InputErrorMessage />', () => {
  it('should render wrapper around text', () => {
    const renderedComponent = renderComponent({});
    expect(renderedComponent.contains(<Wrapper />)).toEqual(true);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
