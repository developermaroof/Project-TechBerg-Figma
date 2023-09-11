import React from "react";
import img1 from "../../images/trending_img_1.png";
import img2 from "../../images/trending_img_2.png";
import img3 from "../../images/trending_img_3.png";
import "./trends.css";

const Trends = () => {
  return (
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
              <h2>Infusing Tesla’s future with Mustang’s pride and passion</h2>
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
              <h2>Infusing Tesla’s future with Mustang’s pride and passion</h2>
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
              <h2>Infusing Tesla’s future with Mustang’s pride and passion</h2>
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
  );
};

export default Trends;
