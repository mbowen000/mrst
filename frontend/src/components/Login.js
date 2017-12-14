import React from 'react';
import { connect } from 'react-redux';
import { login, fetchRobots } from '../actions/index';
import '../styles/Register.css';
import '../styles/Forms.css';
import '../styles/Buttons.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(event) {
        var self = this;
        event.preventDefault();
        if(this.state.email && this.state.password) {
            this.props.dispatch(login({
                email: this.state.email,
                password: this.state.password
            })).then(function() {
                self.props.history.replace('/');
            });
        }     
        else {
            toast('Please fill out the required fields', {type: toast.TYPE.ERROR})
        }
    }
    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    render() {
        return(
            <div className="login-container">
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
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

                    <p className="nav-link">
                        Need an account? <Link className="red" to="/register">Sign Up.</Link>
                    </p>
                </div>
                
            </div>
        )
    }
}

Login = connect()(Login);

export default Login;