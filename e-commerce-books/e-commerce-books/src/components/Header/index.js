import React from "react";
import "./styles.scss";
import Logo from "../../assets/MXS_Books_logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="MXS Books Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
