import React from "react";
import style from './register.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = {
  fName: "",
  lName: "",
  userName: "",
  email: "",
  password: "",
  password2: "",
  nameError: "",
  userNameError: "",
  lNameError: "",
  emailError: "",
  passwordError: "",
  passwordError2: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let fNameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordError2 = "";
    let lNameError = '';
    let userNameError = "";

    if (!this.state.fName) {
      fNameError = "name cannot be blank";
    }

    if (!this.state.lName) {
      lNameError = "name cannot be blank";
    }

    if (!this.state.userName) {
      userNameError = "name cannot be blank";
    }
    // if (this.state.password.length <= 5) {
    //   passwordError = 'password must be 6-10 caracters'
    //   console.log('passsss', this.state.password.length)
    // }
    if ((this.state.password.length >= 10) || this.state.password.length <= 5) {
      passwordError = 'password must be 6-10 caracters'

    }

    if (this.state.password !== this.state.password2) {
      passwordError2 = 'Type the same password'
    }

    // 

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || fNameError || passwordError || lNameError || userNameError || passwordError2) {
      this.setState({ emailError, fNameError, passwordError, lNameError, userNameError, passwordError2 });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      console.log('passsss', this.state.password.length)

    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            name="fName"
            placeholder="First name"
            value={this.state.fName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.fNameError}
          </div>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            name="lName"
            placeholder="Last name"
            value={this.state.lName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.lNameError}
          </div>
        </div>
        <div>
          <input
            name="userName"
            placeholder="User name"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.userNameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
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
            placeholder="password"
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
            placeholder="password2"
            value={this.state.password2}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError2}
          </div>
        </div>
        <button className='btn-primary' type="submit">submit</button>
      </form>
    );
  }
}