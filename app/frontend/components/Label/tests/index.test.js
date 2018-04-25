import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import Label from '../index';

describe('<Label />', () => {
  let renderedComponent = shallow(
    <ThemeProvider theme={theme}>
      <Label />
    </ThemeProvider>
  );

  it('should render a <label> tag', () => {
    expect(renderedComponent.type()).toEqual('label');
  });

  it('should have a className attribute', () => {
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    renderedComponent = shallow(
      <ThemeProvider theme={theme}>
        <Label id={id} />
      </ThemeProvider>
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    renderedComponent = shallow(
      <ThemeProvider theme={theme}>
        <Label attribute={'test'} />
      </ThemeProvider>
    );
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
