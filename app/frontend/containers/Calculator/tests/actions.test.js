/**
 * Tests for Calculator Actions
 */

import {
  SET_CALCULATED_DATA,
  SET_CONVERTED_DATA,
  setCalculatedData,
  setConvertedData
} from '../actions';

describe('Calculator Actions', () => {
  const data = [
    { month: 0, totalAmount: 100 },
    { month: 1, totalAmount: 110 },
    { month: 2, totalAmount: 120 }
  ];

  describe('setCalculatedData', () => {
    it('should return the correct type and the data', () => {
      const expectedResult = {
        type: SET_CALCULATED_DATA,
        data
      };

      expect(setCalculatedData(data)).toEqual(expectedResult);
    });
  });

  describe('setConvertedData', () => {
    it('should return the correct type and the data', () => {
      const expectedResult = {
        type: SET_CONVERTED_DATA,
        data
      };

      expect(setConvertedData(data)).toEqual(expectedResult);
    });
  });
});
