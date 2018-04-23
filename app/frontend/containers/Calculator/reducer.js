/**
 * Calculator Reducer
 */

import { fromJS } from 'immutable';
import { SET_CALCULATED_DATA } from './actions';

const initialState = fromJS({
  calculatedData: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CALCULATED_DATA:
      return state.set('calculatedData', action.data);
    default:
      return state;
  }
};
