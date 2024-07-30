import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            {" "}
            Easily search for your favorite titles, authors, and genres, and
            manage your personal library all in one place. Dive into a world of
            literature with BookFinder today!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
