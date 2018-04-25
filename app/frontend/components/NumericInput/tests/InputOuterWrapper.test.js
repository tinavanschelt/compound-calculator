/**
 * Tests for InputOuterWrapper styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import InputOuterWrapper from '../InputOuterWrapper';

describe('<InputOuterWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<InputOuterWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<InputOuterWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<InputOuterWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<InputOuterWrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
