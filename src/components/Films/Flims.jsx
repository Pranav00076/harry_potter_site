import React from "react";
import Navbar from "../reusable_comps/Navbar/Navbar";
import './Flims.css'
import MovieCard from './MovieCard'
import StarField from "../reusable_comps/Navbar/Starfield/Starfield";


const films = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    shortTitle: "The Philosopher's Stone",
    year: 2001,
    number: "Film 01",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/1f5EjNhKvbBlED0crJAzkN/10031c9cbfbe2683b68781cd3b20289d/hp1-poster.png",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    shortTitle: "The Chamber of Secrets",
    year: 2002,
    number: "Film 02",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/4u9jH4UqdaWzWBVFEcHtRJ/568c2190aa8e33223537fb6e32a72c96/hp2-poster.png",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    shortTitle: "The Prisoner of Azkaban",
    year: 2004,
    number: "Film 03",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/231TsijamyKCGe6VvOYW9I/f796a168726a189209f28928d77b7daa/hp3-poster.png",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    shortTitle: "The Goblet of Fire",
    year: 2005,
    number: "Film 04",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/600bJMHJpBT6QdHF29sKvp/243f8920e0e372bbf43fd176b21e057b/hp4-poster.png",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    shortTitle: "The Order of the Phoenix",
    year: 2007,
    number: "Film 05",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/6Tl1jqky9PZvDStEJ156HX/8f1b10b409a71c6ef537d5f36c2839b0/hp5-poster.png",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    shortTitle: "The Half-Blood Prince",
    year: 2009,
    number: "Film 06",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/2aXcRaGMOI4O1qEoj1JlR5/c1d6eb5ccd75df65001bc1a2f7787a39/hp6-poster.png",
  },
  {
    title: "Harry Potter and the Deathly Hallows – Part 1",
    shortTitle: "Deathly Hallows – Part 1",
    year: 2010,
    number: "Film 07",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/2bgFa1qVAalbxgEhVhthon/a1cda92470a76d44266040b8d891c9d0/hp7-poster.png",
  },
  {
    title: "Harry Potter and the Deathly Hallows – Part 2",
    shortTitle: "Deathly Hallows – Part 2",
    year: 2011,
    number: "Film 08",
    poster:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/4Hmi2PKjtlhsEy2vgwarm8/f6156fbb05f86c90db209641e885b9b3/hp8-poster.png",
  },
];

function Flims() {
  return (
    <div className="app">
      <Navbar />
      <StarField />
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

    </div>
  );
}

export default Flims;