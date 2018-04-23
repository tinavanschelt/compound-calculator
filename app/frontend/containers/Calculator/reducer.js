/**
 * Calculator Reducer
 */

import { fromJS } from 'immutable';
import {
  SET_CALCULATED_DATA,
  GET_CURRENCY_RATES,
  SET_CURRENCY_RATES
} from './actions';

const initialState = fromJS({
  calculatedData: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CALCULATED_DATA:
      return state.set('calculatedData', action.data);
    case GET_CURRENCY_RATES:
      return state.set('currencies', action.currencies);
    case SET_CURRENCY_RATES:
      return state.set('currencyRates', action.rates);
    default:
      return state;
  }
};
