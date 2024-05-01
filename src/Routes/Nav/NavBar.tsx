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

const NavBar = () => {
    const currentUser = useSelector(selectedCurrentUser)
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
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src="/images/logo.webp" alt="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/products">
                        PRODUCTS
                    </Link>
                    <CartIcon />
                    {currentUser ? (
                        <Button buttonType="default" onClick={handleClick}>
                            LOGOUT
                        </Button>
                    ) : (
                        <Button
                            buttonType="inverted"
                            onClick={() => navigate('/auth')}
                        >
                            SIGN IN
                        </Button>
                    )}
                </div>
                {cartDropdownOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default NavBar
