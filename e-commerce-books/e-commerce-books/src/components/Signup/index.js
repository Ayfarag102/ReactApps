import React, { Component } from "react";
import "./styles.scss";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import AuthWrapper from "./../AuthWrapper";
import { auth, handleUserProfile } from "../../firebase/utils";

const initState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ["Passwords don't match"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });
      this.setState({
        ...initState,
      });
    } catch (err) {
      // console.log(err);
    }
  };

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const configAuthWrapper = {
      headline: "Registration",
    };
    //  destructure from state
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="signup__wrapper__formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
            </ul>
          )}
          <form onSubmit={this.handleFormSubmit}>
            {/* {displayName} */}
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <div className="signin__wrapper__formWrap__emailSignUp">
              <div className="row">
                <Button type="submit">Register</Button>
              </div>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default Signup;
