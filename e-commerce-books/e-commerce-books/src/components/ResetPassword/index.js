import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import { auth } from "../../firebase/utils";

const initState = {
  email: "",
  errors: [],
};

class ResetPassword extends Component {
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

    try {
      const { email } = this.state;
      const config = {
        url: "http://localhost:3000/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const errs = ["Email not found! \n Please try again"];
          this.setState({
            errors: errs,
          });
        });
    } catch (err) {
      // console.log(err);
    }
  };
  render() {
    const { email, errors } = this.state;
    const configAuthWrapper = {
      headline: "Reset Password",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrapper">
          {errors.length > 0 && (
            <ul>
              {errors.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          )}
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Reset Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(ResetPassword);
