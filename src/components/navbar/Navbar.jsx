import React from "react";

import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="techberg">
        <span>Tech</span>Berg
      </div>
      <div className="navbar-links">
        <p>
          <Link to={`/`}>Home</Link>
        </p>
        <p>
          <a href="#trends">Trends</a>
        </p>
        <p>
          <a href="#marketing">Marketing</a>
        </p>
        <p>
          <Link to={`/gadgets`}>Gadgets</Link>
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
