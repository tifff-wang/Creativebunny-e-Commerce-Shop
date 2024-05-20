import React from 'react'
import './NavBar.styles.scss'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { signOutAuthUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/Cart-icon/CartIcon'
import CartDropdown from '../../Components/Cart/CartDropdown'
import { CartDropdownOpenStatus } from '../../Store/Cart/cartSelector'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCurrentUser, setCurrentUser } from '../../Store/User/userSlice'
import Button from '../../Components/Button/Button'
import { FaUser } from 'react-icons/fa'

const NavBar = () => {
    const currentUser = useSelector(selectedCurrentUser)
    const firstName = currentUser?.displayName.split(' ')[0]
    const cartDropdownOpen = useSelector(CartDropdownOpenStatus)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = async () => {
        try {
            await signOutAuthUser()
            dispatch(setCurrentUser(null))
            navigate('/auth')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src="/images/logo.webp" alt="homepage link" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/products">
                        <span>Category</span>
                    </Link>

                    {currentUser ? (
                        <div className="current-user-container">
                            <div className="username">
                                <FaUser />
                                <span className="nav-link">
                                    Welcome {firstName}
                                </span>
                            </div>
                            <CartIcon />
                            <Button buttonType="inverted" onClick={handleClick}>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="current-user-container">
                            <CartIcon />
                            <Button
                                buttonType="default"
                                onClick={() => navigate('/auth')}
                            >
                                SIGN IN
                            </Button>
                        </div>
                    )}
                </div>
                {cartDropdownOpen && <CartDropdown />}
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
