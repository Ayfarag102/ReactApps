import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "./../../redux/User/user.actions";
import { Link, useHistory } from "react-router-dom";

import "./styles.scss";
import Buttons from "./../forms/Button";
import FormInput from "./../forms/FormInput";
//import { signInWithGoogle } from "./../../firebase/utils";
import AuthWrapper from "./../AuthWrapper";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      //dispatch(resetAllAuthForms());
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    dispatch(googleSignInStart());
  };
  const configAuthWrapper = {
    headline: "Login",
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="signin__wrapper__formWrap">
        <form onSubmit={handleSubmit}>
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
          <Buttons type="submit">Login</Buttons>
          <div className="signin__wrapper__formWrap__socialSignIn">
            <div className="row">
              <Buttons onClick={handleGoogleSignIn}>
                Sign in with Google
              </Buttons>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
