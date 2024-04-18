import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import './CheckoutPage.styles.scss'
import { Link } from 'react-router-dom'
import StripeForm from '../../Components/Stripe-form/StripeForm'

const CheckoutPage = () => {
    return (
        <>
            <div className="checkout-container">
                <Link className="continue-shopping" to="/toys">continue shopping</Link>
                <CheckoutTable />
                <StripeForm />
            </div>
        </>
    )
}

export default CheckoutPage
