import React from 'react'
import axios from 'axios'

let initialState = {
    email: '',
    code: '',
    givenCode: '',
    password: '',
    password2: '',
    emailError: '',
    codeErrot: '',
    passwordError: '',
    password2Error: '',
    showEmail: true,
    showCode: false,
    showPassword: false,
    submitEmail: true,
    submitCode: false,
    submitPassword: false
}

export default class ForgotPassowrd extends React.Component {

    state = initialState;

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    validateEmail = () => {
        let emailError = "";
        if (!this.state.email.includes("@") || !this.state.email) {
            emailError = "Invalid email";
        }
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        return true;
    };

    validateCode = () => {
        let codeError = "";
        if (this.state.code != this.state.givenCode) {
            codeError = 'Please, write the code correctly!'
        }


        if (codeError) {
            this.setState({ codeError });
            return false;
        }
        return true;
    };

    validatePassword = () => {
        let passwordError = "";
        let password2Error = "";

        if ((this.state.password.length >= 10) || this.state.password.length <= 5) {
            passwordError = 'Password must be 6-10 caracters'
        }
        if (this.state.password2 !== this.state.password) {
            password2Error = 'Please rewrite the same password!'
            console.log(this.state)
        }
        if (passwordError || password2Error) {
            this.setState({ passwordError, password2Error });
            return false;
        }
        return true;
    };


    handleSubmit = event => {
        event.preventDefault();
        if (this.state.submitEmail) {
            const isValid = this.validateEmail();
            if (isValid) {

                let userData = {};
                userData.email = this.state.email;
                axios.post(`${process.env.REACT_APP_SOURCE_URL}/api/check/email`, userData)
                    .then(response => {
                        console.log('data', response)
                        // if (response.data.message) {
                        //     this.setState({ emailError: 'Please, register first!' })
                        //     console.log('data', response.data.message)
                        //     return;
                        // }
                        if (response.data.code) {
                            this.setState({ givenCode: response.data.code })
                            console.log('data', response.data.code)
                            this.setState({
                                showEmail: false,
                                showCode: true,
                                submitEmail: false,
                                submitCode: true
                            })
                        }
                    })
                    .catch(err => {
                        this.setState({ emailError: 'Please, register first!' })
                        console.log('passsss', this.state)
                    })

            }
            return
        }

        if (this.state.submitCode) {
            event.preventDefault();
            console.log(this.state)
            const isValid = this.validateCode()
            if (isValid) {
                this.setState({
                    showPassword: true,
                    showCode: false,
                    submitPassword: true
                })
                console.log(this.state)
            }
        }
        if (this.state.submitPassword)
            event.preventDefault();
        let isValid = this.validatePassword()
        if (isValid) {
            let userData = {};
            userData.password = this.state.password;
            userData.email = this.state.email;
            axios.post(`${process.env.REACT_APP_SOURCE_URL}/api/change/password`, userData)
                .then(response => {
                    console.log('data', response)
                })
        }

    }

    render() {
        return (<div className='forgot-password'><form  >
            {this.state.showEmail ? <div>
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
                </div>
            </div> : null}

            {this.state.showCode ?
                <div>
                    <input
                        name="code"
                        placeholder="Code"
                        value={this.state.code}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.codeError}
                    </div>
                </div> : null}

            {this.state.showPassword ?
                <form>
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
                    <div>
                        <input
                            type="password"
                            name="password2"
                            placeholder="Password2"
                            value={this.state.password2}
                            onChange={this.handleChange}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.password2Error}
                        </div>
                    </div></form> : null}

            <div className='submit-form'>
                <button className='submit-button' type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        </form></div>)
    }

};





