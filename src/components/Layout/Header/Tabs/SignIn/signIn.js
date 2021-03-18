import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './signIn.scss'
import axios from 'axios'

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
        axios.post('login', userData)
            .then(response => {
                // localStorage.setItem('token', response.data.token)
                this.props.getToken(response.data.token)
                console.log('dataaaaa', response)
                this.props.handleUserData();
            })
    }

    // localStorage.setItem('token', response.data.token)

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
                <button className='forgot-password-button' onClick={(e) => this.props.open(e)}>Forgot password?</button>
                <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
            </div>
        </form>
        </div >)

    }
}