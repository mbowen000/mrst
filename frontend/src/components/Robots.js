import React, { Component } from 'react';
import Robot from './Robot';
import AddRobot from './AddRobot';

class Robots extends Component {
    render() {
        return (
            <section className="robots">
                {this.props.robots.map(robot => (
                    <Robot key={robot.id} {...robot} />
                ))}
                <AddRobot/>
            </section>
        )
    }
}

export default Robots;