/**
 * Graph Selectors
 */

import { createSelector } from 'reselect';

const selectGraph = state => state.get('graph');

const makeSelectCurrencies = () =>
  createSelector(selectGraph, state => state.get('currencies'));

/* eslint-disable import/prefer-default-export */
export { makeSelectCurrencies };
