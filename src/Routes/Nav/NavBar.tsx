import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./NavBar.styles.scss"

const NavBar = () => {
  return (
      <>
          <div className="navigation">
              <Link className="logo-container" to="/">
                  <img
                      className="logo"
                      src="/images/logo.webp"
                      alt="logo"
                  />
              </Link>

              <div className="nav-links-container">
                  <Link className="nav-link" to="/toys">
                      TOYS
                  </Link>
                  <Link className="nav-link" to="/signIn">
                      SIGN IN
                  </Link>
              </div>
          </div>
          <Outlet />
      </>
  )
}

export default NavBar