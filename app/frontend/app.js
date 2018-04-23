/**
 * This is the entry file for the application
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// Import CSS reset and global styles
import './global-styles';

import configureStore from './store';
const store = configureStore();

import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
