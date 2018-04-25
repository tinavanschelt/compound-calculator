/**
 * Tests for Graph Reducer
 */

import { fromJS } from 'immutable';

import graphReducer from '../reducer';
import { getCurrencyRates, setCurrencyRates } from '../actions';

describe('graphReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      currency: 'EURO',
      currencies: '',
      currencyRates: {}
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(graphReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getCurrencyRates action correctly', () => {
    const currencies = 'USD,GBP,ZAR';
    const expectedResult = state.set('currencies', currencies);

    expect(graphReducer(state, getCurrencyRates(currencies))).toEqual(
      expectedResult
    );
  });

  it('should handle the setCurrencyRates action correctly', () => {
    const rates = {
      GBP: 0.876222,
      USD: 1.2213,
      ZAR: 15.062777
    };
    const expectedResult = state.set('currencyRates', rates);

    expect(graphReducer(state, setCurrencyRates(rates))).toEqual(
      expectedResult
    );
  });
});
