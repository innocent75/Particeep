import React from "react";
import logo from "../images/logo.png";
import "./header.css";

function Header() {
  return (
    <a className="container-logo" href="/">
      <img src={logo} alt="Logo" />
    </a>
  );
}
export default Header;
