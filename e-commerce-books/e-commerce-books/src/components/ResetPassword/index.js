import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPassword,
  resetAllAuthForms,
} from "./../../redux/User/user.actions";
import { withRouter } from "react-router-dom";

import "./styles.scss";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordError: user.resetPasswordError,
});
const ResetPassword = (props) => {
  //const mapState = { email };

  const dispatch = useDispatch();
  const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetAllAuthForms());
      props.history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

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
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(ResetPassword);
