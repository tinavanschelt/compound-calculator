/**
 * Redux Store
 */

import { createStore, compose } from 'redux';
import { fromJS } from 'immutable';
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const enhancers = [];

  // Load redux dev tools on development
  const composeEnhancers =
    /* eslint-env browser */
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    reducers,
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
