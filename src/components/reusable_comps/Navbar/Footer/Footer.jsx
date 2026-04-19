export default function Footer() {
  return (
    <footer className="books-footer" aria-label="Page footer">
        <div className="books-footer__line" />
        <p className="books-footer__text">
          &copy; {new Date().getFullYear()} &nbsp;·&nbsp; The Wizarding World of Harry Potter
        </p>
    </footer>
  );
}
