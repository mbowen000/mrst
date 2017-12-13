import React, { Component } from 'react';
import RobotAdmin from './RobotAdmin';
import AddRobot from './AddRobot';

class Admin extends Component {
    render() {
        return (
            <section className="robots">
                {this.props.robots.map(robot => (
                    <RobotAdmin key={robot.id} {...robot} />
                ))}
                <AddRobot/>
            </section>
        )
    }
}

export default Admin;