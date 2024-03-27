import React, { useState } from 'react'
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../Utils/Firebase/Firebase.utils'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import './SignInForm.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
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
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            ) 
            resetFormFields()
        } catch (error) {
            if ((error as any).code === 400) {
                alert('Incorrect password')
            } else if ((error as any).code === 'auth/user-not-found') {
                alert('Can not find the email, please sign up')
            } else {
                console.log('Something went wrong')
            }
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign In</p>
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
                        Sign Up With Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
