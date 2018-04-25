/**
 * Graph Sagas
 */

import { put, select, call, takeEvery, fork } from 'redux-saga/effects';
import request from '../../utils/request';

import { GET_CURRENCY_RATES, setCurrencyRates } from './actions';
import { makeSelectCurrencies } from './selectors';

const FIXER_API_KEY = 'd10974c1c8630828a728e65750ae0636';

export function* fetchCurrencyRates() {
  const currencies = yield select(makeSelectCurrencies());
  const requestUrl = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}&symbols=${currencies}`;

  // Update API
  try {
    const { rates } = yield call(request, requestUrl);

    // add Euros to the provided rates as -1 and set rates in the redux store
    // (using a negative value to ensure that it is unique)
    if (rates) {
      rates.EU = -1;
      yield put(setCurrencyRates(rates));
    }
  } catch (error) {
    /* eslint-disable no-console */
    console.log('Could not fetch currency rates', error);
  }
}

// Watchers
export function* watchGetCurrencyRates() {
  yield takeEvery(GET_CURRENCY_RATES, fetchCurrencyRates);
}

// Graph Sagas
export const graphSagas = [fork(watchGetCurrencyRates)];
