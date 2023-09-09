import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="techberg">
        <span>Tech</span>Berg
      </div>
      <div className="navbar-links">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#trends">Trends</a>
        </p>
        <p>
          <a href="#marketing">Marketing</a>
        </p>
        <p>
          <a href="#gadgets">Gadgets</a>
        </p>
      </div>
      <div className="navbar-sign">
        <p>Signin</p>
        <p>SignUp</p>
      </div>
    </div>
  );
};

export default Navbar;
