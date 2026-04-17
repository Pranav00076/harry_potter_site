import React, { useState, useRef, useEffect } from "react";
import logo from "./harry_potter_logo.png"
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "glass" : ""}`}>
        <div className="nav-top">
          <div className="social-links">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="logo">
            <img height="100" width="250" src={logo} alt="Harry Potter" />
          </div>
          <div className="nav-auth">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <i className="fas fa-search"></i>
            </div>
            <button className="btn-outline">Log In</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
        <div className="nav-bottom">
          <a href="#" className="nav-link">
            News & Features <i className="fas fa-chevron-down"></i>
          </a>
          <a href="#" className="nav-link">
            Quizzes & Puzzles <i className="fas fa-chevron-down"></i>
          </a>
          <a href="#" className="nav-link">
            J.K. Rowling Archive
          </a>
          <a href="#" className="nav-link">
            Discover <i className="fas fa-chevron-down"></i>
          </a>
          <a href="#" className="nav-link">
            Hogwarts Sorting
          </a>
          <a href="#" className="nav-link">
            Portrait Maker
          </a>
          <a href="#" className="nav-link">
            Patronus Experience
          </a>
          <a href="#" className="nav-link">
            Fact Files
          </a>
          <a href="#" className="nav-link">
            Shop
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
