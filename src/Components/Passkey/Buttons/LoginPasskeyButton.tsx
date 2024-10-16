import React, { useState } from 'react'
import Button from '../../Button/Button'
import { loginPasskey } from '../../../Utils/Passkeys/Passkey.utils'
import useUserNavigate from '../../../Hooks/useUserNavigate'
import { GoPasskeyFill } from 'react-icons/go'
import Spinner from '../../Shared/Spinner'

interface LoginPasskeyButtonProps {
    setErrorMessage: (message: string) => void
}

const LoginPasskeyButton = ({ setErrorMessage }: LoginPasskeyButtonProps) => {
    const [loading, setLoading] = useState(false)
    const userNavigate = useUserNavigate()
    const loginWithPasskey = async () => {
        setLoading(true)
        try {
            await loginPasskey()
            setLoading(false)
            userNavigate()
        } catch (error) {
            setLoading(false)
            if (error.name === 'NotAllowedError') {
                return
            } else {
                setErrorMessage(
                    'Oops, something went wrong, try other sign-in options'
                )
            }
        }
    }

    return (
        <>
            <Button
                buttonType="passkey"
                type="button"
                onClick={loginWithPasskey}
            >
                <GoPasskeyFill size={20} />
                {loading ? 'Loading' : 'Sign In With Passkey'}
            </Button>

            {loading && <Spinner>Verifying your passkey...</Spinner>}
        </>
    )
}

export default LoginPasskeyButton
