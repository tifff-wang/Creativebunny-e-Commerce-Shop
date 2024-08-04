import React from 'react'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import useSignOut from '../../Hooks/useSignout'
import { Link, Outlet } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import Button from '../../Components/Button/Button'

const AdminNavBar = () => {
    const currentUser = useSelector(selectedCurrentUser)
    const firstName = currentUser?.displayName.split(' ')[0]
    const signout = useSignOut()

    return (
        <>
            <nav className="navigation">
                <Link className="logo-container" to="/admin">
                    <img
                        className="logo"
                        src="/images/logo.webp"
                        alt="homepage link"
                    />
                </Link>
                <div className="nav-links-container">
                    {currentUser ? (
                        <div className="current-user-container">
                            <Link className="nav-link" to="/admin/products">
                                <span>Products</span>
                            </Link>
                            <Link className="nav-link" to="/admin/orders">
                                <span>Orders</span>
                            </Link>
                            <div className="username">
                                <FaUser />
                                <span className="nav-link">Admin</span>
                            </div>

                            <Button
                                buttonType="inverted"
                                onClick={() => signout('/auth')}
                            >
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="current-user-container">
                            <Link className="sign-in-link" to="/auth">
                                SIGN IN
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default AdminNavBar
