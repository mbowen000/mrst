import React from 'react';
import robotPlaceholder from '../assets/robot-placeholder.png';

const Robot = ({name}) => (
    <div className="robot">
        <img src={robotPlaceholder} alt="Robot Name"/>
        <h3>{name}</h3>
        <button className="button primary">Vote</button>
    </div>
)

export default Robot;