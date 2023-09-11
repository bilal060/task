import * as ActionTypes from './ActionTypes';

export const addPropertyDetails = (data) => {
  return {
    type: ActionTypes.ADD_PROPERTY_DETAILS,
    payload: data,
  };
};
export const addFinancingDetails = (data) => {
  return {
    type: ActionTypes.ADD_FINANCING_DETAILS,
    payload: data,
  };
};
export const resetDetails = () => {
  return {
    type: ActionTypes.RESET_DETAILS,
  };
};
