import React from "react";
import './Flims.css'
import MovieCard from './MovieCard'


const films = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    shortTitle: "The Philosopher's Stone",
    year: 2001,
    number: "Film 01",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    shortTitle: "The Chamber of Secrets",
    year: 2002,
    number: "Film 02",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    shortTitle: "The Prisoner of Azkaban",
    year: 2004,
    number: "Film 03",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4OTM3MDk4NV5BMl5BanBnXkFtZTcwNjYyOTUzMw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    shortTitle: "The Goblet of Fire",
    year: 2005,
    number: "Film 04",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    shortTitle: "The Order of the Phoenix",
    year: 2007,
    number: "Film 05",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA3ODI3OTMtNWYzMS00MGUxLWFlNWYtODI1NjAwMTM1MWMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    shortTitle: "The Half-Blood Prince",
    year: 2009,
    number: "Film 06",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows – Part 1",
    shortTitle: "Deathly Hallows – Part 1",
    year: 2010,
    number: "Film 07",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows – Part 2",
    shortTitle: "Deathly Hallows – Part 2",
    year: 2011,
    number: "Film 08",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
];

function Flims() {
  return (
    
    <div className="app">
      <section className="film-hero">
        <div className="film-hero-bg"></div>
        <div className="film-hero-content">
          <p className="film-hero-eyebrow">The Complete Collection</p>
          <h1 className="film-hero-title">Films</h1>
          <p className="film-hero-subtitle">
            Follow Harry Potter's extraordinary journey from the cupboard under the stairs
            to the final battle at Hogwarts. Eight films. One legendary story.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      <section className="films-section">
        <div className="section-header">
          <p className="section-label">All Films</p>
          <h2 className="section-title">The Eight-Film Journey</h2>
        </div>

        <div className="films-grid">
          {films.map((film, index) => (
            <MovieCard key={index} film={film} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-logo">Harry Potter</p>
        <p className="footer-copy">
          © Wizarding World. Fan tribute page — all rights belong to their respective owners.
        </p>
      </footer>

    </div>
  );
}

export default Flims;