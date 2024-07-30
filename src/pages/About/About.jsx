import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              BookHub is a comprehensive book search website designed to help
              book lovers discover, explore, and track their favorite titles.
              With an extensive database, intuitive search functionality, and
              personalized recommendations
            </p>
            <p className="fs-17">
              BookHub makes it easy to find books by title, author, or genre.
              Whether you're a casual reader or a literary enthusiast, BookHub
              is your go-to platform for all things books.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
