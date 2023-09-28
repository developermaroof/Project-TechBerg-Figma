import React from "react";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="navbar">
      <div className="techberg">
        <span>Tech</span>Berg
      </div>
      <div ref={navRef} className="navbar-links">
        <p>
          <Link to={`/`}> Home</Link>
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
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5H22.5V3.66667H0.5V0.5ZM6 8.41667H22.5V11.5833H6V8.41667ZM12.875 16.3333H22.5V19.5H12.875V16.3333Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="navbar-sign">
        <p>Signin</p>
        <p>SignUp</p>
      </div>
    </div>
  );
};

export default Navbar;
