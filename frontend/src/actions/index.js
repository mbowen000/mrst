import fetch from 'cross-fetch';

export const FETCH_ROBOTS = 'FETCH_ROBOTS';
export const RECEIVE_ROBOTS = 'RECEIVE_ROBOTS';
export const VOTE = 'VOTE';
export const ADD_ROBOT = 'ADD_ROBOT';

/* Creators */
export function receiveRobots(robots) {
    return {
        type: RECEIVE_ROBOTS,
        robots
    }
}

export function fetchRobots() {
    return function(dispatch) {
        return fetch('http://localhost:10010/robots').then(function(robots) {
            return robots.json().then(function(robots) {
                dispatch(receiveRobots(robots));
            });
        });
    }
}