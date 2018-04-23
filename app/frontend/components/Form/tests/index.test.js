/**
 * Tests for Form styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Form from '../index';

describe('<Form />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(<Form />);
    expect(renderedComponent.type()).toEqual('form');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Form />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Form id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Form attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
