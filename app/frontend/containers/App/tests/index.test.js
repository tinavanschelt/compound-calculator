/**
 * Tests for App Container
 */

import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import App from '../index';

import configureStore from '../../../store';

describe('<App />', () => {
  const store = configureStore({});

  const renderedComponent = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it('should render a div', () => {
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
