import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPasswordStart,
  resetUserState,
} from "./../../redux/User/user.actions";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErrors: user.userErrors,
});
const ResetPassword = (props) => {
  //const mapState = { email };

  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userErrors } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(userErrors) && userErrors.length > 0) {
      setErrors(userErrors);
    }
  }, [userErrors]);

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

export default ResetPassword;
