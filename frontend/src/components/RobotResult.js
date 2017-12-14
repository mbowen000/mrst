import React, { Component } from 'react';
import ProgressBar from './Progressbar';

class RobotResult extends Component {
    render() {
        return(
            <div className="robot result">
                <div class="inner">
                    <img className="robot-image-small" src={'http://localhost:10010/uploads/' + this.props.robot.imagePath} alt={this.props.robot.name}/>
                    <h2>{this.props.robot.votes}</h2>
                    <ProgressBar progress={this.props.robot.votes/5 * 100}/>
                </div>
            </div>
        )
    }
}

export default RobotResult;