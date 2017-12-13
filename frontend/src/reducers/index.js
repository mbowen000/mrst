import { RECEIVE_ROBOTS, ADD_ROBOT, UPDATE_ROBOT, DELETE_ROBOT } from '../actions/index';

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
        case UPDATE_ROBOT:
            return Object.assign({}, state, {
                robots: state.robots.map(robot => {
                    return (robot.id === action.robot.id)
                        ? action.robot 
                        : robot
                })
            })
        case DELETE_ROBOT: 
            return Object.assign({}, state, {
                robots: state.robots.filter(robot => {
                    return robot.id !== action.robot.id
                })
            })
    }
}

export default robotsReducer;