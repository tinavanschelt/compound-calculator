/**
 * Tests for ErrorWrapper styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import ErrorWrapper from '../ErrorWrapper';

describe('<ErrorWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<ErrorWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ErrorWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ErrorWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ErrorWrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
