export default function Hero() {
  return (
    <header className="hero d-flex align-items-center text-center text-white">
      <div className="container hero-content">
        <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="h3 fw-semibold mt-2">Développeur web full-stack</h2>
        <button className="btn btn-danger btn-lg mt-4" data-bs-toggle="modal" data-bs-target="#githubModal">
          En savoir plus
        </button>
      </div>
    </header>
  );
}
