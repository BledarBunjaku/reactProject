import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './signIn.scss'
import ForgotPassowrd from './ForgotPassword/forgotPassword'
import axios from 'axios'
import Modal from 'react-modal'

// Modal.setAppElement('#root')

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    isOpenModal: false
};

export default class SignIn extends React.Component {

    state = initialState;


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate = () => {

        let emailError = "";
        let passwordError = "";

        if (!this.state.password) {
            passwordError = "Password cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Invalid email";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };

    getUserData = () => {
        const userData = {};
        userData.email = this.state.email;
        userData.password = this.state.password;
        axios.post('http://e056a6dd73cc.ngrok.io/api/login', userData)
            .then(response => {
                console.log('data', response)
            })
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
            this.getUserData();
            console.log('passsss', this.state)
        }
    };

    setModal = (e) => {
        e.preventDefault();
        const newObj = this.state;
        newObj.isOpenModal = true
        this.setState({ ...newObj })
    }

    render() {
        return (<div><form  >
            <div>
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
                </div>
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.passwordError}
                </div>
            </div>
            <div className='submit-form'>
                <button className='forgot-password-button' onClick={this.setModal}>Forgot password?</button>
                <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
            </div>
        </form>
            <Modal isOpen={this.state.isOpenModal} onRequestClose={() => this.setState({ isOpenModal: false })}>
                <button onClick={() => { this.setState({ isOpenModal: false }) }} >X</button>
                <ForgotPassowrd />
            </Modal></div>)
    }
}