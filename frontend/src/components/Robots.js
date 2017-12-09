import React, { Component } from 'react';
import Robot from './Robot';

class Robots extends Component {
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