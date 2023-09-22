import React from "react";
import "./footer.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-div">
        <p>
          Developed by: <span>Maroof Qureshi</span>
        </p>

        <img src={github} alt="icon" />

        <img src={linkedin} alt="icon" />

        <img src={facebook} alt="icon" />
      </div>
      {/*  */}
      <div className="ms-footer-icons">
        <img src={facebook} alt="icon" />
        <img src={linkedin} alt="icon" />
        <img src={github} alt="icon" />
      </div>
      <div className="ms-footer-developer">
        <p>
          Developed by: <span>Maroof Qureshi</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
