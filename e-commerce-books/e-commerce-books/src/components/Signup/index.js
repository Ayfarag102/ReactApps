import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, resetAllAuthForms } from "./../../redux/User/user.actions";
import "./styles.scss";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import AuthWrapper from "./../AuthWrapper";

const mapState = ({ user }) => ({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.signUpError,
});
const Signup = (props) => {
  const { signUpSuccess, signupError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (signUpSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push("/");
    }
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signupError) && signupError.length > 0) {
      setErrors(signupError);
    }
  }, [signupError]);

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUpUser({
        displayName,
        email,
        password,
        confirmPassword,
      })
    );
  };

  const configAuthWrapper = {
    headline: "Registration",
  };
  //  destructure from state

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
        <form onSubmit={handleFormSubmit}>
          {/* {displayName} */}
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            handleChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
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
};

export default withRouter(Signup);
