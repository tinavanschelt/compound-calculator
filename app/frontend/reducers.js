/**
 * Reducers
 */

import { combineReducers } from 'redux-immutable';

import calculator from './containers/Calculator/reducer';
import graph from './containers/Graph/reducer';

const reducers = combineReducers({
  calculator,
  graph
});

export default reducers;
