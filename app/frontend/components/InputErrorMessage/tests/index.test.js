/**
 * Tests for InputErrorMessage
 */

import React from 'react';
import { shallow } from 'enzyme';

import InputErrorMessage from '../index';
import Wrapper from '../Wrapper';

const text = 'This is an error message!';
const renderComponent = (props = {}) =>
  shallow(<InputErrorMessage {...props} />);

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
