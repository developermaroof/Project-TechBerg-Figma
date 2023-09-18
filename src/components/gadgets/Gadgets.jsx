import React from "react";
import "./gadgets.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Gadgets_1 from "../../images/gadgets-1.png";
import Gadgets_2 from "../../images/gadgets-2.png";
import Gadgets_3 from "../../images/gadgets-3.png";

const Gadgets = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="heading">
          <h2>GADGETS</h2>
        </div>
        <div className="head-bar"></div>
        {/* 1st Gadget */}
        <div className="gadget-1">
          <div className="img">
            <img src={Gadgets_1} alt="img" />
            <span>GADGETS</span>
            <h2>Explore the Sea world with Deep Sea Fishing Miami 2018 </h2>
            <p className="date">May 15 2018</p>

            <p className="info">
              More off this less hello salamander lied porpoise much over
              tightly circa horse taped so innocuously outside crud mightily
              rigorous…
            </p>

            <p className="readmore">Read More</p>
          </div>
          <div className="LatestPosts">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <div className="bar"></div>
              <p>
                Enter your email address below to subscribe to my newsletter
              </p>
              <input type="text" placeholder="Your email address.." />
              <button>SUBSCRIBE</button>
            </div>
            <h3>Latest Posts</h3>
            <hr />
            <p className="data">
              <span>Gadgets</span>
              <br />{" "}
              <b>How i went from programming with a Nokia to Samsung !</b>{" "}
            </p>
            <p className="date">May 15 2018</p>
            <p className="data">
              <span>Gadgets</span>
              <br />
              <b>How i went from programming with a Nokia to Samsung !</b>{" "}
            </p>
            <p className="date">May 15 2018</p>
            <p className="data">
              <span>Gadgets</span>
              <br />
              <b>How i went from programming with a Nokia to Samsung !</b>{" "}
            </p>
            <p className="date">May 15 2018</p>
          </div>
        </div>
        {/* 2nd Gadget */}
        <div className="gadget-2">
          <div className="img">
            <img src={Gadgets_2} alt="img" />
            <span>GADGETS</span>
            <h2>3 reasons to get excited about a brand new greenhouse</h2>
            <p className="date">May 15 2018</p>

            <p className="info">
              More off this less hello salamander lied porpoise much over
              tightly circa horse taped so innocuously outside crud mightily
              rigorous…
            </p>

            <p className="readmore">Read More</p>
          </div>
          <div className="empty-div"></div>
        </div>
        {/* 3rd Gadget */}
        <div className="gadget-3">
          <div className="img">
            <img src={Gadgets_3} alt="img" />
            <span>GADGETS</span>
            <h2>Archaeologists may find a hidden tunnel in king Tut’s tomb </h2>
            <p className="date">May 15 2018</p>

            <p className="info">
              More off this less hello salamander lied porpoise much over
              tightly circa horse taped so innocuously outside crud mightily
              rigorous…
            </p>

            <p className="readmore">Read More</p>
          </div>
          <div className="empty-div"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Gadgets;
