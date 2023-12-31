import React from "react";
import "./blog.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import blog1 from "../../images/blog1img.png";
import blog2 from "../../images/blog2img.png";
import author from "../../images/avatar.png";
import heart from "../../images/heart.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="App">
        <Navbar />
      </div>

      {/*  */}
      <div className="blog-container">
        <img src={blog1} alt="img" />
        <div className="align-center-heading">
          <h2 className="heading-top">Infusing Tesla’s future with</h2>
          <h2>Mustang’s pride and passion</h2>
          <div className="bar"></div>
        </div>
        <p>
          More off this less hello salamander lied porpoise much over tightly
          circa horse taped so innocuously outside crud mightily rigorous plot
          life. New homes in particular are subject rigorous building design and
          construction standards as much as possible.
        </p>
        <p>
          As you’re tapping, scrolling, and swiping on your phone, you probably
          <a href=""> don’t give much thought</a> to the fact that your apps are
          consuming electricity — just that they’re chipping away at your
          battery life.
        </p>
        <p>
          It’s engaging. It’s <b>hopeful.</b> It pushes the plot forward.
        </p>
        <p>
          Before you click away, disappointed that I brought up something as
          practical and boring as time management, hear me out. My intent is not
          to crush your spirits.
        </p>

        <h3>Current Mobile Cloud</h3>
        <p>
          The average U.S. iPhone owner uses 1–2 gigabytes of LTE data per
          month, according to some studies. That data comes at an energy cost
          that’s opaque, because we can’t see it directly.
        </p>
        <p>
          You can’t look to your peers in the industry, because all they’re
          going to tell you is that they are killing it, crushing it, changing
          the world.
        </p>
        <p>
          Example: <a href="">Journey towards design perfection</a>
        </p>

        <img src={blog2} alt="img" />
        <p>
          The truth, of course, is that these people have been lying to you all
          along.
        </p>
        <p>
          A federal government initiated report conducted by the Allen
          Consulting Group released in July 2011 proposed, amongst other detail,
          various standards of reporting criteria ranging from voluntary to a
          comprehensive evaluation conducted by qualified energy rating
          assessors.
        </p>
      </div>
      {/*  */}
      <div className="author">
        <h3>Author</h3>
        <div className="avatar">
          <div className="leftbar"></div>
          <img src={author} alt="avatar" />
          <div className="rightbar"></div>
        </div>
        <h2>Jon Doe</h2>
        <div className="bar"></div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
          parturient quis dapibus massa eget cursus. Sit sed tellus facilisis
          tortor massa, ultrices cursus aliquam. Iaculis commodo viverra
          habitasse egestas dolor feugiat donec. Vulputate et interdum posuere
          eu tristique venenatis etiam vel.
        </p>
      </div>

      <div className="icons">
        <img className="heart" src={heart} alt="icon" />
        <p className="number">120</p>
        <img className="facebook" src={facebook} alt="icon" />
        <img className="linkedin" src={linkedin} alt="icon" />
      </div>

      <div className="blog-newsletter">
        <h1>Newsletter</h1>
        <div className="bar"></div>
      </div>
      <div className="blog-data">
        <p>Enter your email address below to subscribe to my newsletter</p>
        <input type="text" placeholder="Your email address.." />
        <button>SUBSCRIBE</button>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
};

export default Blog;
