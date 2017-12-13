import React from 'react';
import RobotResult from './RobotResult';

class Results extends React.Component {
    render(props) {
        return (
            <section className="robots">
                {this.props.robots.map(robot => (
                    <RobotResult className="robot-result" robot={robot}/>
                ))}
            </section>
        )
    }
}

export default Results;