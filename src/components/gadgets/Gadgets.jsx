import React from "react";
import "./gadgets.css";
import Navbar from "../../components/navbar/Navbar";
import Gadgets_1 from "../../images/gadgets-1.png";

const Gadgets = () => {
  return (
    <div className="gadgets">
      <Navbar />
      <div className="img">
        <img src={Gadgets_1} alt="img" />
      </div>
      <div className="most-featured">
        <h3>Most Featured</h3>
        <hr />
        <p className="data">
          <span>Gadgets</span>
          <br /> <br />
          <b>How i went from programming with a Nokia to Samsung !</b>{" "}
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br /> <br />
          <b>How i went from programming with a Nokia to Samsung !</b>{" "}
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br /> <br />
          <b>How i went from programming with a Nokia to Samsung !</b>{" "}
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br /> <br />
          <b>How i went from programming with a Nokia to Samsung !</b>{" "}
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br /> <br />
          <b>How i went from programming with a Nokia to Samsung !</b>{" "}
        </p>
        <p className="date">May 15 2018</p>
      </div>
      <div className="home-gadgets">
        <span>GADGETS</span>
        <h2>
          7 Proven Tactics to Boost Your Customer Engagement on Social Media
        </h2>
        <p className="date">May 15 2018</p>

        <p className="info">
          Engaging customers on social media is not an easy task. It requires
          the right strategy, a deep understanding of your
          <br />
          audience, and content output that aligns with this understanding. If
          you're still struggling with engaging your <br /> audience...
        </p>

        <p className="readmore">Read More</p>
      </div>
    </div>
  );
};

export default Gadgets;
