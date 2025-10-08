import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Services() {
  const items = [
    { icon: 'bi-pen', title: 'UX Design', desc: "Conception centrée utilisateur pour des interfaces fluides." },
    { icon: 'bi-code-slash', title: 'Développement web', desc: "Sites modernes et performants (React, APIs, etc.)." },
    { icon: 'bi-search', title: 'Référencement', desc: "SEO on-page pour gagner en visibilité." },
  ];

  return (
    <>
      <Helmet>
        <title>Services – John Doe</title>
        <meta name="description" content="Offre de services : UX, développement web, référencement." />
      </Helmet>

      <div className="bg-banner py-5"></div>

      <section className="py-5">
        <div className="container">
          <SectionTitle title="Mon offre de services" subtitle="Voici les prestations sur lesquelles je peux intervenir" />
          <div className="row g-4">
            {items.map(s => (
              <div className="col-md-4" key={s.title}>
                <div className="card card-hover h-100 text-center p-4">
                  <div className="display-5 text-primary mb-3"><i className={`bi ${s.icon}`}></i></div>
                  <h3 className="h5 fw-bold">{s.title}</h3>
                  <p className="mb-0 text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
