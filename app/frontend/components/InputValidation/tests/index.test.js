import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import InputValidation from '../index';
import LoadingIndicator from '../LoadingIndicator';
import { IconGreen, IconRed } from '../Icon';

describe('<Icon />', () => {
  const renderComponent = (props = {}) =>
    mount(
      <ThemeProvider theme={theme}>
        <InputValidation {...props} />
      </ThemeProvider>
    );

  it('should render a green icon if valid', () => {
    const renderedComponent = renderComponent({ showValid: true, valid: true });
    expect(renderedComponent.find(IconGreen).length).toBe(1);
  });

  it('should render a red icon if valid', () => {
    const renderedComponent = renderComponent({
      showValid: true,
      valid: false
    });
    expect(renderedComponent.find(IconRed).length).toBe(1);
  });

  it('should render the loading indicator if loading', () => {
    const renderedComponent = renderComponent({
      showValid: true,
      loading: true
    });
    expect(renderedComponent.find(LoadingIndicator).length).toBe(1);
  });
});
