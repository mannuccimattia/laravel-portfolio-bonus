import React from 'react'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-black shadow-sm">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="">
            <div class="logo-mm w-100">
              logo
            </div>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Left Side Of Navbar --> */}
            <ul class="navbar-nav me-auto">
            </ul>

            {/* <!-- Right Side Of Navbar --> */}
            <ul class="navbar-nav ml-auto">
              {/* <!-- Authentication Links --> */}
              <li class="nav-item">
                <a class="nav-link" href="{{ url('/') }}">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
