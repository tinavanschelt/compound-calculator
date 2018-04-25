/**
 * Graph Selectors
 */

import { createSelector } from 'reselect';

const selectGraph = state => state.get('graph');

const makeSelectCurrencies = () =>
  createSelector(selectGraph, state => state.get('currencies'));

export default { makeSelectCurrencies };
