import React from 'react';
import { shallow } from 'enzyme';

import LoadingDot from '../LoadingDot';

describe('<LoadingDot />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(<LoadingDot />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<LoadingDot />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<LoadingDot id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<LoadingDot attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
