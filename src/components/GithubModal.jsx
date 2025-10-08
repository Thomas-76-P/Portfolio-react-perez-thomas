export default function GithubModal({ profile }) {
  return (
    <div className="modal fade" id="githubModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>

          <div className="modal-body">
            {!profile ? (
              <p className="mb-0">Chargement…</p>
            ) : (
              <div className="row g-4 align-items-center">
                <div className="col-md-4 text-center">
                  <img src={profile.avatar_url} alt="Avatar GitHub" className="img-fluid rounded" />
                </div>
                <div className="col-md-8">
                  <p className="mb-1"><i className="bi bi-person me-2"></i>
                    <a href={profile.html_url} target="_blank" rel="noopener nofollow">
                      {profile.name || profile.login}
                    </a>
                  </p>
                  {profile.location && <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>{profile.location}</p>}
                  {profile.bio && <p className="mb-3"><i className="bi bi-card-text me-2"></i>{profile.bio}</p>}

                  <ul className="list-unstyled mb-0">
                    <li><i className="bi bi-box-seam me-2"></i>Repositories : {profile.public_repos}</li>
                    <li><i className="bi bi-people me-2"></i>Followers : {profile.followers}</li>
                    <li><i className="bi bi-person-check me-2"></i>Following : {profile.following}</li>
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
  );
}
