import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import NavMenu from './NavMenu';

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
                    <NavMenu onToggleNav={this.toggleNav}/>
                </div>
            );
        }
        return null;
    }
}

export default AppMobileMenu;