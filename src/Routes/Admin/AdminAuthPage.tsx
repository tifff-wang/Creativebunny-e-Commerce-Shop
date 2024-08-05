import React from 'react'
import SignInForm from '../../Components/Auth-forms/SignInForm'
import SignUpForm from '../../Components/Auth-forms/SignUpForm'

const AdminAuthPage = () => {
    return (
        <>
            <div className="auth-forms-container">
                <SignInForm role="admin" />
            </div>
        </>
    )
}

export default AdminAuthPage
