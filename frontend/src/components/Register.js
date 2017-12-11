import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/index';
import '../styles/Register.css';
import '../styles/Forms.css';
import '../styles/Buttons.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(createUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }));
    }
    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    render() {
        return(
            <div className="register-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label>Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" onChange={this.handleInputChange}/>
                    </div>
 
                    <div className="form-input">
                        <label>Email</label>
                        <input type="text" id="email" name="email" placeholder="jane.smith@email.com" onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-input">
                        <label>Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleInputChange} />
                    </div>

                    <button className="button primary">Submit</button>
                </form>
            </div>
        )
    }
}

Register = connect()(Register);

export default Register;