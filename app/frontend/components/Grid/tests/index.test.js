/**
 * Tests for Grid component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../index';

describe('<Grid />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Grid />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Grid />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Grid id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Grid attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
