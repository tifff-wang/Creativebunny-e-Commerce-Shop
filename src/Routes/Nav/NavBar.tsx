import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import './NavBar.styles.scss'

const NavBar = () => {
    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <img
                        className="logo"
                        src="/images/logo.webp"
                        alt="homepage link"
                    />
                </Link>

                <NavLinks />
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
