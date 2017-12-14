import React, {Component} from 'react';
import robotPlaceholder from '../assets/robot-placeholder.png';
import AddRobot from './AddRobot';
import { deleteRobot as delRobot } from '../actions/index';
import { connect } from 'react-redux';

class RobotAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.deleteRobot = this.deleteRobot.bind(this);
    }
    render(props) {
        const imageUrl = 'http://localhost:10010/uploads/' + this.props.imagePath;
        
        if(!this.state.editMode) {      
            return (
            <div className="robot">
                <div className="inner">
                    <div className="img" style={{backgroundImage: `url(${imageUrl}`}}/>
                    <h3>{this.props.name}</h3>
                    <button className="button" onClick={this.toggleEditMode}>Edit</button>
                    <button className="button primary" onClick={this.deleteRobot}>Delete</button>  
                </div>      
            </div>
            )
        }
        else {
            return (
                <AddRobot robot={this.props} onEditComplete={this.toggleEditMode}/>
            )
        }
    }
    toggleEditMode(event) {
        this.setState({
            editMode: !this.state.editMode
        });
    }
    deleteRobot(event) {
        this.props.dispatch(delRobot(this.props));
    }
    
}

RobotAdmin = connect()(RobotAdmin)

export default RobotAdmin;