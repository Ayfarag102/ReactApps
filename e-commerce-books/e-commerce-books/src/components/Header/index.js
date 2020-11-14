import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Logo from "../../assets/MXS_Books_logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="MXS Books Logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to={"/registration"}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
