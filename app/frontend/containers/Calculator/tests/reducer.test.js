/**
 * Tests for Calculator Reducer
 */

import { fromJS } from 'immutable';

import calculatorReducer from '../reducer';
import { setCalculatedData, setConvertedData } from '../actions';

describe('calculatorReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      calculatedData: [],
      convertedData: []
    });
  });

  const data = [
    { month: 0, total: 100 },
    { month: 1, total: 110 },
    { month: 2, total: 120 }
  ];

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(calculatorReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the setCalculatedData action correctly', () => {
    const expectedResult = state.set('calculatedData', data);

    expect(calculatorReducer(state, setCalculatedData(data))).toEqual(
      expectedResult
    );
  });

  it('should handle the setConvertedData action correctly', () => {
    const expectedResult = state.set('convertedData', data);

    expect(calculatorReducer(state, setConvertedData(data))).toEqual(
      expectedResult
    );
  });
});
