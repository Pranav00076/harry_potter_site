import React from "react";
import Navbar from "../reusable_comps/Navbar/Navbar";
import "./News.css";
import { Link } from "react-router-dom";

// ─── News Grid Data ────────────────────────────────────────────────────────────
const newsItems = [
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/1AZPXufu0p0NU64alYKfdZ/f64527991f35be924d6f66778f616217/harajuku-shop-header-web-landscape.png",
    title: "The first official Harry Potter flagship shop is coming to London",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/CwiYzZBhNlGxJhn3XsAm4/abb499f79ffa0c6dfed2528dc23faa2e/wbstl-key-art-textless-summer-feature-2026-web-landscape.png",
    title:
      "Warner Bros. Studio Tour London announce their brand-new summer feature: First Year at Hogwarts",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/PRnSrQI6DSnreGbNivpgg/22094275a96c31fe6dacd98d20ad7ebe/butterbeer-season-2026-gte-tankards-web-landscape.png",
    title: "All the ways you can celebrate Butterbeer Season in 2026",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/4jN8jFkxtRslkzs1rSwJoz/a71d82cce7fddbe0162aba0365ea346e/comet-older-trio-harry-ron-hermione-web-landscape.png",
    title:
      "Your exclusive first listen as a new Harry, Ron and Hermione join Harry Potter: The Full-Cast Editions",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/4X7fYveLKESCjbobiAIhaZ/e6d64ddf1e6645150def109c1c9143c4/WBSTL-mastering-the-magic-fabric-samples-web-lanscape.png",
    title:
      "Uncover the magic of costume creation as Warner Bros. Studio Tour London announces new workshop",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/7sFbCWSKhDgJ80b9Mcf6FT/b0b85f929ac475e1141b540b18b0d24c/pocket-potters-hagrid-and-dobby-covers-web-landscape.png",
    title: "Two new titles are coming to the Pocket Potters series: Hagrid and Dobby",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/1Os02So7uA6Sy6qosA4GW8/e2eddeb8f7e2785e734d1b4bd386257e/Palace_Ext-8.jpg",
    title:
      "Celebrating 10 years in the West End — Harry Potter and the Cursed Child announces exciting reimagined production",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    title: "How we're celebrating 25 years of Harry Potter film magic in 2026",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/7phphrUicsElPz1i480Xn7/626a628c727f3596ff355d665816aaa4/lego-2026-releases-hospital-wing-web-landscape.jpg",
    title: "Harry Potter LEGO sets revealed for 2026",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const News = () => {
  return (
    <div className="news-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="news-hero">
        <div className="news-hero__overlay" />
        <div className="news-hero__content">
          <h1 className="news-hero__title">News</h1>
          <p className="news-hero__subtitle">
            Get the latest Harry Potter news here. Faster than an owl and more
            accurate than the Daily Prophet.
          </p>
        </div>
      </section>

      {/* ── Feature Spotlight ── */}
      <section className="news-spotlight">
        <div className="news-spotlight__inner">
          <div className="news-spotlight__image-wrap">
            <img
              src="https://contentful.harrypotter.com/usf1vwtuqyxm/4WpyqmCI7d7XOc3NaPrmQX/9399b0bff79c4082d1a4886e44f9552f/hbo-teaser-homepage-hero.jpg"
              alt="HBO Harry Potter Series Teaser"
              className="news-spotlight__img"
              onError={(e) => {
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg";
              }}
            />
          </div>
          <div className="news-spotlight__body">
            <span className="news-spotlight__tag">Feature Spotlight</span>
            <h2 className="news-spotlight__title">
              Watch the first teaser for HBO's original Harry Potter series
              premiering Christmas 2026
            </h2>
            <p className="news-spotlight__desc">
              Wands at the ready! It's time to step into the magic once more as
              HBO Max have released the official teaser for the first season of
              the upcoming original Harry Potter television series!
            </p>
            <p className="news-spotlight__author">
              By The Harry Potter Editorial Team
            </p>

            <Link to="https://www.harrypotter.com/news">
              <button className="news-btn-outline">Read Feature</button>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Two Side-by-Side Articles ── */}
      <section className="news-duo">
        <div className="news-duo__grid">
          <article className="news-duo__card">
            <div className="news-duo__img-wrap">
              <img
                src="https://contentful.harrypotter.com/usf1vwtuqyxm/2jC5VWyKmIRoMtT2GQ8iUy/54c22281fef1e96f85fa316b46f3406e/ALT_HBO_Announce_-_Web_Support_Homepage_Article_Hero_Desktop__1_.jpg"
                alt="HBO Harry Potter casting"
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg";
                }}
              />
            </div>
            <div className="news-duo__body">
              <span className="news-duo__tag">News</span>
              <h3 className="news-duo__title">
                HBO's Harry Potter television series confirms casting of
                Hogwarts students
              </h3>
              <p className="news-duo__author">
                By The Harry Potter Editorial Team
              </p>
            </div>
          </article>

          <article className="news-duo__card">
            <div className="news-duo__img-wrap">
              <img
                src="https://contentful.harrypotter.com/usf1vwtuqyxm/7x71q0GI5AMVhlwe3W9wGJ/f7bb6dd1eab31cad5b81805732c068b9/half-blood-prince-illustrated-edition-cover-reveal-teaser-web-landscape.png"
                alt="Half-Blood Prince Illustrated Edition"
                onError={(e) => {
                  e.target.src =
                    "https://covers.openlibrary.org/b/id/8234272-L.jpg";
                }}
              />
            </div>
            <div className="news-duo__body">
              <span className="news-duo__tag">News</span>
              <h3 className="news-duo__title">
                The spectacular cover and artwork of Harry Potter and the
                Half-Blood Prince Illustrated Edition has been revealed
              </h3>
              <p className="news-duo__author">
                By The Harry Potter Editorial Team
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="news-divider" aria-hidden="true">
        <span />
        <span className="news-divider__diamonds">◆ ◆ ◆</span>
        <span />
      </div>

      {/* ── More to Explore Grid ── */}
      <section className="news-grid-section">
        <div className="news-grid-section__header">
          <h2 className="news-grid-section__title">More to explore</h2>
        </div>
        <div className="news-grid">
          {newsItems.map((item, i) => (
            <article key={i} className="news-card">
              <div className="news-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-card__img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg";
                  }}
                />
              </div>
              <div className="news-card__body">
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__author">
                  By The Harry Potter Editorial Team
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
