/**
 * Tests for NumericInput
 */

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import Input from '../../Input';
import InputValidation from '../../InputValidation';
import Label from '../../Label';
import NumericInput from '../index';
import Symbol from '../Symbol';

describe('<NumericInput />', () => {
  const renderComponent = (props = {}) =>
    mount(
      <ThemeProvider theme={theme}>
        <NumericInput theme={theme} {...props} />
      </ThemeProvider>
    );

  it('should render a Label', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Label).length).toEqual(1);
  });

  it('should render a Symbol', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Symbol).length).toEqual(1);
  });

  it('should render a Input', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Input).length).toEqual(1);
  });

  it('should render a InputValidation', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(InputValidation).length).toEqual(1);
  });
});
