import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../../theme';

import { Icon } from '../Icon';

describe('<Icon />', () => {
  const renderComponent = (props = {}) =>
    shallow(<Icon theme={theme} {...props} />);

  it('should render a <i> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('i');
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = renderComponent({ id });
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = renderComponent({ attribute: 'test' });
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
