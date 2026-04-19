import { useEffect, useRef } from 'react';
import BookCard from '../BookCard/BookCard';
import Navbar from '../reusable_comps/Navbar/Navbar';
import Footer from '../reusable_comps/Navbar/Footer/Footer';
import './BooksPage.css';

// ─── Book Data ────────────────────────────────────────────────────────────────
const BOOKS = [
  {
    id: 1,
    number: 'Book One',
    title: "Harry Potter and the Philosopher's Stone",
    description:
      'A young boy discovers on his eleventh birthday that he is a wizard, and begins his extraordinary journey at Hogwarts School of Witchcraft and Wizardry.',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
    color: '#8b0000',
  },
  {
    id: 2,
    number: 'Book Two',
    title: 'Harry Potter and the Chamber of Secrets',
    description:
      'Harry returns to Hogwarts for his second year, where a terrifying monster lurks within the walls and students are found petrified.',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
    color: '#1a6b3c',
  },
  {
    id: 3,
    number: 'Book Three',
    title: 'Harry Potter and the Prisoner of Azkaban',
    description:
      'A notorious prisoner escapes from Azkaban fortress and the sinister Dementors are stationed around Hogwarts to guard against him.',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
    color: '#3b5a8a',
  },
  {
    id: 4,
    number: 'Book Four',
    title: 'Harry Potter and the Goblet of Fire',
    description:
      'Harry is mysteriously entered into the dangerous Triwizard Tournament, and the Dark Lord\'s return casts a long shadow over the wizarding world.',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
    color: '#6b3d00',
  },
  {
    id: 5,
    number: 'Book Five',
    title: 'Harry Potter and the Order of the Phoenix',
    description:
      'Harry faces disbelief from the wizarding world, a cruel new teacher at Hogwarts, and growing visions that draw him ever closer to Voldemort.',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
    color: '#1c1c5e',
  },
  {
    id: 6,
    number: 'Book Six',
    title: 'Harry Potter and the Half-Blood Prince',
    description:
      'As war rages on, Dumbledore prepares Harry for the final confrontation, revealing the hidden secrets of Lord Voldemort\'s dark past.',
    cover:
      'https://covers.openlibrary.org/b/id/8234272-L.jpg',
    color: '#2a1a40',
  },
  {
    id: 7,
    number: 'Book Seven',
    title: 'Harry Potter and the Deathly Hallows',
    description:
      'In the breathtaking finale, Harry, Ron, and Hermione set out on a desperate mission to destroy the last of Voldemort\'s Horcruxes.',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
    color: '#4a2800',
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function BooksPage() {
  return (
    <>
      <Navbar />

    <main className="books-page">
      {/* ── Hero Banner ── */}
      <section className="books-hero" aria-label="Hero banner">
        <div className="books-hero__inner">
          <p className="books-hero__eyebrow">The Wizarding World</p>
          <h1 className="books-hero__title">The Books</h1>
          <div className="books-hero__divider" aria-hidden="true">
            <span />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2L13.8 8.2H20.3L15 12.1L16.8 18.2L12 14.3L7.2 18.2L9 12.1L3.7 8.2H10.2L12 2Z"
                fill="#c9a84c"
              />
            </svg>
            <span />
          </div>
          <p className="books-hero__subtitle">
            Seven books. One timeless journey. Begin where it all started.
          </p>
        </div>
        <div className="books-hero__fog" aria-hidden="true" />
      </section>

      {/* ── Book Grid ── */}
      <section className="books-grid-section" aria-label="Book collection">
        <div className="books-grid">
          {BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
