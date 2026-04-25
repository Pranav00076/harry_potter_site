import React from "react";
import Navbar from "../reusable_comps/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Quizzes.css";

// ─── Featured Quiz ─────────────────────────────────────────────────────────────
const featuredQuiz = {
  image:
    "https://contentful.harrypotter.com/usf1vwtuqyxm/7EF7yVJFv9CiftkEIIo6qQ/3ecd51ee09410af0caf3354622c7294b/dark-train-photography-minerva-mcgonagall-web.png",
  title: "The ultimate Hogwarts Professors quiz",
  description:
    "From Transfiguration to Defence Against the Dark Arts, how well do you know the brilliant (and sometimes dangerous) professors of Hogwarts?",
};

// ─── Secondary Row ─────────────────────────────────────────────────────────────
const secondaryQuizzes = [
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/YvfQFf3Sc7Y1rQNcmqoKm/7278f0704d0a659047a66375127ed129/pottermore-moments-three-broomsticks-homepage-hero.jpg",
    title: "The wizarding world pub quiz",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/7fP2y9bIoBRBz43NyZmMub/9f34e0be3b968eded60637866f58a4a9/lupinb.png",
    title: "Can you tell if these Remus Lupin facts are true or false?",
  },
];

// ─── Quiz Grid Data ────────────────────────────────────────────────────────────
const quizItems = [
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/453RU8jagilaTcIJOWUzLW/767316cfb03c87c560b165552c75d4fe/mary-grandpre-chamber-of-secrets-pixies-dada-lesson-web.png",
    title: "Can you pass your O.W.L. in Defence Against the Dark Arts?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/3yiKkJCfohV5EVbYsCbNv3/bfee8c7e69f1c66e3df9bb50e1a5ea3e/hp-f2-sprout-greenhouse-mandrake-app-article-hero.jpg",
    title: "Can you guess the Hufflepuff from these emojis?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/5zfvnVTVPa1H2SJJT2e8V7/45080c622d247cd9044acf92e02c3760/HP-F1-philosophers-stone-hogwarts-great-lake-web-landscape.jpg",
    title: "Do you know these characters' opening lines from the first Harry Potter film?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/3UhqhFHDW3if0AqCUscXoq/21430571adbe201dca249363d10b24c0/fred_george_old.png",
    title: "Can you spot the differences between Fred and George?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/177FgF8r43RLqkcMzGPHQo/fe943b84e7cca54559a8b4ff4d30bf2a/WB-F3-trelawney-in-divination-web-landscape__1_.jpg",
    title: "Can you remember Sybill Trelawney's weirdest predictions?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/7hq0yzhC3mnJWKGYy5R45s/0b7a621198e7ff6e55bd6126e0d64b6e/HP6D-08842r_GRYFFINDOR.jpg",
    title: "Can you guess the Gryffindor from these emojis?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/1ciQISb1SPcgnY0Q6FwTwj/1c5d1b491460ef5364a4f23303844388/harry-ron-hermione-web-header.jpg",
    title: "Can you tell if this was Ron Weasley or Hermione Granger?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/3uQ06WdfBYc5S47wChuAXQ/e27d67861a8f800a55ecd3d7d124a301/hp-f5-luna-carriage-quibbler-square-HP5D-14916-_1_.jpg",
    title: "Can you guess the Ravenclaw from these emojis?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/5BJmfHQVf3NJYlAhwiYuS3/b7b0954a4d1258d0ca48124b9049be56/WB-HP-F6-ron-and-chocolate-cauldrons-spiked-with-love-potion.jpg",
    title: "Can you beat our quickfire Harry Potter romance quiz?",
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
                    "https://mlpnoq1hotss.i.optimole.com/cb:6w_Z.129d6/w:1200/h:675/q:mauto/f:best/ig:avif/https://www.suo.ca/wp-content/uploads/2023/11/HP-Trivia-Part-2-Bounce-1280-x-700-px.png";
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
