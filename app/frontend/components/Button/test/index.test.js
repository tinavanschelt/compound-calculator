/**
 * Tests for Button component
 */

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import Button from '../index';

const href = 'http://calculator.com/';
const text = 'This is fake child content';
const renderComponent = (props = {}) =>
  mount(
    <ThemeProvider theme={theme}>
      <Button {...props}>{text}</Button>
    </ThemeProvider>
  );

describe('<Button />', () => {
  it('should render type submit if submit is true', () => {
    const renderedComponent = renderComponent({ submit: true });
    expect(renderedComponent.find('button').prop('type')).toBe('submit');
  });

  it('should render an <a> tag if href is specified', () => {
    const renderedComponent = renderComponent({ href });
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render <button> tag if href is not specified', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').prop('className')).toBeDefined();
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
