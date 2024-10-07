import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectedCurrentUser } from '../../Store/User/userSelector'
import CartIconWithDropdown from '../../Components/Cart/CartIconWithDropdown'
import ProfileDropdown from '../../Components/NavBar/ProfileDropdown'

const NavLinks = () => {
    const currentUser = useSelector(selectedCurrentUser)
    return (
        <div className="nav-links-container">
            <Link className="nav-link" to="/products">
                <span>Category</span>
            </Link>
            <CartIconWithDropdown />

            {currentUser ? (
                <ProfileDropdown userName={currentUser.displayName} />
            ) : (
                <Link className="sign-in-link" to="/auth">
                    SIGN IN
                </Link>
            )}
        </div>
    )
}

export default NavLinks
