import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from '../Icon';

describe('<Icon />', () => {
  it('should render a <i> tag', () => {
    const renderedComponent = shallow(<Icon />);
    expect(renderedComponent.type()).toEqual('i');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Icon />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Icon id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Icon attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
