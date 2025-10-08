import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – John Doe</title>
        <meta name="description" content="Formulaire de contact et coordonnées : adresse, téléphone, email et Google Map." />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <SectionTitle title="Contact" subtitle="Pour me contacter en vue d’un entretien, merci de remplir le formulaire." />
          <div className="row g-4">
            {/* Formulaire (tous obligatoires) */}
            <div className="col-lg-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-3">Formulaire de contact</h3>
                  <form onSubmit={(e) => e.preventDefault()} noValidate>
                    <div className="mb-3">
                      <label className="form-label">Votre nom</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Votre adresse email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Votre numéro de téléphone</label>
                      <input type="tel" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Sujet</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Votre message</label>
                      <textarea rows="5" className="form-control" required></textarea>
                    </div>
                    <button className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
              </div>
            </div>

            {/* Coordonnées + Google Map */}
            <div className="col-lg-6">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-3">Mes coordonnées</h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1"><i className="bi bi-building me-2"></i>John Doe</li>
                    <li className="mb-1"><i className="bi bi-geo-alt me-2"></i>40 rue Laure Diebold, 69009 Lyon, France</li>
                    <li className="mb-1"><i className="bi bi-telephone me-2"></i>10 20 30 40 50</li>
                    <li className="mb-1"><i className="bi bi-envelope me-2"></i>john.doe@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div className="ratio ratio-4x3 shadow-sm rounded overflow-hidden">
                <iframe
                  title="Google Maps - 40 rue Laure Diebold, 69009 Lyon"
                  src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                  loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
