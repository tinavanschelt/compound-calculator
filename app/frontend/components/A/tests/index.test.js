/**
 * Tests for A (link) component
 */

import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../../theme';

import A from '../index';

const href = 'http://calculator.com/';
const children = <div>This is fake child content</div>;
const renderComponent = (props = {}) =>
  shallow(
    <A theme={theme} href={href} {...props}>
      {children}
    </A>
  );

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('a');
  });

  it('should have an href attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('href')).toEqual(href);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('a').hasClass(className)).toEqual(true);
  });

  it('should adopt a target attribute', () => {
    const target = '_blank';
    const renderedComponent = renderComponent({ target });
    expect(renderedComponent.prop('target')).toEqual(target);
  });

  it('should adopt a type attribute', () => {
    const type = 'text/html';
    const renderedComponent = renderComponent({ type });
    expect(renderedComponent.prop('type')).toEqual(type);
  });
});
