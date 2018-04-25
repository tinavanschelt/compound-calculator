/**
 * Tests for App Container
 */

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import App from '../index';
import Calculator from '../../Calculator';
import Graph from '../../Graph';

import configureStore from '../../../store';

describe('<App />', () => {
  const store = configureStore({});

  const renderedComponent = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );

  it('should render the Calculator component', () => {
    expect(renderedComponent.find(Calculator).length).toEqual(1);
  });

  it('should render the Graph component', () => {
    expect(renderedComponent.find(Graph).length).toEqual(1);
  });
});
