import React from 'react'
import Button from '../Button/Button'
import { loginPasskey } from '../../Utils/Passkeys/Passkey.utils'
import useUserNavigate from '../../Hooks/useUserNavigate'

interface LoginPasskeyButtonProps {
    setErrorMessage: (message: string) => void
}

const LoginPasskeyButton = ({ setErrorMessage }: LoginPasskeyButtonProps) => {
    const userNavigate = useUserNavigate()
    const loginWithPasskey = async () => {
        try {
            await loginPasskey()
            userNavigate()
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <Button
                buttonType="passkey"
                type="button"
                onClick={loginWithPasskey}
            >
                Sign In With Passkey
            </Button>
        </>
    )
}

export default LoginPasskeyButton
