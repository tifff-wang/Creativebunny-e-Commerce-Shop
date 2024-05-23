import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NormalScreenNavLinks from './NormalScreenNavLinks'
import SmallScreenNavLinks from './SmallScreenNavLinks'
import './NavBar.styles.scss'

const NavBar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                {isSmallScreen ? (
                    <SmallScreenNavLinks />
                ) : (
                    <NormalScreenNavLinks />
                )}
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
