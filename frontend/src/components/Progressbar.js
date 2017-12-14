import React, {Component} from 'react';
import '../styles/Progressbar.css';

class ProgressBar extends Component {
    render() {
        return(
            <div className="progressbar">
                <div className="progress" style={{width: this.props.progress + '%'}}/>
            </div>
        )
    }
}

export default ProgressBar;