/**
 * Tests for Graph Actions
 */

import {
  GET_CURRENCY_RATES,
  SET_CURRENCY_RATES,
  getCurrencyRates,
  setCurrencyRates
} from '../actions';

describe('Graph Actions', () => {
  describe('getCurrencyRates', () => {
    it('should return the correct type and the data', () => {
      const currencies = 'USD,GBP,ZAR';

      const expectedResult = {
        type: GET_CURRENCY_RATES,
        currencies
      };

      expect(getCurrencyRates(currencies)).toEqual(expectedResult);
    });
  });

  describe('setCurrencyRates', () => {
    it('should return the correct type and the data', () => {
      const rates = {
        GBP: 0.876222,
        USD: 1.2213,
        ZAR: 15.062777
      };

      const expectedResult = {
        type: SET_CURRENCY_RATES,
        rates
      };

      expect(setCurrencyRates(rates)).toEqual(expectedResult);
    });
  });
});
