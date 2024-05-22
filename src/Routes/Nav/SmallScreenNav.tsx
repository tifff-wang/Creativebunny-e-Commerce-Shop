import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartIcon from '../../Components/Cart-icon/CartIcon'
import { FaUser } from 'react-icons/fa'
import CartDropdown from '../../Components/Cart/CartDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { CartDropdownOpenStatus } from '../../Store/Cart/cartSelector'
import { selectedCurrentUser } from '../../Store/User/userSelector'
import { signOutAuthUser } from '../../Utils/Firebase/Firebase.utils'
import { setCurrentUser } from '../../Store/User/userSlice'
import './SmallScreenNav.styles.scss'
import useClickOutside from '../../Hooks/useClickOutside'

const SmallScreenNav = () => {
    const cartDropdownOpen = useSelector(CartDropdownOpenStatus)
    const currentUser = useSelector(selectedCurrentUser)
    const [userIconOpen, setUserIconOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const handleClick = async () => {
        try {
            await signOutAuthUser()
            dispatch(setCurrentUser(null))
            navigate('/auth')
            setUserIconOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    useClickOutside(dropdownRef, () => setUserIconOpen(false))
    
    return (
        <div className="simple-nav-container">
            <Link className="nav-link" to="/products">
                <span>Category</span>
            </Link>

            <CartIcon />
            <FaUser size={16} onClick={() => setUserIconOpen(!userIconOpen)} />
            {userIconOpen && (
                <div className="user-profile" ref={dropdownRef}>
                    {currentUser ? (
                        <div onClick={handleClick}>Log out</div>
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

            {cartDropdownOpen && <CartDropdown />}
        </div>
    )
}

export default SmallScreenNav
