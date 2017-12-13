import React, { Component } from 'react';
import ProgressBar from './Progressbar';

class RobotResult extends Component {
    render() {
        return(
            <div class="robot result">
                <img class="robot-image-small" src={'http://localhost:10010/uploads/' + this.props.robot.imagePath} alt="Robot Name"/>
                <h2>{this.props.robot.votes}</h2>
                <ProgressBar progress={this.props.robot.votes/5 * 100}/>
            </div>
        )
    }
}

export default RobotResult;