import React, {Component} from 'react';
import robotPlaceholder from '../assets/robot-placeholder.png';
import {connect} from 'react-redux';
import {castVote} from '../actions/index';

class Robot extends Component {
    constructor(props) {
        super(props);
        this.handleVote = this.handleVote.bind(this);
        this.state = {
            voteCast: false
        }
    }
    render(props) {
        return(
            <div className="robot">
                <img src={'http://localhost:10010/uploads/' + this.props.imagePath} alt="Robot Name"/>
                <h3>{this.props.name}</h3>
                <button className="button primary" onClick={this.handleVote} disabled={this.state.voteCast}>{this.state.voteCast ? 'Vote Cast' : 'Vote'}</button>
            </div>
        )   
    }
    handleVote(event) {
        var self = this;
        this.props.dispatch(castVote(this.props)).then(function() {
            self.setState({
                voteCast: true // make sure the user cant click again
            });
        });
    }
}

Robot = connect()(Robot);

export default Robot;