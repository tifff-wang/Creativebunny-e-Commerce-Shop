import React from 'react'
import RegisterPasskeyButton from '../../Components/Passkey/RegisterPasskeyButton'
import './UserProfilePage.style.scss'

const UserProfilePage = () => {
    return (
        <section className="passkey-register-container">
            {' '}
            <RegisterPasskeyButton />
            
        </section>
    )
}

export default UserProfilePage
