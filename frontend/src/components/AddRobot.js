import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Forms.css';
import { addRobot, editRobot } from '../actions/index';

class AddRobot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robot: props.robot || {
                name: ''
            },
            editMode: props.editMode
        }
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleFileUpload(event) {
        this.setState({ 
            robot: Object.assign({}, this.state.robot, {
                file: event.target.files[0]
            })
        });
    }
    handleChangeName(event) {
        this.setState({
            robot: Object.assign({}, this.state.robot, {
                name: event.target.value
            })
        });
    }
    handleSubmit(event) {
        var self = this;
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.robot.file);
        formData.append('name', this.state.robot.name);
        if(this.state.robot.id) {
            formData.append('id', this.state.robot.id); // put it on the form-params
            this.props.dispatch(editRobot(formData)).then(function(robot) {
                self.props.onEditComplete();
            });
        } 
        else {
            this.props.dispatch(addRobot(formData));            
        }
    }
    render() {
        return(
            <div className="robot">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label>Robot Name</label>
                        <input type="text" value={this.state.robot.name} onChange={this.handleChangeName}/>
                    </div>
                    <div className="form-input">
                        <label>Robot Image</label>
                        <input type="file" onChange={this.handleFileUpload}/>
                    </div>
                    <button className="button primary">{this.state.robot.id ? 'Save Robot' : 'Add Robot'}</button>
                </form>
            </div>
        )
    }
}

AddRobot = connect()(AddRobot)

export default AddRobot;