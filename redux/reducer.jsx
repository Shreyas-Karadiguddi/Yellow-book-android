import * as actions from './actions';

const INITIAL_VALUES = {
  token: null,
  role: null,
};

const globalStates = (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case actions.TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actions.SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default globalStates;
