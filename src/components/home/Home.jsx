import React from "react";
import users from "../../images/users.png";
import img1 from "../../images/ms-img1.jpg";
import img2 from "../../images/ms-img2.png";
import img3 from "../../images/ms-img3.png";
import img4 from "../../images/ms-img4.png";
import img5 from "../../images/ms-img5.png";

import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <div className="img">
          <img src={users} alt="img" />
          <span>GADGETS</span>
          <h2>
            7 Proven Tactics to Boost Your Customer Engagement on Social Media
          </h2>
          <p className="date">May 15 2018</p>

          <p className="info">
            Engaging customers on social media is not an easy task. It requires
            the right strategy, a deep understanding of your audience, and
            content output that aligns with this understanding. If you're still
            struggling with engaging your audience...
          </p>

          <p className="readmore">Read More</p>
        </div>
        <div className="most-featured">
          <h3>Most Featured</h3>
          <hr />
          <p className="dataa">
            <span>Gadgets</span>
            <br />
            <b>How i went from programming with a Nokia to Samsung !</b>
          </p>
          <p className="date">May 15 2018</p>

          <p className="dataa">
            <span>Gadgets</span>
            <br />
            <b>How i went from programming with a Nokia to Samsung !</b>
          </p>
          <p className="date">May 15 2018</p>
          <p className="dataa">
            <span>Gadgets</span>
            <br />
            <b>How i went from programming with a Nokia to Samsung !</b>
          </p>
          <p className="date">May 15 2018</p>
          <p className="dataa">
            <span>Gadgets</span>
            <br />
            <b>How i went from programming with a Nokia to Samsung !</b>
          </p>
          <p className="date">May 15 2018</p>
          <p className="dataa">
            <span>Gadgets</span>
            <br />
            <b>How i went from programming with a Nokia to Samsung !</b>
          </p>
          <p className="date">May 15 2018</p>
          <p className="dataa hide">
            <span>Gadgets</span>
            <br />
            <b>How i went from programming with a Nokia to Samsung !</b>
          </p>
          <p className="date hide">May 15 2018</p>
        </div>
      </div>
      {/* Mobile and Tebs Design */}
      <div className="ms-home">
        <div className="box1-img">
          <img src={img1} alt="img" />
          <div className="img1-text">
            <h1>All about tech !</h1>
          </div>
        </div>
        <div className="box2-img">
          <img src={img2} alt="img" />
          <img src={img3} className="m-left-img" alt="img" />
          <img src={img4} className="m-left-img" alt="img" />
          <img src={img5} className="m-left-img" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
