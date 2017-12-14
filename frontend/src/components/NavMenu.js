import React from 'react';
import {NavLink} from 'react-router-dom';
export default function(props) {
    return (
        <div className="inner-menu">
            <h1><NavLink onClick={props.onToggleNav} to="/" activeClassName="active" exact>Robots</NavLink></h1>
            <h1><NavLink onClick={props.onToggleNav} to="/results" activeClassName="active">Results</NavLink></h1>
            <h3><NavLink onClick={props.onToggleNav} to="/admin" activeClassName="active">Admin</NavLink></h3>
            <h3>Logout</h3>
        </div>
    )
}