/**
 * Tests for StyledSelect styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../../theme';

import StyledSelect from '../StyledSelect';

describe('<StyledSelect />', () => {
  const renderComponent = (props = {}) =>
    shallow(<StyledSelect theme={theme} {...props} />);

  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('select');
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
