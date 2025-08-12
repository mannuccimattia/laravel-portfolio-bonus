import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-black shadow-sm">
        <div className="container">
          <div className="navbar-brand d-flex align-items-center" onClick={() => navigate("/")}>
            <div className="logo-mm">
              <img src="\mm-basic.png" className='img-fluid rounded-circle' alt="website logo" />
              <span className="ps-2 fw-light fs-5 display-6">
                mannuccimattia
              </span>
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link" onClick={() => navigate("/")}>Home</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => navigate("/projects")}>Projects</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
