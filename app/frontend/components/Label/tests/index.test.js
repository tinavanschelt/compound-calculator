/**
 * Tests for Label
 */

import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../../theme';

import Label from '../index';

describe('<Label />', () => {
  const renderComponent = (props = {}) =>
    shallow(<Label theme={theme} {...props} />);

  it('should render a <label> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('label');
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = renderComponent({ id });
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = renderComponent({ attribute: 'test' });
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
