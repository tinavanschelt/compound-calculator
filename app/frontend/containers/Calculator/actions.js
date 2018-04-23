/**
 * Calculator Actions
 */

export const SET_CALCULATED_DATA = 'SET_CALCULATED_DATA';

export function setCalculatedData(data) {
  return {
    type: SET_CALCULATED_DATA,
    data
  };
}
