import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Navbar from "../reusable_comps/Navbar/Navbar";

const Homepage = () => {
    const [activeHouse, setActiveHouse] = useState(null);

    const playSound = (type) => {
        const audio = new Audio(`https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3`); // Magic swoosh
        audio.volume = 0.3;
        audio.play().catch(() => { });
    };

    const houses = [
        { id: 'gryffindor', name: 'Gryffindor', color: '#740001', icon: '' },
        { id: 'ravenclaw', name: 'Ravenclaw', color: '#0e1a40', icon: '🦅' },
        { id: 'hufflepuff', name: 'Hufflepuff', color: '#ecb939', icon: '🦡' },
        { id: 'slytherin', name: 'Slytherin', color: '#1a472a', icon: '🐍' },
    ];

    return (
        <div className="homepage">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero">
                <video autoPlay loop muted className="hero-video">
                    <source src="https://videos.ctfassets.net/usf1vwtuqyxm/7pB9lO2mE8q7G9/d3c1c1c1c1c1c1c1/hero_smoke_desktop.mp4" type="video/mp4" />
                </video>
                <div className="hero-content">
                    <h1>Harry Potter and the Half-Blood Prince (Full-Cast Edition) is out now</h1>
                    <p>You can now listen to the first ever full-cast audiobook of Half-Blood Prince. Featuring a powerhouse ensemble of over 200 performers...</p>
                    <button className="btn-primary" onClick={() => playSound('magic')}>Listen Now</button>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="feature-grid">
                <div className="feature-card">
                    <img src="https://media.gettyimages.com/id/2209876216/photo/the-exhibition-in-poland.jpg?s=1024x1024&w=gi&k=20&c=55-EZExcverl2q9yDnALG8b8kTAKTFVzZ3DcTglHmFg=" alt="Revelio Secrets" />
                    <div className="card-overlay">
                        <span>Revelio Secrets!</span>
                        <h3>Explore the scenes behind the magic</h3>
                    </div>
                </div>
                <div className="feature-card poll-card glass">
                    <div className="poll-content">
                        <span className="poll-tag">Poll</span>
                        <h2>What do you think is Harry's strongest trait?</h2>
                        <div className="poll-options">
                            <button>Brave</button>
                            <button>Loyal</button>
                            <button>Resilient</button>
                            <button>Modest</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* House Sorting */}
            <section className="house-sorting">
                <div className="sorting-bg"></div>
                <div className="sorting-content">
                    <h2>What's your Hogwarts House?</h2>
                    <div className="house-grid">
                        {houses.map(house => (
                            <div
                                key={house.id}
                                className={`house-shield ${activeHouse === house.id ? 'active' : ''}`}
                                style={{ '--house-color': house.color }}
                                onMouseEnter={() => {
                                    setActiveHouse(house.id);
                                    playSound('hover');
                                }}
                                onMouseLeave={() => setActiveHouse(null)}
                                onClick={() => playSound('magic')}
                            >
                                <div className="shield-icon"><img src={house.icon} /></div>
                                <span>{house.name}</span>
                            </div>
                        ))}
                    </div>
                    <button className="btn-primary">Get Sorted Now</button>
                </div>
            </section>

            {/* Quizzes Section */}
            <section className="quizzes-section">
                <div className="section-header">
                    <span className="dot-line"></span>
                    <h2>Quizzes</h2>
                    <span className="dot-line"></span>
                </div>
                <div className="quiz-grid">
                    {[
                        { title: "Can you complete the Harry Potter and the Philosopher's Stone book/film comparisons?", time: "5 min", color: "#0e1a40" },
                        { title: "Can you guess the Professor from these quotes?", time: "3 min", color: "#1a472a" },
                        { title: "Can you identify the potion from the description?", time: "4 min", color: "#740001" }
                    ].map((quiz, i) => (
                        <div key={i} className="quiz-card" style={{ borderColor: quiz.color }}>
                            <div className="quiz-image-placeholder"></div>
                            <div className="quiz-info">
                                <i className="fas fa-bolt" style={{ color: quiz.color }}></i>
                                <h3>{quiz.title}</h3>
                                <span>Approx {quiz.time} read</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn-outline">More Quizzes</button>
            </section>

            {/* News Feature: Butterbeer */}
            <section className="news-banner banner-butterbeer">
                <div className="banner-image">
                    <img src="https://images.ctfassets.net/usf1vwtuqyxm/3nZzLpLqY4W6oI0k2uUq6S/8d1d1d1d1d1d1d/butterbeer_season.jpg" alt="Butterbeer" />
                </div>
                <div className="banner-content">
                    <h2>Bring your wizarding portrait into butterbeer season</h2>
                    <p>Treat your portrait to some delicious Butterbeer... plus access rewards and more with the Harry Potter Fan Club.</p>
                    <button className="btn-outline">Join the club</button>
                </div>
            </section>

            {/* News Feature: HBO Series */}
            <section className="news-banner banner-hbo reverse">
                <div className="banner-content">
                    <h2>Get the latest news from the Harry Potter HBO original series</h2>
                    <p>Find out everything we know about the expanded stories of the Harry Potter books coming to HBO.</p>
                    <button className="btn-outline">Read more</button>
                </div>
                <div className="banner-image">
                    <img src="https://images.ctfassets.net/usf1vwtuqyxm/4ZXZXZXZXZ/hbo_series_cast.jpg" alt="HBO Series" />
                </div>
            </section>

            {/* Quidditch Collection */}
            <section className="collection-carousel">
                <h2>Explore the Quality Quidditch Supplies Collection</h2>
                <p>A celebration of the legendary Wizarding World shop, featuring a new selection of broomsticks...</p>
                <div className="carousel-track">
                    {/* Items here */}
                </div>
                <button className="btn-outline">Go to collection</button>
            </section>

            {/* Discovery Section */}
            <section className="discovery-section">
                <div className="section-header">
                    <span className="dot-line"></span>
                    <h2>Discover the Wizarding World</h2>
                    <span className="dot-line"></span>
                </div>
                <div className="discovery-grid">
                    {/* Discover cards */}
                </div>
            </section>

            {/* Monthly Picks */}
            <section className="picks-section">
                <div className="section-header">
                    <span className="dot-line"></span>
                    <h2>Monthly Magical Picks</h2>
                    <span className="dot-line"></span>
                </div>
                <div className="picks-grid">
                    {['Ron Weasley', 'Butterbeer', 'Sybill Trelawney', 'Remus Lupin'].map(name => (
                        <div key={name} className="pick-card">
                            <div className="pick-image"></div>
                            <h3>{name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer glass">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="https://www.wizardingworld.com/pf/resources/images/logos/hp-logo.svg" alt="HP Logo" />
                    </div>
                    <nav className="footer-nav">
                        <a href="#">About Us</a>
                        <a href="#">Help Center</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <p>Copyright &copy; J.K. Rowling/Wizarding World Digital. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;