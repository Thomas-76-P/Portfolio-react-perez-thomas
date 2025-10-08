import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle.jsx';

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales – John Doe</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Mentions légales : éditeur, hébergeur et crédits." />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <SectionTitle title="Mentions légales" />

          <div className="accordion" id="ml-accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="mlediteur">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditeur" aria-expanded="true" aria-controls="collapseEditeur">
                  Éditeur du site
                </button>
              </h2>
              <div id="collapseEditeur" className="accordion-collapse collapse show" aria-labelledby="mlediteur" data-bs-parent="#ml-accordion">
                <div className="accordion-body">
                  John Doe – 40 rue Laure Diebold, 69009 Lyon, France – 10 20 30 40 50 – john.doe@gmail.com
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="mlhost">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHost" aria-expanded="false" aria-controls="collapseHost">
                  Hébergeur
                </button>
              </h2>
              <div id="collapseHost" className="accordion-collapse collapse" aria-labelledby="mlhost" data-bs-parent="#ml-accordion">
                <div className="accordion-body">
                  alwaysdata – 91 Rue du Faubourg Saint-Honoré, 75008 Paris – <a href="https://www.alwaysdata.com" target="_blank" rel="noopener nofollow">www.alwaysdata.com</a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="mlcredits">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredits" aria-expanded="false" aria-controls="collapseCredits">
                  Crédits
                </button>
              </h2>
              <div id="collapseCredits" className="accordion-collapse collapse" aria-labelledby="mlcredits" data-bs-parent="#ml-accordion">
                <div className="accordion-body">
                  Images : <a href="https://pixabay.com" target="_blank" rel="noopener nofollow">Pixabay</a> (libres de droits).<br />
                  Favicon : <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener nofollow">Flaticon – John Doe</a>.<br />
                  Site développé avec React et Bootstrap.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
