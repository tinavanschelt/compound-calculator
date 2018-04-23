/**
 * Calculator Actions
 */

export const SET_CALCULATED_DATA = 'SET_CALCULATED_DATA';
export const SET_CONVERTED_DATA = 'SET_CONVERTED_DATA';

export function setCalculatedData(data) {
  return {
    type: SET_CALCULATED_DATA,
    data
  };
}

export function setConvertedData(data) {
  return {
    type: SET_CONVERTED_DATA,
    data
  };
}
