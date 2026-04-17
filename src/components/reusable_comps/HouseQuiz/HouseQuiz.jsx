import React from "react";
import "./HouseQuiz.css";

const houses = [
  { name: "Gryffindor", percent: 26, className: "gryffindor", letter: "G" },
  { name: "Ravenclaw", percent: 27, className: "ravenclaw", letter: "R" },
  { name: "Hufflepuff", percent: 25, className: "hufflepuff", letter: "H" },
  { name: "Slytherin", percent: 22, className: "slytherin", letter: "S" },
];

const quizzes = [
  {
    title:
      "Can you complete this Harry Potter and the Philosopher’s Stone behind-the-scenes quiz?",
    level: 2,
    questions: 10,
    image: "/images/quiz1.jpg",
  },
  {
    title: "Can you guess the Slytherin from these emojis?",
    level: 2,
    questions: 10,
    image: "/images/quiz2.jpg",
  },
  {
    title: "Can you complete this quickfire Voldemort quiz?",
    level: 3,
    questions: 10,
    image: "/images/quiz3.jpg",
  },
];

const HouseQuiz = () => {
  return (
    <div className="hq-container">
      {/* TOP */}
      <div className="hq-top">
        <div className="hq-houses">
          <div className="sorted-label">SORTED TODAY</div>

          {houses.map((house, i) => (
            <div key={house.name} className="hq-house">
              <div className={`hq-banner ${house.className}`}>
                <div className="hq-banner-inner">{house.letter}</div>
              </div>

              <p className="hq-house-name">{house.name}</p>
              <p className="hq-percent">{house.percent}%</p>
            </div>
          ))}
        </div>

        <div className="hq-cta-box">
          <h2>WHAT’S YOUR HOGWARTS HOUSE?</h2>
          <button>GET SORTED NOW</button>
        </div>
      </div>

      {/* QUIZZES */}
      <div className="hq-quizzes">
        <h3>✦ QUIZZES ✦</h3>

        <div className="hq-grid">
          {quizzes.map((quiz, i) => (
            <div key={i} className="hq-card">
              <img src={quiz.image} alt="" />

              <div className="hq-overlay">
                <p>{quiz.title}</p>

                <div className="hq-meta">
                  <span>{"⭐".repeat(quiz.level)}</span>
                  <span>{quiz.questions} Questions</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hq-seeall">SEE ALL QUIZZES</div>
      </div>
    </div>
  );
};

export default HouseQuiz;
