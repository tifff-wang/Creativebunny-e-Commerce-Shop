import React, { useContext } from 'react'
import './NavBar.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/User.context'
import { signOutAuthUser } from '../../Utils/Firebase/Firebase.utils'

const NavBar = () => {
    const { currentUser } = useContext(UserContext)
    const handleClick = async () => {
        try {
            await signOutAuthUser()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src="/images/logo.webp" alt="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/toys">
                        TOYS
                    </Link>
                    {currentUser ? (
                        <p className="nav-link" onClick={handleClick}>
                            LOGOUT
                        </p>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar
