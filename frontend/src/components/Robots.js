import React, { Component } from 'react';
import Robot from './Robot';
import AddRobot from './AddRobot';
import { fetchRobots} from '../actions/index';

class Robots extends Component {
    componentDidMount() {    
        const { dispatch } = this.props    
        dispatch(fetchRobots());
    }
    componentWillMount() {
        var self = this;
        this.unlisten = this.props.history.listen((location, action) => {
            this.props.dispatch(fetchRobots());
        });
    }
    componentWillUnmount() {
        this.unlisten();
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