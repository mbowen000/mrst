import { RECEIVE_ROBOTS } from '../actions/index';

const initialState = {
    robots: []
}

function robotsReducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_ROBOTS: 
            return Object.assign({}, {
                robots: Object.assign([], action.robots)
            });
        default:
            return state;
    }
}

export default robotsReducer;