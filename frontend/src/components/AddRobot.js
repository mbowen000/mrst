import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Forms.css';
import { addRobot } from '../actions/index';

class AddRobot extends Component {
    constructor(props) {
        super(props);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleFileUpload(event) {
        this.setState({file: event.target.files[0]});
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('name', this.state.name);
        this.props.dispatch(addRobot(formData));
    }
    render() {
        return(
            <div className="robot">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label>Robot Name</label>
                        <input type="text" onChange={this.handleChangeName}/>
                    </div>
                    <div className="form-input">
                        <label>Robot Image</label>
                        <input type="file" onChange={this.handleFileUpload}/>
                    </div>
                    <button className="button primary">Add Robot</button>
                </form>
            </div>
        )
    }
}

AddRobot = connect()(AddRobot)

export default AddRobot;