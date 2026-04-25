import React from "react";
import Navbar from "../reusable_comps/Navbar/Navbar";
import "./Features.css";
import { Link } from "react-router-dom";

const featuresItems = [
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/453RU8jagilaTcIJOWUzLW/767316cfb03c87c560b165552c75d4fe/mary-grandpre-chamber-of-secrets-pixies-dada-lesson-web.png",
    title: "Do you know what the Hogwarts subjects are known as in other languages?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/4UIk6fl4PYOZavVjiGedlE/75dd27bd2b86b906a7f60c979f461072/WB-HP-F5-order-of-the-phoenix-harry-cho-chang-kiss-room-requirement-web-landscape.jpg",
    title: "What would your Valentine's vibe be based on your Hogwarts house?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/4jN8jFkxtRslkzs1rSwJoz/a71d82cce7fddbe0162aba0365ea346e/comet-older-trio-harry-ron-hermione-web-landscape.png",
    title:
      "Our exclusive interview with the new Harry, Ron and Hermione as they join Harry Potter: The Full-Cast Audio Editions",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/1ciQISb1SPcgnY0Q6FwTwj/1c5d1b491460ef5364a4f23303844388/harry-ron-hermione-web-header.jpg",
    title:
      "Every single thought we had on our Harry Potter and the Philosopher’s Stone rewatch",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/1xcqfUFJ5y6g8sEyEi0OqC/428dfcb3a672b6c873a4c563180e8c79/weasleys_hero.jpg",
    title: "Seven secrets about the Weasley family you probably didn't know",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/35IcDScI1GO8m4wCU2WOsA/60bf298a1646500138836a339f131487/HarryPotter_PM_B4C14M2_HarryGetsOwlDeliverToGryffindorCommonRoom_Moment.jpg",
    title: "Do you know what the Hogwarts houses are called in other languages?",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/7EF7yVJFv9CiftkEIIo6qQ/3ecd51ee09410af0caf3354622c7294b/dark-train-photography-minerva-mcgonagall-web.png",
    title: "Janet McTeer talks about her experience on the set of Harry Potter",
  },
  {
    image:
      "https://contentful.harrypotter.com/usf1vwtuqyxm/5SKciuwLHuVm8gWL4v7H9K/86ae4d47d44bf8c413d292991d68b7cb/comet-trio-warmup-in-recording-booth-thumbnail.png",
    title:
      "An exclusive snippet of the golden trio recording the Harry Potter: Full-Cast Editions",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
    title: "10 of Sybill Trelawney's most unhinged predictions",
  },
];

const Features = () => {
  return (
    <div className="features-page">
      <Navbar />
      <section className="features-hero">
        <div className="features-hero__overlay" />
        <div className="features-hero__content">
          <h1 className="features-hero__title">Features</h1>
          <p className="features-hero__subtitle">
            Explore the magic. Deep dives, lore, and behind-the-scenes secrets
            from the Wizarding World.
          </p>
        </div>
      </section>

      <section className="features-spotlight">
        <div className="features-spotlight__inner">
          <div className="features-spotlight__image-wrap">
            <img
              src="https://contentful.harrypotter.com/usf1vwtuqyxm/0qOJc2c4eEv6ysFjwCvTh/8a52a1125c04b77c46c5c61d28270e82/1200x800.jpg"
              alt="Finding Harry Spotlight"
              className="features-spotlight__img"
              onError={(e) => {
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg";
              }}
            />
          </div>
          <div className="features-spotlight__body">
            <span className="features-spotlight__tag">Feature Spotlight</span>
            <h2 className="features-spotlight__title">
              Our favourite reveals from HBO Max’s Finding Harry: The Craft Behind the Magic
            </h2>
            <p className="features-spotlight__desc">
              The documentary goes behind the scenes of the upcoming Harry Potter television series. Here's a few of our favourite things we learnt from the magical new special.
            </p>
            <p className="features-spotlight__author">
              By The Harry Potter Editorial Team
            </p>
            <Link to="https://www.harrypotter.com/news" className="features-btn-outline">Read Feature</Link>
          </div>
        </div>
      </section>

      <section className="features-duo">
        <div className="features-duo__grid">
          <article className="features-duo__card">
            <div className="features-duo__img-wrap">
              <img
                src="https://contentful.harrypotter.com/usf1vwtuqyxm/YvfQFf3Sc7Y1rQNcmqoKm/7278f0704d0a659047a66375127ed129/pottermore-moments-three-broomsticks-homepage-hero.jpg"
                alt="Pub trivia"
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg";
                }}
              />
            </div>
            <div className="features-duo__body">
              <span className="features-duo__tag">Feature</span>
              <h3 className="features-duo__title">
                Pub trivia: fun facts you did not know about wizarding inns
              </h3>
              <p className="features-duo__author">
                By The Harry Potter Editorial Team
              </p>
            </div>
          </article>

          <article className="features-duo__card">
            <div className="features-duo__img-wrap">
              <img
                src="https://contentful.harrypotter.com/usf1vwtuqyxm/2coqhu0kA4kYwQeY2GUGQi/67ece147513a53568844ec0bb8c7ba96/Ron-and-Hermione-shoud_ve-kissed.jpg"
                alt="Soulmate"
                onError={(e) => {
                  e.target.src =
                    "https://covers.openlibrary.org/b/id/8234272-L.jpg";
                }}
              />
            </div>
            <div className="features-duo__body">
              <span className="features-duo__tag">Feature</span>
              <h3 className="features-duo__title">
                Your birth month tells us your Harry Potter soulmate
              </h3>
              <p className="features-duo__author">
                By The Harry Potter Editorial Team
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="features-divider" aria-hidden="true">
        <span />
        <span className="features-divider__diamonds">◆ ◆ ◆</span>
        <span />
      </div>

      <section className="features-grid-section">
        <div className="features-grid-section__header">
          <h2 className="features-grid-section__title">More to explore</h2>
        </div>
        <div className="features-grid">
          {featuresItems.map((item, i) => (
            <article key={i} className="features-card">
              <div className="features-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="features-card__img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg";
                  }}
                />
              </div>
              <div className="features-card__body">
                <h3 className="features-card__title">{item.title}</h3>
                <p className="features-card__author">
                  By The Harry Potter Editorial Team
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="features-footer">
        <div className="features-footer__line" />
        <p className="features-footer__copy">
          © {new Date().getFullYear()} · The Wizarding World of Harry Potter
        </p>
      </footer>
    </div>
  );
};

export default Features;
