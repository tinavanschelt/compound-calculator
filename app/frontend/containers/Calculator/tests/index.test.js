/**
 * Tests for Calculator Container
 */

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

import Calculator, { mapDispatchToProps } from '../index';
import { setCalculatedData, setConvertedData } from '../actions';

import configureStore from '../../../store';

const data = [
  { month: 0, total: 100 },
  { month: 1, total: 110 },
  { month: 2, total: 120 }
];

describe('<Calculator />', () => {
  const store = configureStore({});

  const renderedComponent = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Calculator />
      </ThemeProvider>
    </Provider>
  );

  it('should render a form tag', () => {
    expect(renderedComponent.find('form').length).toEqual(1);
  });

  it('should render the input tags', () => {
    expect(renderedComponent.find('input').length).toEqual(4);
  });

  it('should have a submit button', () => {
    expect(renderedComponent.find('button').prop('type')).toBe('submit');
  });
});

describe('mapDispatchToProps', () => {
  describe('onSetCalculatedData', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSetCalculatedData).toBeDefined();
    });

    it('should dispatch setCalculatedData when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSetCalculatedData(data);
      expect(dispatch).toHaveBeenCalledWith(setCalculatedData(data));
    });
  });

  describe('onSetConvertedData', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSetConvertedData).toBeDefined();
    });

    it('should dispatch setConvertedData when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSetConvertedData(data);
      expect(dispatch).toHaveBeenCalledWith(setConvertedData(data));
    });
  });
});
