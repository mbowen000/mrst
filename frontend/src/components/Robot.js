import React from 'react';
import robotPlaceholder from '../assets/robot-placeholder.png';

const Robot = ({name, imagePath}) => (
    <div className="robot">
        <img src={'http://localhost:10010/uploads/' + imagePath} alt="Robot Name"/>
        <h3>{name}</h3>
        <button className="button primary">Vote</button>
    </div>
)

export default Robot;