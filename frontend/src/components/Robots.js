import React, { Component } from 'react';
import Robot from './Robot';
import AddRobot from './AddRobot';
import { fetchRobots} from '../actions/index';

class Robots extends Component {
    componentDidMount() {    
        const { dispatch } = this.props    
        dispatch(fetchRobots());
    }
    render() {
        return (
            <section className="robots">
                {this.props.robots.map(robot => (
                    <Robot key={robot.id} {...robot} />
                ))}
            </section>
        )
    }
}

export default Robots;