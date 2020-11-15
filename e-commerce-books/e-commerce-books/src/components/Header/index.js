import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Logo from "../../assets/MXS_Books_logo.png";
import { auth } from "./../../firebase/utils";
const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="MXS Books Logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <a onClick={() => auth.signOut()}>Logout</a>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to={"/registration"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
