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
      "https://darksidetoy.com/images/virtuemart/product/hp01.jpg",
    attribute: "Brave, Resilient",
  },
  {
    id: "hermione-granger",
    category: "Characters",
    title: "Hermione Granger",
    description:
      "A brilliant witch and Harry's close friend, known for her logic, intelligence, and unwavering loyalty.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/293/813/229/actresses-emma-watson-hermione-granger-wallpaper-preview.jpg",
    attribute: "Intelligent, Loyal",
  },
  {
    id: "ron-weasley",
    category: "Characters",
    title: "Ron Weasley",
    description:
      "Harry's loyal best friend, known for his humor, bravery, and being an integral part of the trio.",
    image:
      "https://queenstudios.shop/cdn/shop/files/29.QueenStudiosRonWeasley1-6ScaleFigure_620x.jpg?v=1715775669",
    attribute: "Humorous, Loyal",
  },
  {
    id: "hogwarts-castle",
    category: "Locations",
    title: "Hogwarts Castle",
    description:
      "The premier school for witchcraft and wizardry in Great Britain, hidden in the Scottish Highlands.",
    image:
      "https://images5.alphacoders.com/120/thumb-1920-1207344.jpg",
    attribute: "Ancient, Magical",
  },
  {
    id: "diagon-alley",
    category: "Locations",
    title: "Diagon Alley",
    description:
      "A magical hidden cobblestoned shopping area in London for witches and wizards.",
    image:
      "https://external-preview.redd.it/an-hd-picture-of-diagon-alley-from-universal-orlando-v0-GEOhPvsWEkZE5im4_36JbD3Pj5hKPf2RSUQ54EPRDnU.jpg?auto=webp&s=2a6c533723a704f7a05135adbff76f42987279bb",
    attribute: "Bustling, Magical",
  },
  {
    id: "hippogriff",
    category: "Creatures",
    title: "Hippogriff",
    description:
      "A magical creature with the front half of an eagle and the hindquarters of a horse.",
    image:
      "https://e0.pxfuel.com/wallpapers/852/1002/desktop-wallpaper-buckbeak-hippogriff.jpg",
    attribute: "Proud, Powerful",
  },
  {
    id: "phoenix",
    category: "Creatures",
    title: "Phoenix",
    description:
      "A mythical bird that bursts into flames when it dies and is reborn from the ashes.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/640/554/473/phoenix-bird-red-phoenix-wallpaper-preview.jpg",
    attribute: "Immortal, Healing",
  },
  {
    id: "elder-wand",
    category: "Objects",
    title: "The Elder Wand",
    description:
      "The most powerful wand in existence, and one of the three Deathly Hallows.",
    image:
      "https://i.redd.it/o6ohwswv4u351.jpg",
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
