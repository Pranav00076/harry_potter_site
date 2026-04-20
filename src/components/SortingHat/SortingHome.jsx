import React, { useState } from 'react';
import Navbar from "../reusable_comps/Navbar/Navbar";
import './SortingHome.css';
import SortingChat from './SortingChat';

import sortingHatImg from '../../../public/sorting-hat.png'; 
import goldLogo from '../../../public/logo.png';
import { Link } from 'react-router-dom';

const SortingHome = () => {
  const [isStarted, setIsStarted] = useState(false);

  if (isStarted) {
    return <SortingChat />;
  }

  return (
    <div className="sorting-home">
      
      <main className="sorting-hero">
        <div className="sorting-hero__container">
          
          <div className="sorting-hero__image-section">
            <img 
              src={sortingHatImg} 
              alt="The Sorting Hat" 
              className="sorting-hat-glow"
            />
          </div>

          <div className="sorting-hero__content-section">
            <div className="sorting-hero__logo-wrap">
                <Link to="/">
                <img src={goldLogo} alt="Harry Potter Logo" className="gold-logo-small" />
                </Link>
            </div>
            
            <div className="sorting-hero__badge">
              <span>Sorting Ceremony</span>
              <span className="play-triangle">▶</span>
            </div>

            <h1 className="sorting-hero__title">
              Discover your Hogwarts House
            </h1>

            <p className="sorting-hero__description">
              Don the Sorting Hat to be placed into your rightful Hogwarts house. 
              The Sorting Hat's decision is final.
            </p>

            <button className="start-ceremony-btn" onClick={() => setIsStarted(true)}>
              Start the Sorting Ceremony
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SortingHome;