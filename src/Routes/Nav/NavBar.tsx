import React from 'react'
import './NavBar.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { signOutAuthUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/Cart-icon/CartIcon'
import CartDropdown from '../../Components/Cart/CartDropdown'
import { CartDropdownOpenStatus } from '../../Store/Cart/cartSelector'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSlice'

const NavBar = () => {
    const currentUser = useSelector(selectedCurrentUser)
    const cartDropdownOpen = useSelector(CartDropdownOpenStatus)
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
