import React from 'react'
import './PasskeyCard.styles.scss'
import RegisterPasskeyButton from './Buttons/RegisterPasskeyButton'

const PasskeyRegisterCard = ({ onSuccess }) => {
    return (
        <div className="passkey-container">
            <div className="passkey-card">
                <h3>Passwordless sign-in with passkeys</h3>
                <p>
                    Passkeys are WebAuthn credentials that authenticate your
                    identity through biometric methods like fingerprint.
                    Passkeys offer a simple and safe way to sign in, replacing
                    traditional passwords and other two-factor authentication
                    options.
                </p>
                <RegisterPasskeyButton onSuccess={onSuccess} />
            </div>
        </div>
    )
}

export default PasskeyRegisterCard
