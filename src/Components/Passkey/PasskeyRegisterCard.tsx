import React from 'react'
import './PasskeyCard.styles.scss'
import RegisterPasskeyButton from './RegisterPasskeyButton'

const PasskeyRegisterCard = () => {
    return (
        <div className="passkey-container">
            <div className="passkey-card">
                <h3>Passwordless sign-in with passkeys</h3>
                <p>
                    Passkeys are webauthn credentials that validate your
                    identity using touch. They can be used as a password replacement or as a
                    2FA method. Passkeys can be used for sign-in as a simple and
                    secure alternative to your password and two-factor
                    credentials.
                </p>
                <RegisterPasskeyButton />
                
            </div>
        </div>
    )
}

export default PasskeyRegisterCard
