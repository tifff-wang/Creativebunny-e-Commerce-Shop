import { useState } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocument,
} from '../../Utils/Firebase/Firebase.utils'
import React from 'react'


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
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <label>Email</label>
                <input
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <label>Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm
