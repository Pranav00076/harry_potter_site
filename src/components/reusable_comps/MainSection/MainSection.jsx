import React from "react";
import "./MainSection.css";

const MainSection = () => {
  return (
    <section className="main">
      <div className="main-content">
        {/* Left */}
        <div className="text">
          <h1>
            Harry Potter and the Half-Blood Prince (Full-Cast Edition) is out now
          </h1>

          <p>
            You can now listen to the first ever full-cast audiobook of
            Half-Blood Prince. Featuring a powerhouse ensemble of over 200
            performers, an electrifying new musical score, and immersive sound
            design, this is Harry Potter like you've never heard it before.
          </p>

          <button className="cta">LISTEN NOW</button>
        </div>

        {/* Right */}
        <div className="image">
          <img
            src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
            alt="Half Blood Prince"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;