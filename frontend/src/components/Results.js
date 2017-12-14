import React from 'react';
import RobotResult from './RobotResult';

class Results extends React.Component {
    render(props) {
        return (
            <section className="robots results">
               
                {this.props.robots.map(robot => (
                    <RobotResult key={robot.id} className="robot-result" robot={robot}/>
                ))}
        
            </section>
        )
    }
}

export default Results;