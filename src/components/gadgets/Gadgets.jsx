import React from "react";
import "./gadgets.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Gadgets_1 from "../../images/gadgets-1.png";
import Gadgets_2 from "../../images/gadgets-2.png";
import Gadgets_3 from "../../images/gadgets-3.png";

import gad1 from "../../images/ms-gad-img1.png";
import gad2 from "../../images/ms-gad-img2.png";
import gad3 from "../../images/trending_img_3.png";

const Gadgets = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
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
            <p className="dataa">
              <span>Gadgets</span>
              <br />
              <b>How i went from programming with a Nokia to Samsung !</b>{" "}
            </p>
            <p className="date">May 15 2018</p>
            <p className="dataa">
              <span>Gadgets</span>
              <br />
              <b>How i went from programming with a Nokia to Samsung !</b>{" "}
            </p>
            <p className="date">May 15 2018</p>
            <p className="dataa">
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
      </div>

      {/* Mobiles and Tebs Design */}

      <div className="ms-box2">
        <div>
          <h1>GADGETS</h1>
          <div className="bar"></div>
        </div>
        <div className="img1">
          <img src={gad1} alt="img" />
          <h2 className="line-1">How I went from programming with a</h2>
          <h2 className="line-2">Nokia to Samsung</h2>
          <p className="date">May 15 2018</p>
          <button>Gadgets</button>
        </div>
        <div className="img2">
          <img src={gad2} alt="img" />
          <h2 className="line-1">How Is This a Good Idea: Car</h2>
          <h2 className="line-2"> Dashboard Video Games</h2>
          <p className="date">May 15 2018</p>
          <button>Gadgets</button>
        </div>
        <div className="img3">
          <img src={gad3} alt="img" />
          <h2 className="line-1">Infusing Tesla’s future with Mustang’s</h2>
          <h2 className="line-2">pride and passion</h2>
          <p className="date">May 14 2018</p>
          <button>Gadgets</button>
        </div>

        <div className="loadmore">
          <button>LOAD MORE</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gadgets;
