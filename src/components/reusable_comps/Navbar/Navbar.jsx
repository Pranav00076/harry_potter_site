import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/Users/aryachadha/Documents/GitHub/harry_potter_site/public/logo.png"
import "./Navbar.css";

const menuData = {
  "NEWS & FEATURES": [
    { title: "NEWS", image: "/images/news.jpg", link: "/news" },
    { title: "FEATURES", image: "/images/features.jpg",link: "/features"},
  ],
  "QUIZZES & PUZZLES": [
    { title: "QUIZZES", image: "/images/quizzes.jpg" },
    { title: "PUZZLES", image: "/images/puzzles.jpg" },
  ],
  DISCOVER: [
    { title: "BOOKS", image: "/images/books.jpg", link: "/books" },
    { title: "FILMS", image: "/images/films.jpg", link: "/films" },
    { title: "PORTKEY GAMES", image: "/images/games.jpg" },
    { title: "ON STAGE", image: "/images/stage.jpg" },
    { title: "EXPERIENCES", image: "/images/exp.jpg" },
  ],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className={`navbar ${isScrolled ? "glass" : ""}`}>
      {/* TOP BAR */}
      <div className="nav-top">
        <div className="social-links">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="logo">
          <Link to="/">
            <img height="100" width="250" src={logo} alt="Harry Potter" />
          </Link>
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

      {/* MENU */}
      <div className="nav-bottom">
        {Object.keys(menuData).map((item) => (
          <div
            key={item}
            className={`nav-link ${activeMenu === item ? "active" : ""
              }`}
            onClick={() => toggleMenu(item)}
          >
            {item} <span className="arrow">▾</span>
          </div>
        ))}

        {/* Static items */}
        <div className="nav-link">J.K. ROWLING ARCHIVE</div>
        <div className="nav-link">HOGWARTS SORTING</div>
        <div className="nav-link">PORTRAIT MAKER</div>
        <div className="nav-link">PATRONUS EXPERIENCE</div>
        <div>
          <Link to={"/facts"}>
            <div className="nav-link">FACT FILES</div>
          </Link>
        </div>
        
        <div className="nav-link">SHOP</div>
      </div>

      {/* MEGA MENU */}
      <div className={`mega-menu ${activeMenu ? "show" : ""}`}>
        <div className="mega-content">
          {activeMenu &&
            menuData[activeMenu].map((card, i) => (
              <div key={i} className="mega-card">
                <Link to={card.link}>
                <img src={card.image} alt="" />
                <div className="mega-overlay">
                  <span>{card.title}</span>
                </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;