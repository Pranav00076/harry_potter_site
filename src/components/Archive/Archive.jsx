import React from "react";
import "./Archive.css";
import Navbar from "../reusable_comps/Navbar/Navbar";

// Importing images
import patronusImg from "./images/patronus.png";
import sortingHatImg from "./images/sorting_hat.png";
import quidditchImg from "./images/quidditch.png";
import alchemyImg from "./images/alchemy.png";
import wandWoodsImg from "./images/wand_woods.png";
import wandCoresImg from "./images/wand_cores.png";

const archiveData = [
  {
    id: 1,
    title: "The Patronus Charm",
    author: "By J.K. Rowling",
    image: patronusImg,
  },
  {
    id: 2,
    title: "The Sorting Hat",
    author: "By J.K. Rowling",
    image: sortingHatImg,
  },
  {
    id: 3,
    title: "Quidditch",
    author: "By J.K. Rowling",
    image: quidditchImg,
  },
  {
    id: 4,
    title: "Alchemy",
    author: "By J.K. Rowling",
    image: alchemyImg,
  },
  {
    id: 5,
    title: "Wand Woods",
    author: "By J.K. Rowling",
    image: wandWoodsImg,
  },
  {
    id: 6,
    title: "Wand Cores",
    author: "By J.K. Rowling",
    image: wandCoresImg,
  },
];

const Archive = () => {
  return (
    <>
    <Navbar />
    <div className="archive-container">
      {/* Hero Section */}
      <header className="archive-hero">
        <div className="hero-content">
          <h1>J.K. ROWLING ORIGINALS</h1>
          <p>Explore J.K. Rowling’s writing about the Wizarding World.</p>
        </div>
      </header>

      {/* Archive Grid */}
      <main className="archive-content">
        <div className="archive-grid">
          {archiveData.map((item) => (
            <a key={item.id} href="#" className="archive-card">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <span>{item.author}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default Archive;
