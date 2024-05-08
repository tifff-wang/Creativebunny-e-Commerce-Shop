import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSelector'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../../Utils/Stripe/Stripe.utils'
import StripeForm from './StripeForm'
import { Link } from 'react-router-dom'
import { totalPrice } from '../../Store/Cart/cartSelector'
import './StripePayment.styles.scss'

const StripePayment = () => {
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
        </>
    )
}

export default StripePayment
