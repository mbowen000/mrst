import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import RobotsList, { RobotsListAdmin, RobotsListResults } from '../containers/RobotsList';

class EnsureLoggedInContainer extends Component {
    componentDidMount() {
        const { dispatch, currentURL } = this.props
    
        if (!this.props.token) {
          // set the current url/path for future redirection (we use a Redux action)
          // then redirect (we use a React Router method)
          this.props.history.replace("/login")
        }
      }
    
      render() {
        if (this.props.token) {
          return(
            <span>
                <Route exact path="/" component={RobotsList}/>
                <Route path="/results" component={RobotsListResults}/>
                <Route path="/admin" component={RobotsListAdmin}/>
            </span>
          )
        } else {
          return null
        }
      }
}

function mapStateToProps(state, ownProps) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer);