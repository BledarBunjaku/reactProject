import React from "react";
import './register.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { noAuto } from "@fortawesome/fontawesome-svg-core";


const initialState = {

  email: "",
  givenCode: '',
  password: "",
  password2: "",
  emailError: "",
  codeError: '',
  passwordError: "",
  passwordError2: "",
  showEmail: true,
  showCode: false,
  submitEmail: true,
  submitCode: false,

};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validateEmail = () => {
    let emailError = "";
    let passwordError = "";
    let passwordError2 = "";

    // if (!this.state.name) {
    //   nameError = "Name cannot be blank";
    // }
    // if (!this.state.lastname) {
    //   lastnameError = "Last name cannot be blank";
    // }
    // if (!this.state.username) {
    //   usernameError = "User name cannot be blank";
    // }
    if ((this.state.password.length >= 10) || this.state.password.length <= 5) {
      passwordError = 'Password must be 6-10 caracters'
    }
    if (this.state.password !== this.state.password2) {
      passwordError2 = 'Type the same password'
    }
    // 

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (emailError || passwordError || passwordError2) {
      this.setState({ emailError, passwordError, passwordError2 });
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
      this.setState({ codeError: codeError });
      return false;
    }
    return true;
  };



  // http://32eb01a07b33.ngrok.io/api/register/email


  //     (emailin me dergu, dhe me rujt me password)

  // axios.post(`http://32eb01a07b33.ngrok.io/api/register/email`, userData)
  //   .then(response => {
  //     console.log('data', response)
  //   })

  //   (emailin dhe passin me dergu);
  // axios.post(`http://32eb01a07b33.ngrok.io/api/register`, userData)
  //   .then(response => {
  //     console.log('data', response)
  //   })



  // http://32eb01a07b33.ngrok.io/api/register




  handleSubmit = event => {
    event.preventDefault();
    //   console.log('data', this.state)
    if (this.state.submitEmail) {
      const isValid = this.validateEmail();
      if (isValid) {


        let userData = {};
        userData.email = this.state.email;
        axios.post(`http://127.0.0.1:8000/api/register/email`, userData)
          .then(response => {

            // if (response.data.message) {
            //   this.setState({ emailError: 'Please, register first!' })
            //   console.log('data', response.data.message)
            //   return;
            // }

            if (response.data.code) {
              this.setState({
                givenCode: response.data.code,
                showEmail: false,
                showCode: true,
                submitEmail: false,
                submitCode: true
              })
            }
          })
          .catch(err => {
            this.setState({ emailError: err.response.data.error })

          })

      }
      return
    }

    if (this.state.submitCode) {
      event.preventDefault();
      // console.log(this.state)
      const isValid = this.validateCode()
      if (isValid) {
        let userData = {};
        userData.email = this.state.email;
        userData.password = this.state.password;
        axios.post(`http://127.0.0.1:8000/api/register`, userData)
          .then(response => {
            //       console.log('code-correct-response', response)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem('email', response.data.email)
          })

      }

    }
  }



  /* 
    getUserData = () => {
  
      const userData = {};
      userData.email = this.state.email;
      userData.password = this.state.password
  
      axios.post(`http://127.0.0.1:8000/api/register`, userData)
        .then(response => {
          console.log('data', response)
        })
    } */

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const isValid = this.validate();
  //   if (isValid) {
  //     console.log(this.state);
  //     // clear form
  //     this.setState(initialState);
  //     this.getUserData();
  //   }
  // };

  render() {
    // this.getUserData();
    return (
      <div className='register'>
        <form >
          {/* <div>
          <label>First Name:</label>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div> */}
          {/* <div>
          <label>Last Name:</label>
          <input
            name="lastname"
            placeholder="Last name"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.lastnameError}
          </div>
        </div> */}
          {/* <div>
          <input
            name="username"
            placeholder="User name"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.usernameError}
          </div>
        </div> */}
          {this.state.showEmail ?
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
            </div> : null}
          {/* <div>
          <input
            type='date'
            name="birthday"
            placeholder="Date of birth"
            value={this.state.birthday}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div> */}
          {this.state.showEmail ?
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
            </div> : null}
          {this.state.showEmail ?
            <div>
              <input
                type="password"
                name="password2"
                placeholder="Password"
                value={this.state.password2}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.passwordError2}
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
          <button className='submit-button' type="submit" onClick={this.handleSubmit} >Submit</button>
        </form></div>
    );
  }
}
