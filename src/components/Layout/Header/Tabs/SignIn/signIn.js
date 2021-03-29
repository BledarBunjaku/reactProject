import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './signIn.scss'
import axios from 'axios'
import { connect } from 'react-redux'

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

class SignIn extends React.Component {

    state = initialState;

    handleChange = event => {

        const datas = event.target.name;
        let values = event.target.value;
        this.props.dispatch({ type: "HANDLECHANGE", data: datas, value: values })
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
            // this.setState({ emailError, passwordError });


            this.props.dispatch({ type: "ERROR_INPUT", emailError, passwordError })
            return false;
        }

        return true;
    };

    getUserData = () => {
        const userData = {};
        userData.email = this.state.email;
        userData.password = this.state.password;

        axios.post(`login`, userData)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.props.getToken(response.data.token)
                console.log('dataaaaaaaaaaaaaaaaaaaa', response.data.token)
                this.props.showModal()
            })
    }



    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
            this.getUserData();
        }
    };

    render() {

        console.log("emaillllllllllll", this.props.state.email)
        console.log("emaillllllllllll", this.props.state.password)
        console.log("passwordError", this.props.state.passwordError)
        console.log("passwordError", this.props.state.emailError)
        return (<div><form  >
            <div>
                <input
                    name="email"
                    placeholder="Email"
                    value={this.props.state.email}
                    onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.props.state.emailError}
                </div>
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.props.state.password}
                    onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.props.state.passwordError}
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

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps)(SignIn)