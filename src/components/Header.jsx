import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">JOHN DOE</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item"><NavLink end to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></li>
            <li className="nav-item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            <li className="nav-item"><NavLink to="/mentions-legales" className="nav-link">Mentions légales</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
