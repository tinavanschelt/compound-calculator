/**
 * Reducers
 */

import { combineReducers } from 'redux-immutable';
import calculator from './containers/Calculator/reducer';

const reducers = combineReducers({
  calculator
});

export default reducers;
