/**
 * Tests for Grid styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import GridItem from '../index';

describe('<GridItem />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<GridItem />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<GridItem />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<GridItem id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<GridItem attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
