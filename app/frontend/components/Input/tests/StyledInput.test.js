/**
 * Tests for StyledInput styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import StyledInput from '.. StyledInput';

describe('<StyledInput />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(<StyledInput />);
    expect(renderedComponent.type()).toEqual('input');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<StyledInput />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<StyledInput id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<StyledInput attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
