import SignUpForm from '../../Components/Auth-forms/SignUpForm'
import SignInForm from '../../Components/Auth-forms/SignInForm'
import React from 'react'
import "./AuthPage.styles.scss"

const AuthPage = () => {
   
    return (
        <>
            <div className="auth-forms-container">
                <SignInForm />
                <SignUpForm />
            </div>
        </>
    )
}

export default AuthPage
