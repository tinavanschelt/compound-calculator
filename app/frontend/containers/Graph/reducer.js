/**
 * Graph Reducer
 */

import { fromJS } from 'immutable';
import {
  GET_CURRENCY_RATES,
  SET_CURRENCY,
  SET_CURRENCY_RATES
} from './actions';

const initialState = fromJS({
  currency: 'EURO',
  currencies: '',
  currencyRates: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_RATES:
      return state.set('currencies', action.currencies);
    case SET_CURRENCY:
      return state.set('currency', action.currency);
    case SET_CURRENCY_RATES:
      return state.set('currencyRates', action.rates);
    default:
      return state;
  }
};
