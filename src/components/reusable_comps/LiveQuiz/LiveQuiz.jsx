import React from "react";
import "./LiveQuiz.css";

const cards = [
  {
    title: "REVELIO SECRETS!",
    desc: "Our favourite reveals from HBO Max’s Finding Harry: The Craft Behind the Magic",
    img: "https://images.unsplash.com/photo-1608889175252-3e7d4f4a2a6b",
  },
  {
    title: "Can you guess the Hufflepuff from these emojis?",
    desc: "",
    img: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
  },
  {
    title: "25 YEARS OF MAGIC",
    desc: "Explore the new Anniversary Collection from the Harry Potter Shop",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "YOUR FIRST LOOK",
    desc: "Watch the first teaser for HBO’s original Harry Potter series premiering Christmas 2026",
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
  },
];

const LiveQuiz = () => {
  return (
    <section className="livequiz">
      <div className="livequiz-container">
        
        {/* LEFT: CARDS */}
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.img} alt="card" />
              <div className="card-overlay">
                <span className="badge">{card.title}</span>
                {card.desc && <p>{card.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: POLL */}
        <div className="poll">
          <span className="poll-label">— POLL —</span>
          <h2>What do you think is Harry's strongest trait?</h2>

          <div className="options">
            <button>BRAVE</button>
            <button>INSTINCTIVE</button>
            <button>LOYAL</button>
            <button>INDEPENDENT</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LiveQuiz;