import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import "./Navbar.css";

const menuData = {
  "NEWS & FEATURES": [
    { title: "NEWS", image: "https://wallpapercave.com/wp/wp9483296.jpg", link: "/news" },
    { title: "FEATURES", image: "https://w0.peakpx.com/wallpaper/952/791/HD-wallpaper-harry-potter-harry-potter-deathly-hallows.jpg",link: "/features"},
  ],
  "QUIZZES & PUZZLES": [
    { title: "QUIZZES", image: "https://i.pinimg.com/236x/dc/1b/31/dc1b316fe6bee2b0011f0aebbea115ad.jpg" },
    { title: "PUZZLES", image: "https://sw6.elbenwald.de/media/7b/18/2f/1743578257/E1087630_3.jpg" },
  ],
  DISCOVER: [
    { title: "BOOKS", image: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFycnklMjBwb3R0ZXIlMjBib29rfGVufDB8fDB8fHww", link: "/books" },
    { title: "FILMS", image: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg", link: "/films" },
    { title: "PORTKEY GAMES", image: "https://cdn-hogwartslegacy.warnerbrosgames.com/community/slide-07.jpg" },
    { title: "ON STAGE", image: "https://res.cloudinary.com/dwzhqvxaz/image/upload/v1749740938/Titles/Harry%20Potter/HPCC_2025_Prod2_1920x1080.jpg" },
    { title: "EXPERIENCES", image: "https://media.timeout.com/images/106007502/image.jpg" },
  ],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarActiveMenu, setSidebarActiveMenu] = useState(null);
  const navRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
        setIsSidebarOpen(false);
      }
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) setSidebarActiveMenu(null);
  };

  const toggleSidebarSubMenu = (menu) => {
    setSidebarActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className={`navbar ${isScrolled ? "glass" : ""}`} ref={navRef}>
      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* TOP BAR */}
      <div className="nav-top">
        <div className="menu-toggle" onClick={toggleSidebar}>
          <i className={isSidebarOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
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

      {/* DESKTOP MENU */}
      <div className="nav-bottom desktop-menu">
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
        <div className="nav-link">J.K. ROWLING ARCHIVE</div>
        <Link to="/SortingHat" className="nav-link">HOGWARTS SORTING</Link>
        <Link to="/facts" className="nav-link">FACT FILES</Link>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="close-menu" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </div>
          <div className="sidebar-search">
            <button className="search-btn">
               <i className="fas fa-search"></i> SEARCH
            </button>
          </div>
        </div>

        <div className="sidebar-links">
          {Object.keys(menuData).map((item) => (
            <div key={item} className="sidebar-link-group">
              <div 
                className={`sidebar-link ${sidebarActiveMenu === item ? "active" : ""}`} 
                onClick={() => toggleSidebarSubMenu(item)}
              >
                {item} <i className={`fas ${sidebarActiveMenu === item ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
              </div>
              <div className={`sidebar-submenu ${sidebarActiveMenu === item ? "show" : ""}`}>
                {menuData[item].map((sub, idx) => (
                  <Link 
                    key={idx} 
                    to={sub.link || "#"} 
                    className="submenu-item"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="sidebar-link">J.K. ROWLING ARCHIVE</div>
          <Link to="/SortingHat" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>HOGWARTS SORTING</Link>
          <Link to="/facts" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>FACT FILES</Link>
        </div>
      </div>

      {/* MEGA MENU (Desktop Only) */}
      <div className={`mega-menu desktop-only ${activeMenu ? "show" : ""}`}>
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