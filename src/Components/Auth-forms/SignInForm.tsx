import React, { useState } from 'react'
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../Utils/Firebase/Firebase.utils'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import './SignInForm.styles.scss'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [errorMessage, setErrorMessage] = useState('')
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
            navigate(-1)
        } catch (error) {
            if ((error as any).code === 'auth/invalid-credential') {
                setErrorMessage('Incorrect password')
            } else if ((error as any).code === 'auth/user-not-found') {
                setErrorMessage('Can not find the email, please sign up')
            } else {
                setErrorMessage(
                    'Oops, something went wrong, please try again later'
                )
            }
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
        navigate(-1)
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign In</p>
            {!errorMessage || (
                <p className="signin-error-message">{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <div className="buttons-container">
                    <Button buttonType="inverted" type="submit">
                        Sign In
                    </Button>
                    <Button
                        buttonType="google"
                        type="button"
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
