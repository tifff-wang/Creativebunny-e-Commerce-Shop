import React, { useState } from 'react'
import Button from '../Button/Button'
import { registerPasskey } from '../../Utils/Passkeys/Passkey.utils'

const RegisterPasskeyButton = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const createPasskey = async () => {
        try {
            await registerPasskey()
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <Button buttonType="default" type="button" onClick={createPasskey}>
                Register Passkey
            </Button>
            {!errorMessage || (
                <p className="signin-error-message">{errorMessage}</p>
            )}
        </>
    )
}

export default RegisterPasskeyButton
