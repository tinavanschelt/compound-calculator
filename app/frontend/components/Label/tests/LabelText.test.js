import React from 'react';
import { shallow } from 'enzyme';

import LabelText from '../index';

describe('<LabelText />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<LabelText />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<LabelText />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<LabelText id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<LabelText attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
