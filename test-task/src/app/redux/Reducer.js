import * as ActionTypes from './ActionTypes';

let initialState = {
  propertyDetails: null,
  financingDetails: null,
};

const Reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROPERTY_DETAILS: {
      return {
        ...state,
        propertyDetails: action.payload,
      };
    }
    case ActionTypes.ADD_FINANCING_DETAILS: {
      return {
        ...state,
        financingDetails: action.payload,
      };
    }
    case ActionTypes.RESET_DETAILS: {
      return {
        state: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
