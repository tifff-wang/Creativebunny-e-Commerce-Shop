import React, { useEffect, useState } from 'react'
import Button from '../../Button/Button'
import { registerPasskey } from '../../../Utils/Passkeys/Passkey.utils'
import { platformAuthenticatorIsAvailable } from '@simplewebauthn/browser'
import Spinner from '../../Shared/Spinner'

const RegisterPasskeyButton = ({ onSuccess }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [passkeyAvailable, setPasskeyAvailable] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const checkPasskeyAvailability = async () => {
            const result = await platformAuthenticatorIsAvailable()
            setPasskeyAvailable(result)
        }

        checkPasskeyAvailability()
    }, [])

    const createPasskey = async () => {
        if (passkeyAvailable) {
            setLoading(true)
            try {
                await registerPasskey()
                onSuccess()
                setLoading(false)
            } catch (error) {
                setLoading(false)
                if (error.name === 'NotAllowedError') {
                    return
                } else {
                    setErrorMessage(
                        'Oops, something went wrong, please try again later'
                    )
                }
            }
        } else {
            setErrorMessage(
                'Passkey registration is not supported on your current device. Please try using a device with biometric authentication capabilities, such as a smartphone or a laptop with a fingerprint scanner or facial recognition.'
            )
        }
    }

    return (
        <>
            <Button buttonType="passkey" type="button" onClick={createPasskey}>
                Register a Passkey
            </Button>
            {loading && <Spinner>Preparing passkey registration...</Spinner>}
            {!errorMessage || (
                <p className="signin-error-message">{errorMessage}</p>
            )}
        </>
    )
}

export default RegisterPasskeyButton
