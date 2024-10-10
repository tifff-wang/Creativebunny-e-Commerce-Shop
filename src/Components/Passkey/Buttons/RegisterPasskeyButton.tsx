import React, { useState } from 'react'
import Button from '../../Button/Button'
import { registerPasskey } from '../../../Utils/Passkeys/Passkey.utils'

const RegisterPasskeyButton = ({ onSuccess }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const createPasskey = async () => {
        try {
            await registerPasskey()
            onSuccess()
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                return
            } else {
                setErrorMessage("Oops, something went wrong, please try again later")
            }
        }
    }

    return (
        <>
            <Button buttonType="passkey" type="button" onClick={createPasskey}>
                Register a Passkey
            </Button>
            {!errorMessage || (
                <p className="signin-error-message">{errorMessage}</p>
            )}
        </>
    )
}

export default RegisterPasskeyButton
