/**
 * Tests for InputInnerWrapper styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import InputInnerWrapper from '../InputInnerWrapper';

describe('<InputInnerWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<InputInnerWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<InputInnerWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<InputInnerWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<InputInnerWrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
