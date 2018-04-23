/**
 * Graph Actions
 */

export const GET_CURRENCY_RATES = 'GET_CURRENCY_RATES';
export const SET_CURRENCY_RATES = 'SET_CURRENCY_RATES';

export function getCurrencyRates(currencies) {
  return {
    type: GET_CURRENCY_RATES,
    currencies
  };
}

export function setCurrencyRates(rates) {
  return {
    type: SET_CURRENCY_RATES,
    rates
  };
}
