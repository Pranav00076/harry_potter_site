import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const menuData = {
  "NEWS & FEATURES": [
    { title: "NEWS", image: "/images/news.jpg" },
    { title: "FEATURES", image: "/images/features.jpg" },
  ],
  "QUIZZES & PUZZLES": [
    { title: "QUIZZES", image: "/images/quizzes.jpg" },
    { title: "PUZZLES", image: "/images/puzzles.jpg" },
  ],
  DISCOVER: [
    { title: "BOOKS", image: "/images/books.jpg" },
    { title: "FILMS", image: "/images/films.jpg" },
    { title: "PORTKEY GAMES", image: "/images/games.jpg" },
    { title: "ON STAGE", image: "/images/stage.jpg" },
    { title: "EXPERIENCES", image: "/images/exp.jpg" },
  ],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="nav-container" ref={navRef}>
      {/* TOP BAR */}
      <div className="nav-top">
        <div className="nav-socials">
          <span>▶</span>
          <span>♪</span>
          <span>f</span>
          <span>◎</span>
          <span>🟢</span>
        </div>

        <div className="nav-logo">Harry Potter</div>

        <div className="nav-actions">
          <div className="nav-search">
            <input type="text" placeholder="Search" />
            <span className="search-icon">🔍</span>
          </div>

          <button className="login-btn">LOG IN</button>
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>

      {/* MENU */}
      <div className="nav-menu">
        {Object.keys(menuData).map((item) => (
          <div
            key={item}
            className={`nav-item ${
              activeMenu === item ? "active" : ""
            }`}
            onClick={() => toggleMenu(item)}
          >
            {item} <span className="arrow">▾</span>
          </div>
        ))}

        {/* Static items */}
        <div className="nav-item">J.K. ROWLING ARCHIVE</div>
        <div className="nav-item">HOGWARTS SORTING</div>
        <div className="nav-item">PORTRAIT MAKER</div>
        <div className="nav-item">PATRONUS EXPERIENCE</div>
        <div className="nav-item">FACT FILES</div>
        <div className="nav-item">SHOP</div>
      </div>

      {/* MEGA MENU */}
      <div className={`mega-menu ${activeMenu ? "show" : ""}`}>
        <div className="mega-content">
          {activeMenu &&
            menuData[activeMenu].map((card, i) => (
              <div key={i} className="mega-card">
                <img src={card.image} alt="" />
                <div className="mega-overlay">
                  <span>{card.title}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;