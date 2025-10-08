import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Home() {
  const [gh, setGh] = useState(null);


  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then(r => r.json())
      .then(setGh)
      .catch(() => setGh(null));
  }, []);

  return (
    <>
      <Helmet>
        <title>Accueil – John Doe</title>
        <meta name="description" content="Développeur web full-stack : présentation, compétences et services." />
      </Helmet>

      <Hero />


      <section className="py-5">
        <div className="container">
          <div className="bg-white shadow-sm rounded p-4 p-md-5">
            <div className="row g-4 align-items-start">
              <div className="col-md-6">
                <SectionTitle title="À propos" />
                <div className="row g-3">
                  <div className="col-sm-5">
                    <img src="../public/img/about.jpg" alt="John Doe" className="img-fluid rounded" />
                  </div>
                  <div className="col-sm-7">
                    <p>
                      Je suis John Doe, développeur web full-stack. J’aime concevoir des sites modernes,
                      accessibles et performants. Je recherche une alternance pour poursuivre ma progression.
                    </p>
                    <p className="mb-0">
                      HTML, CSS, JavaScript, React, Node & bases de données font partie de mon quotidien.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <SectionTitle title="Mes compétences" />
                {[
                  ['HTML5', 90],
                  ['CSS3', 80],
                  ['JavaScript', 70],
                  ['PHP', 60],
                  ['React', 50],
                ].map(([label, val]) => (
                  <div className="mb-3" key={label}>
                    <div className="d-flex justify-content-between">
                      <small className="fw-semibold">{label}</small>
                      <small>{val}%</small>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow={val} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{ width: `${val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <div id="modal-root">

      </div>

      <div className="modal fade" id="githubModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mon profil GitHub</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              {!gh ? (
                <p className="mb-0">Chargement…</p>
              ) : (
                <div className="row g-4 align-items-center">
                  <div className="col-md-4 text-center">
                    <img src={gh.avatar_url} alt="Avatar GitHub" className="img-fluid rounded" />
                  </div>
                  <div className="col-md-8">
                    <p className="mb-1"><i className="bi bi-person me-2"></i>
                      <a href={gh.html_url} target="_blank" rel="noopener nofollow">{gh.name || gh.login}</a>
                    </p>
                    {gh.location && <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>{gh.location}</p>}
                    {gh.bio && <p className="mb-3"><i className="bi bi-card-text me-2"></i>{gh.bio}</p>}
                    <ul className="list-unstyled mb-0">
                      <li><i className="bi bi-box-seam me-2"></i>Repositories : {gh.public_repos}</li>
                      <li><i className="bi bi-people me-2"></i>Followers : {gh.followers}</li>
                      <li><i className="bi bi-person-check me-2"></i>Following : {gh.following}</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
