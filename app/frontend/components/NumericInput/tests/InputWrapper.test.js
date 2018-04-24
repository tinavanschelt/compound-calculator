/**
 * Tests for InputWrapper styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import InputWrapper from '../InputWrapper';

describe('<InputWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<InputWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<InputWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<InputWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<InputWrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
