import React from "react";
import users from "../../images/users.png";
import "./home.css";

const Home = () => {
  return (
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
          the right strategy, a deep understanding of your audience, and content
          output that aligns with this understanding. If you're still struggling
          with engaging your audience...
        </p>

        <p className="readmore">Read More</p>
      </div>
      <div className="most-featured">
        <h3>Most Featured</h3>
        <hr />
        <p className="data">
          <span>Gadgets</span>
          <br />
          <b>How i went from programming with a Nokia to Samsung !</b>
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br />
          <b>How i went from programming with a Nokia to Samsung !</b>
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br />
          <b>How i went from programming with a Nokia to Samsung !</b>
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br />
          <b>How i went from programming with a Nokia to Samsung !</b>
        </p>
        <p className="date">May 15 2018</p>
        <p className="data">
          <span>Gadgets</span>
          <br />
          <b>How i went from programming with a Nokia to Samsung !</b>
        </p>
        <p className="date">May 15 2018</p>
        <p className="data hide">
          <span>Gadgets</span>
          <br />
          <b>How i went from programming with a Nokia to Samsung !</b>
        </p>
        <p className="date hide">May 15 2018</p>
      </div>
    </div>
  );
};

export default Home;
