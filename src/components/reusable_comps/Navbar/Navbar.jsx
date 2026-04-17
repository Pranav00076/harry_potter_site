import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Top bar */}
      <div className="navbar-top">
        <div className="socials">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>

        <div className="logo">Harry Potter</div>

        <div className="actions">
          <input
            type="text"
            placeholder="Search"
            className="search"
          />
          <button className="login">LOG IN</button>
          <button className="signup">SIGN UP</button>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="navbar-links">
        <a href="#">NEWS & FEATURES</a>
        <a href="#">QUIZZES & PUZZLES</a>
        <a href="#">J.K. ROWLING ARCHIVE</a>
        <a href="#">DISCOVER</a>
        <a href="#">HOGWARTS SORTING</a>
        <a href="#">PORTRAIT MAKER</a>
        <a href="#">PATRONUS EXPERIENCE</a>
        <a href="#">FACT FILES</a>
        <a href="#">SHOP</a>
      </nav>
    </header>
  );
};

export default Navbar;