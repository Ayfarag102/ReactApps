import { auth } from "./../../firebase/utils";

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: "http://localhost:3000/login",
  };
  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
        // props.history.push("/login");
      })
      .catch(() => {
        const errs = ["Email not found! \n Please try again"];
        reject(errs);

        // setErrors(errs);
      });
  });
};
