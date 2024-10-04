import React from 'react'
import Button from '../Button/Button'
import { signInWithGooglePopup } from '../../Utils/Firebase/Firebase.utils'
import useUserNavigate from '../../Hooks/useUserNavigate'

interface LoginGoogleButtonProps {
    setErrorMessage: (message: string) => void
}

const LoginGoogleButton = ({ setErrorMessage }: LoginGoogleButtonProps) => {
    const userNavigate = useUserNavigate()
    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup()
            userNavigate()
        } catch (error) {
            setErrorMessage(
                'Oops, something went wrong, please try again later'
            )
        }
    }
    return (
        <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Sign In With Google
        </Button>
    )
}

export default LoginGoogleButton
