import React, { useState } from 'react'
import Button from '../Button/Button'
import { registerPasskey } from '../../Utils/Passkeys/Passkey.utils'
import { useNavigate } from 'react-router-dom'

const RegisterPasskeyButton = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const createPasskey = async () => {
        try {
            await registerPasskey()
            navigate('/profile')
        } catch (error) {
            setErrorMessage(error.message)
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
