import React, { useState, useContext } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocument,
} from '../../Utils/Firebase/Firebase.utils'
import { UserContext } from '../../Contexts/User.context'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import './SignUpForm.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {
            const { user } =
                (await createAuthUserWithEmailAndPassword(email, password)) ||
                {}

            if (!user) {
                throw new Error('User not found')
            }
            await createUserDocument(user, { displayName })
            resetFormFields()
        } catch (error) {
            if ((error as any).code === 'auth/email-already-in-use') {
                alert('Email aleary exists, please sign in')
            } else {
                console.log(error)
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <p>Sign up</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                    required
                />

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

                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <Button buttonType="default" type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm
