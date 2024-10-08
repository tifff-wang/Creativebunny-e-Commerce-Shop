import React from 'react'
import './PasskeyRegisterSuccessModal.styles.scss'

const PasskeyRegisterSuccessModal = ({ onClose }) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Passkey added successfully! 🔑</h3>
                <p>You can now use passkey as your sign in option next time.</p>
                <button className="go-back-link" onClick={onClose}>
                    Go back my profile
                </button>
            </div>
        </div>
    )
}

export default PasskeyRegisterSuccessModal
