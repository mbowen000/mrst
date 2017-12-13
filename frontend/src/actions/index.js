import fetch from 'cross-fetch';
import { post, patch, delete as del, put } from 'axios';

export const FETCH_ROBOTS = 'FETCH_ROBOTS';
export const RECEIVE_ROBOTS = 'RECEIVE_ROBOTS';
export const ADD_VOTE = 'ADD_VOTE';
export const ADD_ROBOT = 'ADD_ROBOT';
export const SET_USER = 'SET_USER';
export const UPDATE_ROBOT = 'UPDATE_ROBOT';
export const DELETE_ROBOT = 'DELETE_ROBOT';

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

export function setUser(user) {
    return {
        type: SET_USER,
        user: user
    }
}

export function createUser(user) {
    return function(dispatch) {
        return fetch('http://localhost:10010/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(function(res) {
            dispatch(setUser(user));
        })
    }
}

export function login(user) {
    return function(dispatch) {
        return fetch("http://localhost:10010/users/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(function(res) {
            // set the current user details on state
        })
    }
}

export function newRobot(data) {
    return {
        type: ADD_ROBOT,
        robot: data
    }
}

export function updateRobot(data) {
    return {
        type: UPDATE_ROBOT,
        robot: data
    }
}

export function removeRobot(data) {
    return {
        type: DELETE_ROBOT,
        robot: data
    }
}

export function addVote(data) {
    return {
        type: ADD_VOTE,
        robot: data 
    }
}

export function addRobot(data) {
    return function(dispatch) {
        return post("http://localhost:10010/robots", data, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        }).then(function(res) {
            dispatch(newRobot(res.data));
        }).catch(function(err) {
            console.error(err);
        });
    }
}

export function editRobot(data) {
    return function(dispatch) {
        return patch("http://localhost:10010/robots", data, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        }).then(function(res) {
            dispatch(updateRobot(res.data));
        }).catch(function(err) {
            console.error(err);
        });
    }
}

export function deleteRobot(data) {
    return function(dispatch) {
        return del("http://localhost:10010/robots/" + data.id, {
            // 
        }).then(function(res) {
            dispatch(removeRobot(data));
        }).catch(function(err) {
            console.error(err);
        });
    }
}

export function castVote(data) {
    return function(dispatch) {
        return put("http://localhost:10010/robots/" + data.id, {
            // 
        }).then(function(res) {
            dispatch(addVote(data));
        }).catch(function(err) {
            console.error(err);
        });
    }
}