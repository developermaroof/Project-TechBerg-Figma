import React from "react";
import "./blog.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import blog1 from "../../images/blog1img.png";
import blog2 from "../../images/blog2img.png";

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="App">
        <Navbar />
      </div>

      {/*  */}
      <div className="blog-container">
        <img src={blog1} alt="img" />
        <h1>Infusing Tesla’s future with</h1>
        <h1>Mustang’s pride and passion</h1>
        <div className="bar"></div>
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
      <Footer />
    </div>
  );
};

export default Blog;
