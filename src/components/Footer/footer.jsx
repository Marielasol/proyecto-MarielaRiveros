import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Obsesivas Shop. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/contacto">Ubicacion - contacto</a>
        </div>
      </div>
    </footer>
  );
}