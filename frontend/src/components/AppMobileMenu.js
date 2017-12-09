import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class AppMobileMenu extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.props.onClose();
    }
    render(props) {
        if(this.props.show) {
            return (
                <div className="App-Mobile-Menu">    
                {this.props.show}
                    <div className="Close-Menu" onClick={this.toggleNav}>✖</div>
                    <h1><NavLink onClick={this.toggleNav} to="/" activeClassName="active" exact>Robots</NavLink></h1>
                    <h1><NavLink onClick={this.toggleNav} to="/results" activeClassName="active">Results</NavLink></h1>
                    <h3>Admin</h3>
                    <h3>Logout</h3>
                </div>
            );
        }
        return null;
    }
}

export default AppMobileMenu;