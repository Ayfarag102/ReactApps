import React from "react";
import "./styles.scss";

const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="authWrapper">
      <div className="authWrapper__wrapper">
        {headline && <h2>{headline}</h2>}
        <div className="authWrapper__wrapper__children">
          {children && children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
