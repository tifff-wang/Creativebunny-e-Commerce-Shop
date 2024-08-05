import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocument,
    updateUserProfile,
} from '../../Utils/Firebase/Firebase.utils'
import FormInput from '../Form-input/FormInput'
import Button from '../Button/Button'
import './SignUpForm.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../Store/User/userSlice'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
interface SignUpFormProps {
    role: 'admin' | 'user'
}

const SignUpForm = ({ role }: SignUpFormProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [errorMessage, setErrorMessage] = useState('')
    const { displayName, email, password, confirmPassword } = formFields
    const [loading, setLoading] = useState(false)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setErrorMessage('')

        if (password !== confirmPassword) {
            setErrorMessage('passwords do not match')
            return
        }

        setLoading(true)
        try {
            const additionalInformation = { displayName, role }
            const { user } =
                (await createAuthUserWithEmailAndPassword(
                    email,
                    password,
                    additionalInformation
                )) || {}

            if (!user) {
                throw new Error('User not found')
            }

            await updateUserProfile(displayName)
            await createUserDocument(user, { displayName })
            dispatch(setCurrentUser({ ...user, role }))
            resetFormFields()
            navigate(-1)
        } catch (error) {
            if ((error as any).code === 'auth/email-already-in-use') {
                setErrorMessage('Email aleady exists, please sign in')
            } else if ((error as any).code === 'auth/invalid-email') {
                setErrorMessage('Please provide a valid email')
            } else if ((error as any).code === 'auth/weak-password') {
                setErrorMessage(
                    'Invalid password. Password should be at least 6 characters.'
                )
            } else {
                setErrorMessage(
                    'Oops, something went wrong, please try again later'
                )
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>
                {role === 'user'
                    ? "Don't have an account?"
                    : 'Create an admin account'}
            </h2>
            <p>Sign up</p>
            {!errorMessage || (
                <p className="signin-error-message">{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    id="displayName-input"
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Email"
                    id="signin-email-input"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Password"
                    id="signin-password-input"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <Button buttonType="default" type="submit" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm
