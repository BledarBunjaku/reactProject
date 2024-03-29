import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './signIn.scss'
import axios from 'axios'
import { connect } from 'react-redux'
// import { useHistory as historyy } from 'react-router-dom'


const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    errorMessage: ''
};

// const history = historyy();

class SignIn extends React.Component {



    state = initialState;

    handleChange = event => {
        const datas = event.target.name;
        let values = event.target.value;
        this.setState({ [event.target.name]: event.target.value })
        this.props.dispatch({ type: "HANDLECHANGE", data: datas, value: values })
    };

    validate = () => {

        let emailError = "";
        let passwordError = "";

        if (!this.props.state.password) {
            passwordError = "Password cannot be blank";
        }

        if (!this.props.state.email.includes("@")) {
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
        userData.email = this.props.state.email;
        userData.password = this.props.state.password;

        axios.post(`http://localhost:8000/api/login`, userData)
            .then(response => {

                // !response.data.token ? localStorage.setItem('token', response.data.token):null
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('email', response.data.email)
                }
                this.props.getToken(response.data.token)
                this.props.showModal()
            }).catch(error => (
                this.setState({ errorMessage: error.response.data.message })
            ))
    }



    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.getUserData();
            this.setState(initialState);



            // history.push("/");
        }

    };

    render() {


        return (<div><form >
            <div>
                <input
                    name="email"
                    placeholder="Email"
                    value={this.props.state.email}
                    onChange={this.handleChange}
                />
                {this.props.state.emailError != '' ? <div style={{ fontSize: 12, color: "red" }}>
                    {this.props.state.emailError}
                </div> : null}
                {this.state.errorMessage != '' ? <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.errorMessage}
                </div> : null}


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
                <button className='submit-button' onClick={this.handleSubmit} >Submit</button>
            </div>
        </form>
        </div >)

    }
}

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps)(SignIn)