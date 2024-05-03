import React, { useEffect, useState } from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import './CheckoutPage.styles.scss'
import { Link } from 'react-router-dom'
import StripeForm from '../../Components/Stripe-form/StripeForm'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../../Utils/Stripe/Stripe.utils'
import { useSelector } from 'react-redux'
import { totalPrice } from '../../Store/Cart/cartSelector'
import { selectedCurrentUser } from '../../Store/User/userSelector'

const CheckoutPage = () => {
    const [clientSecret, setClientSecret] = useState('')
    const currentUser = useSelector(selectedCurrentUser)
    const amount = useSelector(totalPrice)

    useEffect(() => {
        fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then(async (r) => {
            const data = await r.json()
            if (r.ok) {
                setClientSecret(data.clientSecret)
            } else {
                console.error('Error fetching client secret:', data.error)
            }
        })
    }, [])
    
    return (
        <>
            <div className="checkout-container">
                <Link className="continue-shopping" to="/products">
                    continue shopping
                </Link>
                <CheckoutTable />
                {currentUser ? (
                    <div>
                        {clientSecret ? (
                            <Elements
                                stripe={stripePromise}
                                options={{ clientSecret }}
                            >
                                <StripeForm />
                            </Elements>
                        ) : (
                            <p>Loading payment details...</p>
                        )}
                    </div>
                ) : (
                    <div className="signin-direct-message">
                        Please{' '}
                        <Link className="signin-link" to="/auth">
                            Sign In
                        </Link>{' '}
                        to make the payment
                    </div>
                )}
            </div>
        </>
    )
}

export default CheckoutPage
