import React, { useContext, useState } from 'react'
import './NavBar.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../Contexts/User.context'
import { signOutAuthUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/Cart-icon/CartIcon'
import CartDropdown from '../../Components/Cart/CartDropdown'
import { CartContext } from '../../Contexts/Cart.context'

const NavBar = () => {
    const { currentUser } = useContext(UserContext)
    const { cartDropdownOpen} = useContext(CartContext)
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

                    <CartIcon/>
                </div>
                {cartDropdownOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default NavBar
