import * as actions from './actions';

const INITIAL_VALUES = {};

const globalStates = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case "Test":
            return
        default:
            return state;
    }
};

export default globalStates;
