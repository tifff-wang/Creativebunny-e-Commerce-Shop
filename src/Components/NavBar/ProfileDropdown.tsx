import React, { useEffect, useRef, useState } from 'react'
import useSignOut from '../../Hooks/useSignout'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import useClickOutside from '../../Hooks/useClickOutside'
import './ProfileDropdown.styles.scss'

interface ProfileDropdownProps {
    userName: string
}
const ProfileDropdown = ({ userName }: ProfileDropdownProps) => {
    const firstName = userName.split(' ')[0]
    const [userIconOpen, setUserIconOpen] = useState(false)
    const signout = useSignOut()
    const profileDropdownRef = useRef<HTMLDivElement | null>(null)
    useClickOutside(profileDropdownRef, () => setUserIconOpen(false))

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="profile-dropdown-container" ref={profileDropdownRef}>
            <div
                className="profile-icon"
                onClick={() => setUserIconOpen(!userIconOpen)}
            >
                <FaUser />
                {!isSmallScreen && (
                    <span className="nav-link">Welcome {firstName}</span>
                )}
            </div>
            {userIconOpen && (
                <div className="profile-dropdown">
                    <Link to="/profile">Profile</Link>
                    <div onClick={() => signout('/auth')}>Log out</div>
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown
