import './BookCard.css';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <article className="book-card" style={{ '--card-accent': book.color }}>
      {/* Ambient glow behind cover */}
      <div className="book-card__glow" aria-hidden="true" style={{ background: book.color }} />

      {/* Cover */}
      <div className="book-card__cover-wrap">
        <img
          src={book.cover}
          alt={`Cover of ${book.title}`}
          className="book-card__cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/300x450/0d0d2b/c9a84c?text=Book+${book.id}`;
          }}
        />
        <div className="book-card__cover-shine" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="book-card__body">
        <p className="book-card__number">{book.number}</p>
        <h2 className="book-card__title">{book.title}</h2>
        <p className="book-card__desc">{book.description}</p>

        <button
          className="book-card__btn"
          aria-label={`Explore ${book.title}`}
          type="button"
        >

          <Link to="https://www.harrypotter.com/discover/books">
            <span className="book-card__btn-text">Explore</span>
          </Link>
          
          <svg
            className="book-card__btn-arrow"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Corner ornaments */}
      <div className="book-card__corner book-card__corner--tl" aria-hidden="true" />
      <div className="book-card__corner book-card__corner--tr" aria-hidden="true" />
      <div className="book-card__corner book-card__corner--bl" aria-hidden="true" />
      <div className="book-card__corner book-card__corner--br" aria-hidden="true" />
    </article>
  );
}
