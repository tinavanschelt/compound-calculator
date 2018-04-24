/**
 * Tests for Button component
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../index';
import { ButtonSolid, ButtonOutline, ButtonTransparent } from '../StyledButton';

const handleRoute = () => {};
const href = 'http://calculator.com/';
const children = <div>This is fake child content</div>;
const renderComponent = (props = {}) =>
  mount(<Button {...props}>{children}</Button>);

describe('<Button />', () => {
  it('should render solid button as default', () => {
    const renderedComponent = renderComponent({});
    expect(renderedComponent.contains(<ButtonSolid />)).toEqual(true);
  });

  it('should render outline button if specified', () => {
    const renderedComponent = renderComponent({ outline: true });
    expect(renderedComponent.contains(<ButtonOutline />)).toEqual(true);
  });

  it('should render transparent button if specified', () => {
    const renderedComponent = renderComponent({ transparent: true });
    expect(renderedComponent.contains(<ButtonTransparent />)).toEqual(true);
  });

  it('should render type submit if submit is true', () => {
    const renderedComponent = renderComponent({ submit: true });
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render an <a> tag if href is specified', () => {
    const renderedComponent = renderComponent({ href: href });
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render <button> tag if href is not specified', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').prop('className')).toBeDefined();
  });

  it('should not adopt a type attribute when rendering an <a> tag', () => {
    const type = 'text/html';
    const renderedComponent = renderComponent({ href, type });
    expect(renderedComponent.find('a').prop('type')).toBeUndefined();
  });

  it('should not adopt a type attribute when submit is false', () => {
    const renderedComponent = renderComponent({ submit: false });
    expect(renderedComponent.find('button').prop('type')).toBeUndefined();
  });
});
