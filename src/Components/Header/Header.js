import React from "react";
import "./Header.css";
import logo from "../../logo.png";

function Header() {
  return (
    <div>
      <Header className="header">
        <img src={logo} alt="header-logo" className="header-logo" />
      </Header>
    </div>
  );
}

export default Header;
