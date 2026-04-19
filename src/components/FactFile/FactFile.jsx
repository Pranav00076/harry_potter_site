import React, { useState, useEffect } from "react";
import "./FactFile.css";
import Navbar from "../reusable_comps/Navbar/Navbar";
import StarField from "../reusable_comps/Navbar/Starfield/Starfield";

const FACT_DATA = [
  {
    id: "harry-potter",
    category: "Characters",
    title: "Harry Potter",
    description:
      "The Boy Who Lived, known for his bravery and being the Chosen One who eventually defeated Lord Voldemort.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/3S6uUrOE9Yv6MAr9qnXF9B/eb14cb751f896b0f3408f97ac26e6d1c/HarryPotter_WB_F1_HarryPotterAgainstDarkWall_Hero_V1.jpg",
    attribute: "Brave, Resilient",
  },
  {
    id: "hermione-granger",
    category: "Characters",
    title: "Hermione Granger",
    description:
      "A brilliant witch and Harry's close friend, known for her logic, intelligence, and unwavering loyalty.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/28reNbeXm8q62mI40cwO2U/68916d80d1e39b98c36294a20b78c934/HermioneGranger_WB_F2_HermioneInsideCommonRoom_Hero.jpg",
    attribute: "Intelligent, Loyal",
  },
  {
    id: "ron-weasley",
    category: "Characters",
    title: "Ron Weasley",
    description:
      "Harry's loyal best friend, known for his humor, bravery, and being an integral part of the trio.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/17mFqof8vqe2qE2Iq8K26S/3d7d7d7d7d7d7d7d/RonWeasley_WB_F1_RonCommonRoom_Hero.jpg",
    attribute: "Humorous, Loyal",
  },
  {
    id: "hogwarts-castle",
    category: "Locations",
    title: "Hogwarts Castle",
    description:
      "The premier school for witchcraft and wizardry in Great Britain, hidden in the Scottish Highlands.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/4To9Hqoo7S8W6I8O2OqUea/1d1d1d1d1d1d1d1d/Hogwarts_HogwartsCastle_Hero.jpg",
    attribute: "Ancient, Magical",
  },
  {
    id: "diagon-alley",
    category: "Locations",
    title: "Diagon Alley",
    description:
      "A magical hidden cobblestoned shopping area in London for witches and wizards.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/5To7NjoO8S8W6I8O2OqUea/2d2d2d2d2d2d2d2d/DiagonAlley_Hero.jpg",
    attribute: "Bustling, Magical",
  },
  {
    id: "hippogriff",
    category: "Creatures",
    title: "Hippogriff",
    description:
      "A magical creature with the front half of an eagle and the hindquarters of a horse.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/6To8NkoO9S9W7I9O3OqUeb/3d3d3d3d3d3d3d3d/Buckbeak_Hero.jpg",
    attribute: "Proud, Powerful",
  },
  {
    id: "phoenix",
    category: "Creatures",
    title: "Phoenix",
    description:
      "A mythical bird that bursts into flames when it dies and is reborn from the ashes.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/7To9NloP0S0W8I0O4OqUec/4d4d4d4d4d4d4d4d/Fawkes_Hero.jpg",
    attribute: "Immortal, Healing",
  },
  {
    id: "elder-wand",
    category: "Objects",
    title: "The Elder Wand",
    description:
      "The most powerful wand in existence, and one of the three Deathly Hallows.",
    image:
      "https://images.ctfassets.net/usf1vwtuqyxm/8To0NmoQ1S1W9I1O5OqUed/5d5d5d5d5d5d5d5d/ElderWand_Hero.jpg",
    attribute: "Unbeatable, Ancient",
  },
];

const categories = ["All", "Characters", "Locations", "Creatures", "Objects"];

const FactFile = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(FACT_DATA);

  useEffect(() => {
    let data = FACT_DATA;
    if (activeCategory !== "All") {
      data = data.filter((item) => item.category === activeCategory);
    }
    if (searchTerm) {
      data = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    setFilteredData(data);
  }, [activeCategory, searchTerm]);

  return (
    <>
      <Navbar />
      <StarField />
      <div className="fact-file-page">
        <header className="fact-file-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="hero-content-p1">Discover the secrets</p>
            <h1>Wizarding World Fact Files</h1>
            <div className="hero-divider">
              <span></span>
              <i className="fas fa-bolt"></i>
              <span></span>
            </div>
            <p className="subtitle">
              Dive into the official encyclopedia of characters, locations, and
              magical wonders.
            </p>
          </div>
        </header>

        <section className="fact-file-controls">
          <div className="category-nav">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-container">
            <div className="search-wrapper">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search the archives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <main className="fact-file-grid-container">
          <div className="grid-header">
            <h2>{activeCategory === "All" ? "Everything" : activeCategory}</h2>
            <span className="results-count">
              {filteredData.length} results found
            </span>
          </div>

          <div className="fact-grid">
            {filteredData.map((item) => (
              <div key={item.id} className="fact-card glass">
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="card-category-tag">{item.category}</div>
                </div>
                <div className="card-content">
                  <span className="card-attribute">{item.attribute}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="read-more-btn">
                    <span>READ MORE</span>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="no-results">
              <i className="fas fa-magic"></i>
              <p>No magical matches found. Try another search!</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default FactFile;
