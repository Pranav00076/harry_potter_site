import React, { useState } from 'react';
import Navbar from "../reusable_comps/Navbar/Navbar";
import './Puzzles.css';
import { Link } from 'react-router-dom';

const puzzlesData = [
  {
    id: 1,
    type: "Wordsearch",
    title: "The Animagus wordsearch",
    difficulty: "Easy",
    image: "https://contentful.harrypotter.com/usf1vwtuqyxm/7q8fcr7MRylQSI7P4ieAOu/54bfa136d45bc9264ea2d63fb0554bfb/fact-file-hero-animagus-marauders-animal-form-pottermore-moments.jpg"
  },
  {
    id: 2,
    type: "Crossword",
    title: "The wizarding world cryptic crossword #11",
    difficulty: "Hard",
    image: "https://contentful.harrypotter.com/usf1vwtuqyxm/5YXQAGxSYZTjSxcp8FXD4U/580ab1acb207e14758bc509eead444c8/WB-HP-F1-harry-at-desk-with-quill-candle-web-landscape.jpg"
  },
  {
    id: 3,
    type: "Number Magic",
    title: "Number Magic #19",
    difficulty: "Medium",
    image: "https://contentful.harrypotter.com/usf1vwtuqyxm/77agWF2NFIPVnNQICgIEW9/829ad1e79ebd272f3495818bb6e0b43e/HP-F5-order-of-the-phoenix-harry-ron-sitting-in-classroom-listening-web-landscape?q=75&fm=jpg&w=708&h=544&fit=fill&f=top"
  },
  {
    id: 4,
    type: "Crossword",
    title: "The wizarding world cryptic crossword #5",
    difficulty: "Hard",
    image: "https://contentful.harrypotter.com/usf1vwtuqyxm/5UNO8V9Tq78VnVl3XeiFNJ/dea078484899f46d886216ccb0a4378b/HP-F5-order-of-the-phoenix-great-hall-students-exam-desks-owls-web-landscape"
  },
  {
    id: 5,
    type: "Number Magic",
    title: "Number Magic #13",
    difficulty: "Medium",
    image: "https://contentful.harrypotter.com/usf1vwtuqyxm/3oL5nTOCfGatYcyRhYrCNR/70a8adb16f8577e51ba48d508844a8bd/HP-philosophers-stone-ron-harry-scabbers-transfiguration.jpg"
  },
  {
    id: 6,
    type: "Crossword",
    title: "The wizarding world cryptic crossword #8",
    difficulty: "Hard",
    image: "https://contentful.harrypotter.com/usf1vwtuqyxm/7B5BmFEpQxGCtGcp5wruwA/4773f279277dd5e76debfe92111a4323/WB-HP-F8-molly-and-ginny-at-the-burrow-door-web-landscape.jpg"
  }
];

const PuzzleCard = ({ puzzle }) => {
  return (
    
    <article className="puzzle-card">
      <div className="image-wrapper">
        <span className="badge">{puzzle.type}</span>
          <Link to="https://www.harrypotter.com/collections/potter-puzzles">
          <img 
          src={puzzle.image} 
          alt={puzzle.title} 
          className="card-image" 
          onError={(e) => {
            e.target.src = "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg";
          }}
        />
          </Link>
        
      </div>
      <div className="card-body">
        <h3 className="card-title">{puzzle.title}</h3>
        <p className="difficulty-text">Level: {puzzle.difficulty}</p>
      </div>
    </article>
  );
};

const Puzzles = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Wordsearch', 'Crosswords', 'Number Magic', 'Riddles'];

  return (
    <div className="puzzles-container">
      <Navbar />

      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">BROADEN YOUR MINDS</p>
          <h1 className="hero-title">HARRY POTTER PUZZLES</h1>
          <div className="hero-emblem">
            <span className="emblem-line"></span>
            <span className="emblem-icon">❈</span>
            <span className="emblem-line"></span>
          </div>
        </div>
      </section>

      <section className="main-content">
        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="puzzles-grid">
          {puzzlesData.map((puzzle) => (
            <PuzzleCard key={puzzle.id} puzzle={puzzle} />
          ))}
        </div>
      </section>

      <div className="divider" aria-hidden="true">
        <span />
        <span className="diamonds">◆ ◆ ◆</span>
        <span />
      </div>
      
      <footer className="footer-section">
        <div className="footer-line" />
        <p className="copyright-text">
          © {new Date().getFullYear()} · The Wizarding World of Harry Potter
        </p>
      </footer>
    </div>
  );
};

export default Puzzles;
