import { fromJS } from 'immutable';

import calculatorReducer from '../reducer';
import { setCalculatedData, setConvertedData } from '../actions';

describe('calculatorReducer', () => {
  let state;
  const data = [
    { month: 0, totalAmount: 100 },
    { month: 1, totalAmount: 110 },
    { month: 2, totalAmount: 120 }
  ];

  beforeEach(() => {
    state = fromJS({
      calculatedData: '',
      convertedData: {}
    });
  });

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
