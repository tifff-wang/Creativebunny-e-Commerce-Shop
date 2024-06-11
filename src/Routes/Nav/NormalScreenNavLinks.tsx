import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectedCurrentUser } from '../../Store/User/userSelector'
import { FaUser } from 'react-icons/fa'
import CartIconWithDropdown from '../../Components/Cart/CartIconWithDropdown'
import Button from '../../Components/Button/Button'
import useSignOut from '../../Hooks/useSignout'

const NormalScreenNavLinks = () => {
    const currentUser = useSelector(selectedCurrentUser)
    console.log(currentUser?.displayName)
    const firstName = currentUser?.displayName.split(' ')[0]
    const signout = useSignOut()

    return (
        <div className="nav-links-container">
            <Link className="nav-link" to="/products">
                <span>Category</span>
            </Link>

            {currentUser ? (
                <div className="current-user-container">
                    <div className="username">
                        <FaUser />
                        <span className="nav-link">Welcome {firstName}</span>
                    </div>
                    <CartIconWithDropdown />
                    <Button
                        buttonType="inverted"
                        onClick={() => signout('/auth')}
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <div className="current-user-container">
                    <CartIconWithDropdown />
                    <Link className="sign-in-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            )}
        </div>
    )
}

export default NormalScreenNavLinks
