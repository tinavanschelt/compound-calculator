/**
 * Tests for Graph Container
 */

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { LineChart } from 'recharts';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import Graph, { mapDispatchToProps } from '../index';
import { setCurrency, getCurrencyRates } from '../actions';

import configureStore from '../../../store';

const currency = 'ZAR';
const rates = {
  GBP: 0.876222,
  USD: 1.2213,
  ZAR: 15.062777
};
const data = [
  { month: 0, total: 100 },
  { month: 1, total: 110 },
  { month: 2, total: 120 }
];

describe('<Calculator />', () => {
  const store = configureStore({});

  const renderComponent = (props = {}) =>
    mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Graph {...props} />
        </ThemeProvider>
      </Provider>
    );

  it('should render a LineChart if data is defined', () => {
    const renderedComponent = renderComponent({ data });
    expect(renderedComponent.find(LineChart).length).toEqual(1);
  });

  it('should not render a LineChart if data is empty', () => {
    const renderedComponent = renderComponent({ data: {} });
    expect(renderedComponent.find(LineChart).length).toEqual(0);
  });

  it('should render a select if currencyRates is defined', () => {
    const renderedComponent = renderComponent({ data, currencyRates: rates });
    expect(renderedComponent.find('select').length).toEqual(1);
  });
});

describe('mapDispatchToProps', () => {
  describe('onSetCurrency', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSetCurrency).toBeDefined();
    });

    it('should dispatch setCurrency when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSetCurrency(currency);
      expect(dispatch).toHaveBeenCalledWith(setCurrency(currency));
    });
  });

  describe('onGetCurrencyRates', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onGetCurrencyRates).toBeDefined();
    });

    it('should dispatch GetCurrencyRates when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onGetCurrencyRates(rates);
      expect(dispatch).toHaveBeenCalledWith(getCurrencyRates(rates));
    });
  });
});
