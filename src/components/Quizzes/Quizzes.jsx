import React from "react";
import Navbar from "../reusable_comps/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Quizzes.css";

// ─── Featured Quiz ─────────────────────────────────────────────────────────────
const featuredQuiz = {
  image:
    "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
  title: "The Riddikulus-ly easy Marauders quiz",
  description:
    "From nicknames to Hogwarts houses, how well do you know this ragtag group of friends? Test your Marauder knowledge in our criminally easy quiz.",
};

// ─── Secondary Row ─────────────────────────────────────────────────────────────
const secondaryQuizzes = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/35/Harry_Potter_and_the_Chamber_of_Secrets_%28film%29.jpg",
    title: "The wizarding world pub quiz",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
    title: "Can you tell if these Remus Lupin facts are true or false?",
  },
];

// ─── Quiz Grid Data ────────────────────────────────────────────────────────────
const quizItems = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    title: "Can you match the magical plant to its description?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
    title: "Can you guess the Hufflepuff from these emojis?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg",
    title: "Do you know these characters' opening lines from the first Harry Potter film?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
    title: "Can you spot the differences between the Harry Potter books and films?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.jpg",
    title: "Can you name a Harry Potter character for every letter of the alphabet?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/35/Harry_Potter_and_the_Chamber_of_Secrets_%28film%29.jpg",
    title: "Can you name the Gryffindor from their Hogwarts school report?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    title: "Can you match the magical creature to its description?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
    title: "Which Defence Against the Dark Arts professor are you?",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
    title: "Can you guess the Harry Potter character from three clues?",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const Quizzes = () => {
  return (
    <div className="qz-page">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="qz-hero">
        <div className="qz-hero__overlay" />
        <div className="qz-hero__content">
          <h1 className="qz-hero__title">Quizzes</h1>
          <p className="qz-hero__subtitle">
            Put your wizarding knowledge to the test with curious quizzes for
            all levels. Novices can try our trivial challenges for beginners,
            while the superstars among you can test their mettle with our
            ultimate quizzes.
          </p>
        </div>
      </section>

      {/* ── Main content on cream background ── */}
      <div className="qz-body">

        {/* ── Latest & Greatest ── */}
        <section className="qz-latest">
          <h2 className="qz-section-title">Latest &amp; greatest</h2>

          {/* Feature Spotlight — large image with overlapping dark card */}
          <div className="qz-spotlight">
            <div className="qz-spotlight__img-wrap">
              <img
                src={featuredQuiz.image}
                alt={featuredQuiz.title}
                className="qz-spotlight__img"
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg";
                }}
              />
            </div>
            {/* Overlapping dark card — positioned over the right portion of the image */}
            <div className="qz-spotlight__card">
              <span className="qz-spotlight__tag">Feature Spotlight</span>
              <h3 className="qz-spotlight__card-title">{featuredQuiz.title}</h3>
              <p className="qz-spotlight__card-desc">{featuredQuiz.description}</p>
              <p className="qz-spotlight__card-author">By The Harry Potter Editorial Team</p>
              <Link to="/SortingHat">
                <button className="qz-take-btn">Take Quiz</button>
              </Link>
            </div>
          </div>

          {/* Secondary duo row */}
          <div className="qz-duo">
            {secondaryQuizzes.map((quiz, i) => (
              <article key={i} className="qz-duo__item">
                <div className="qz-duo__img-wrap">
                  <img
                    src={quiz.image}
                    alt={quiz.title}
                    className="qz-duo__img"
                    onError={(e) => {
                      e.target.src =
                        "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg";
                    }}
                  />
                </div>
                <div className="qz-duo__info">
                  <h3 className="qz-duo__title">{quiz.title}</h3>
                  <p className="qz-duo__author">By The Harry Potter Editorial Team</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Dot Divider ── */}
        <div className="qz-dot-divider" aria-hidden="true">· · ·</div>

        {/* ── More to Explore ── */}
        <section className="qz-more">
          <h2 className="qz-section-title">More to explore</h2>
          <div className="qz-grid">
            {quizItems.map((item, i) => (
              <article key={i} className="qz-card">
                <div className="qz-card__img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="qz-card__img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg";
                    }}
                  />
                </div>
                <div className="qz-card__info">
                  <h3 className="qz-card__title">{item.title}</h3>
                  <p className="qz-card__author">By The Harry Potter Editorial Team</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Quizzes;
