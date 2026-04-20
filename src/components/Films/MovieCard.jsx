import React from 'react';

function MovieCard({ film }) {
  return (
    <div className="film-card">
      <a 
        href={film.url || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="film-poster-wrapper"
        style={{ display: 'block', cursor: 'pointer' }}
      >
        <img
          src={film.poster}
          alt={film.title}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="poster-overlay"></div>
        <div className="play-btn">&#9654;</div>
      </a>

      <div className="film-info">
        <p className="film-number">{film.number}</p>
        <p className="film-title">{film.shortTitle}</p>
        <p className="film-year">{film.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
