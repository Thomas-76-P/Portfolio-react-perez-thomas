import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Portfolio() {
  const projects = [
    { img: '../public/img/portfolio/portfolio3.jpg', title: 'Fresh Food', tech: 'PHP + MySQL' },
    { img: '../public/img/portfolio/portfolio2.jpg', title: 'Restaurant Akira', tech: 'WordPress' },
    { img: '../public/img/portfolio/portfolio4.jpg', title: 'Espace bien-être', tech: 'Laravel' },
    { img: '../public/img/portfolio/portfolio5.jpg', title: 'SEO', tech: 'Outils SEO' },
    { img: '../public/img/portfolio/portfolio6.jpg', title: 'Création d’une API', tech: 'PHP + Symfony' },
    { img: '../public/img/portfolio/portfolio1.jpg', title: 'Maquette d’un site', tech: 'Figma' },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio – John Doe</title>
        <meta name="description" content="Découvrez mes réalisations : au moins 6 projets présentés en cartes." />
      </Helmet>

      <div className="bg-banner py-5"></div>

      <section className="py-5">
        <div className="container">
          <SectionTitle title="Portfolio" subtitle="Voici quelques-unes de mes réalisations" />
          <div className="row g-4">
            {projects.map(p => (
              <div className="col-md-4" key={p.title}>
                <div className="card card-hover h-100">
                  <img src={p.img} className="card-img-top" alt={p.title} />
                  <div className="card-body">
                    <h3 className="h5 card-title">{p.title}</h3>
                    <p className="card-text text-muted small mb-3">Site réalisé avec {p.tech}</p>
                    <a className="btn btn-primary btn-portfolio" href="/portfolio" onClick={e => e.preventDefault()}>
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
