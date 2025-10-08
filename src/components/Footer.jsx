export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Col 1 */}
          <div className="col-md-4">
            <h5 className="fw-bold">John Doe</h5>
            <address className="mb-2">
              40 rue Laure Diebold<br />69009 Lyon, France
            </address>
            <p className="mb-2">10 20 30 40 50<br />john.doe@gmail.com</p>
            <div className="d-flex gap-3 footer-social">
              <a href="https://github.com/Thomas-76-P" target="_blank" rel="noopener nofollow" aria-label="GitHub">
                <i className="bi bi-github fs-4"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener nofollow" aria-label="Twitter">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener nofollow" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Me contacter</a></li>
              <li><a href="/mentions-legales">Mentions légales</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Mes dernières réalisations</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/portfolio">Fresh Food</a></li>
              <li><a href="/portfolio">Restaurant Akira</a></li>
              <li><a href="/portfolio">Espace bien-être</a></li>
              <li><a href="/portfolio">SEO</a></li>
              <li><a href="/portfolio">Création d'une API</a></li>
              <li><a href="/portfolio">Maquette d'un site</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-secondary mt-4 small">
          © {new Date().getFullYear()} John Doe – Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
