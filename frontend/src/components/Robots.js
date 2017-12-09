import React, { Component } from 'react';
import robotPlaceholder from '../assets/robot-placeholder.png';

class Robots extends Component {
    render(props) {
        return (
            <section class="robots">
                <div class="robot">
                <img src={robotPlaceholder} alt="Robot Name"/>
                <h3>Robot Name</h3>
                <button class="button primary">Vote</button>
                </div>
                <div class="robot">
                <img src={robotPlaceholder} alt="Robot Name"/>
                <h3>Robot Name</h3>
                <button class="button primary" disabled="disabled">Vote</button>
                </div>
            </section>
        )
    }
}

export default Robots;