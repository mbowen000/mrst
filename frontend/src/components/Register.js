import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/index';
import '../styles/Register.css';
import '../styles/Forms.css';
import '../styles/Buttons.css';
import { ToastContainer, toast } from 'react-toastify';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: '',
            email: '',
            password:''
        }
    }
    handleSubmit(event) {
        var self = this;
        event.preventDefault();
        if(this.state.name && this.state.email && this.state.password) {
            this.props.dispatch(createUser({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })).then(function() {
                toast('Cool! Now just login!', {type: toast.TYPE.SUCCESS});                
                self.props.history.push('/login');
            });
        }
        else {
            toast('Please fill out all fields.', {type: toast.TYPE.ERROR});
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
            </div>
        )
    }
}

Register = connect()(Register);

export default Register;