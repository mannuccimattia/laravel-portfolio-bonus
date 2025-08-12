import React from 'react'

const Footer = () => {
  return (
    <footer>
      <nav class="navbar navbar-expand-md navbar-dark bg-black shadow-sm">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="">
            <div class="logo-mm w-100">
              logo
            </div>
          </a>

          <ul class="navbar-nav ml-auto">
            {/* <!-- Authentication Links --> */}
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/') }}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/') }}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/') }}">Home</a>
            </li>
          </ul>

        </div>
      </nav>
    </footer>
  )
}

export default Footer
