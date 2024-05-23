import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSelector'
import CartIconWithDropdown from '../../Components/Cart/CartIconWithDropdown'
import useClickOutside from '../../Hooks/useClickOutside'
import useSignOut from '../../Hooks/useSignout'

const SmallScreenNavLinks = () => {
    const currentUser = useSelector(selectedCurrentUser)
    const [userIconOpen, setUserIconOpen] = useState(false)
    const profileDropdownRef = useRef<HTMLDivElement | null>(null)
    const signout = useSignOut()

    useClickOutside(profileDropdownRef, () => setUserIconOpen(false))

    return (
        <div className="simple-nav-container">
            <Link className="nav-link" to="/products">
                <span>Category</span>
            </Link>

            <CartIconWithDropdown />
            <FaUser size={16} onClick={() => setUserIconOpen(!userIconOpen)} />
            {userIconOpen && (
                <div className="user-profile" ref={profileDropdownRef}>
                    {currentUser ? (
                        <div onClick={()=>signout("/auth")}>Log out</div>
                    ) : (
                        <div>
                            <Link
                                to="/auth"
                                onClick={() => setUserIconOpen(false)}
                            >
                                Sign in
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SmallScreenNavLinks
