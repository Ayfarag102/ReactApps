import React, { Component } from "react";
import "./styles.scss";
import Buttons from "./../forms/Button";
import FormInput from "./../forms/FormInput";
import { signInWithGoogle, auth } from "./../../firebase/utils";

const initState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initState,
      });
    } catch (error) {
      // console.log(err);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <div className="signin__wrapper">
          <h2>Login</h2>

          <div className="signin__wrapper__formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={this.handleChange}
              />
              <Buttons type="submit">Login</Buttons>
              <div className="signin__wrapper__formWrap__socialSignIn">
                <div className="row">
                  <Buttons onClick={signInWithGoogle}>
                    Sign in with Google
                  </Buttons>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
