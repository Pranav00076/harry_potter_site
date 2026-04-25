import React, { useState, useEffect } from 'react';
import './SortingChat.css';

const SortingChat = () => {
  const [step, setStep] = useState(0); 
  const [scores, setScores] = useState({ Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 });
  const [result, setResult] = useState(null);

  const questions = [
    {
      q: "You are walking alone at night and hear a cry for help coming from a restricted, dangerous area. What is your first thought?",
      options: [
        { text: "Rush in immediately without a second thought.", house: "Gryffindor" },
        { text: "Quickly assess the risks and look for a teacher or a safer strategy.", house: "Ravenclaw" },
        { text: "Approach cautiously, ensuring you don't leave until the person is safe.", house: "Hufflepuff" },
        { text: "Consider if it’s a trap and whether helping benefits or endangers your own goals.", house: "Slytherin" }
      ]
    },
    {
      q: "Which of these skills would you most like to master to ensure your future success?",
      options: [
        { text: "The art of dueling and physical bravery.", house: "Gryffindor" },
        { text: "The ability to speak every language and know all history.", house: "Ravenclaw" },
        { text: "The power to heal others and build a perfect community.", house: "Hufflepuff" },
        { text: "The gift of persuasion and the ability to influence powerful people.", house: "Slytherin" }
      ]
    },
    {
      q: "You find a mysterious trunk in the attic. Which item inside catches your eye first?",
      options: [
        { text: "A glowing, silver sword with a ruby-encrusted hilt.", house: "Gryffindor" },
        { text: "An ancient, enchanted telescope that maps the stars.", house: "Ravenclaw" },
        { text: "A simple, worn-out compass that always points toward home.", house: "Hufflepuff" },
        { text: "A heavy gold signet ring that whispers secrets when worn.", house: "Slytherin" }
      ]
    },
    {
      q: "In a dark forest, you encounter a Boggart. What is the most likely form it takes?",
      options: [
        { text: "Being frozen by fear and unable to act.", house: "Gryffindor" },
        { text: "Being proven wrong or appearing ignorant in front of peers.", house: "Ravenclaw" },
        { text: "Being cast out and ignored by your friends and family.", house: "Hufflepuff" },
        { text: "Being ordinary, forgotten, and having no legacy.", house: "Slytherin" }
      ]
    },
    {
      q: "A mysterious potion-maker offers you a vial. Which scent do you smell coming from the steam?",
      options: [
        { text: "The crackling of a log fire and crisp mountain air.", house: "Gryffindor" },
        { text: "The smell of fresh parchment and old library ink.", house: "Ravenclaw" },
        { text: "The scent of home-cooked bread and blooming wildflowers.", house: "Hufflepuff" },
        { text: "The smell of expensive leather and sea salt.", house: "Slytherin" }
      ]
    }
  ];

  const handleChoice = (house) => {
    const newScores = { ...scores, [house]: scores[house] + 1 };
    setScores(newScores);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const winner = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
      setResult(winner);
    }
  };

  return (
    <div className="sorting-page">
      <div className="sorting-card">
        <div className="sorting-card__header">
          <div className="diamond-divider">◆ ◆ ◆</div>
          <h1 className="sorting-card__title">The Sorting Ceremony</h1>
        </div>

        <div className="chat-body">
          {result ? (
            <div className="chat-result fade-in">
              <p className="result-label">The Hat deliberates and shouts...</p>
              <h2 className={`result-house ${result.toLowerCase()}`}>{result.toUpperCase()}!</h2>
              <button className="gold-outline-btn" onClick={() => window.location.reload()}>Try Again</button>
            </div>
          ) : (
            <div className="chat-question-wrap">
              <p className="chat-question">"{questions[step].q}"</p>
              <div className="options-container">
                {questions[step].options.map((opt, i) => (
                  <button 
                    key={i} 
                    className="option-button" 
                    onClick={() => handleChoice(opt.house)}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortingChat;