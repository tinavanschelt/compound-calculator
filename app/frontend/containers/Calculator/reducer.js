/**
 * Calculator Reducer
 */

import { fromJS } from 'immutable';
import { SET_CALCULATED_DATA, SET_CONVERTED_DATA } from './actions';

const initialState = fromJS({
  calculatedData: [],
  convertedData: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CALCULATED_DATA:
      return state.set('calculatedData', action.data);
    case SET_CONVERTED_DATA:
      return state.set('convertedData', action.data);
    default:
      return state;
  }
};
