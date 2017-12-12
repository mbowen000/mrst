import { RECEIVE_ROBOTS, ADD_ROBOT } from '../actions/index';

const initialState = {
    robots: []
}

function robotsReducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_ROBOTS: 
            return Object.assign({}, state, {
                robots: Object.assign([], action.robots)
            });
        default:
            return state;
        case ADD_ROBOT: 
            return Object.assign({}, state, {
                robots: [...state.robots, action.robot]
            })
    }
}

export default robotsReducer;