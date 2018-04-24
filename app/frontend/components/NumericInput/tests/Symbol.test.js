/**
 * Tests for Symbol styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Symbol from '../Symbol';

describe('<Symbol />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Symbol />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Symbol />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Symbol id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Symbol attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
