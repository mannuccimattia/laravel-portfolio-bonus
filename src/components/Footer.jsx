import React from 'react'

const Footer = () => {
  return (
    <footer>
      <nav className="navbar navbar-expand-md navbar-dark bg-black shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="">
            <div className="logo-mm w-100">
              logo
            </div>
          </a>

          <ul className="navbar-nav ml-auto">
            {/* <!-- Authentication Links --> */}
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/') }}">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/') }}">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{{ url('/') }}">Home</a>
            </li>
          </ul>

        </div>
      </nav>
    </footer>
  )
}

export default Footer
