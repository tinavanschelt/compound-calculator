/**
 * Tests for Select
 */

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import Label from '../../Label';
import Select from '../index';
import StyledSelect from '../StyledSelect';

describe('<Select />', () => {
  const renderComponent = (props = {}) =>
    mount(
      <ThemeProvider theme={theme}>
        <Select theme={theme} {...props} />
      </ThemeProvider>
    );

  const data = ['One', 'Two', 'Three'];

  it('should render a Label', () => {
    const renderedComponent = renderComponent({ data });
    expect(renderedComponent.find(Label).length).toEqual(1);
  });

  it('should render a StyledSelect', () => {
    const renderedComponent = renderComponent({ data });
    expect(renderedComponent.find(StyledSelect).length).toEqual(1);
  });

  it('should have options when provided with data', () => {
    const renderedComponent = renderComponent({ data });
    expect(renderedComponent.find('option').length).toEqual(4);
  });
});
