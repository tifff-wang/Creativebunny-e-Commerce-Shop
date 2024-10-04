import React from 'react'
import RegisterPasskeyButton from '../../Components/Passkey/RegisterPasskeyButton'
import './UserProfilePage.style.scss'
import PasskeyCard from '../../Components/Passkey/PasskeyCard'

const UserProfilePage = () => {
    return (
        <section className="passkey-register-container">
            {' '}
            <PasskeyCard />
        </section>
    )
}

export default UserProfilePage
