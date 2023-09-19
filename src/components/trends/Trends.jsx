import React from "react";
import img1 from "../../images/trending_img_1.png";
import img2 from "../../images/trending_img_2.png";
import img3 from "../../images/trending_img_3.png";

import gadgets from "../../images/ms-gadgets.jpg";
import marketing from "../../images/ms-marketing.jpg";
import trends from "../../images/ms-trend.jpg";
import trend1 from "../../images/trending_img_2.png";
import marketing1 from "../../images/ms-connect.jpg";
import gadgets1 from "../../images/trending_img_3.png";

import "./trends.css";

const Trends = () => {
  return (
    <div className="main">
      <div className="trends">
        <div className="section-1">
          <div className="header">
            <h2>News & Trends</h2>
            <button>View All</button>
          </div>
          <div className="trends-boxs">
            <div className="trends-box1">
              <img src={img1} alt="img" />
              <div className="img-info">
                <span>Trends</span>
                <h2>The biggest and awesome camera rumors of the year</h2>
                <p className="date">May 15 2018</p>

                <p className="info">
                  Engaging customers on social media is not an easy task. It
                  requires the right strategy, a deep understanding of your
                  audience, and content output that aligns with this
                  understanding. If you're still struggling with engaging your
                  audience...
                </p>
              </div>
            </div>
            <div className="trends-box2">
              <img src={img2} alt="" />
              <div className="img-info">
                <span>Trends</span>
                <h2>What 3 years of android development taught me</h2>
                <p className="date">May 15 2018</p>

                <p className="info">
                  Engaging customers on social media is not an easy task. It
                  requires the right strategy, a deep understanding of your
                  audience, and content output that aligns with this
                  understanding. If you're still struggling with engaging your
                  audience...
                </p>
              </div>
            </div>
          </div>
          <div className="loadmore">
            <button>LOAD MORE</button>
          </div>
        </div>

        <div className="section-2">
          <div className="trends-boxs">
            <div className="trends-box1">
              <img src={img3} alt="img" />
              <div className="img-info">
                <span>GADGETS</span>
                <h2>
                  Infusing Tesla’s future with Mustang’s pride and passion
                </h2>
                <p className="date">May 15 2018</p>

                <p className="info">
                  Engaging customers on social media is not an easy task. It
                  requires the right strategy, a deep understanding of your
                  audience, and content output that aligns with this
                  understanding. If you're still struggling with engaging your
                  audience...
                </p>
              </div>
            </div>
            <div className="trends-box2">
              <img src={img3} alt="" />
              <div className="img-info">
                <span>GADGETS</span>
                <h2>
                  Infusing Tesla’s future with Mustang’s pride and passion
                </h2>
                <p className="date">May 15 2018</p>

                <p className="info">
                  Engaging customers on social media is not an easy task. It
                  requires the right strategy, a deep understanding of your
                  audience, and content output that aligns with this
                  understanding. If you're still struggling with engaging your
                  audience...
                </p>
              </div>
            </div>
            <div className="trends-box3">
              <img src={img3} alt="" />
              <div className="img-info">
                <span>GADGETS</span>
                <h2>
                  Infusing Tesla’s future with Mustang’s pride and passion
                </h2>
                <p className="date">May 15 2018</p>

                <p className="info">
                  Engaging customers on social media is not an easy task. It
                  requires the right strategy, a deep understanding of your
                  audience, and content output that aligns with this
                  understanding. If you're still struggling with engaging your
                  audience...
                </p>
              </div>
            </div>
          </div>
          <div className="loadmore">
            <button>LOAD MORE</button>
          </div>
        </div>
      </div>

      {/* Mobile and Tebs Design */}

      <div className="ms-box1">
        <div>
          <h1>Categories</h1>
          <div className="bar"></div>
        </div>
        <div className="img1">
          <img src={gadgets} alt="" />
          <div className="ms-button">
            <button>GADGETS</button>
          </div>
        </div>
        <div className="img2">
          <img src={marketing} alt="" />
          <div className="ms-button">
            <button>MARKETING</button>
          </div>
        </div>
        <div className="img3">
          <img src={trends} alt="" />
          <div className="ms-button">
            <button>TRENDS</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="ms-box2">
        <div>
          <h1>From The Blog</h1>
          <div className="bar"></div>
        </div>
        <div className="img1">
          <img src={trend1} alt="img" />
          <h2>What 3 years of android development taught me the hard way</h2>
          <p className="date">May 15 2018</p>
          <button>Trends</button>
        </div>
        <div className="img2">
          <img src={marketing1} alt="img" />
          <h2>In defense of being on the phone all the damn time 24 hours</h2>
          <p className="date">May 15 2018</p>
          <button>Marketing</button>
        </div>
        <div className="img3">
          <img src={gadgets1} alt="img" />
          <h2>Infusing Tesla’s future with Mustang’s pride and passion</h2>
          <p className="date">May 14 2018</p>
          <button>Gadgets</button>
        </div>
      </div>
      {/*  */}
      <div className="newsletter">
        <h2>Newsletter</h2>
        <div className="bar"></div>
        <p>Enter your email address below to subscribe to my newsletter</p>
        <input type="text" placeholder="Your email address.." />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Trends;
