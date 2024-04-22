import React, { useState } from 'react'
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import Button from '../Button/Button'
import './StripeForm.styles.scss'
import { useSelector } from 'react-redux'
import { totalPrice } from '../../Store/Cart/cartSelector'
import { selectedCurrentUser } from '../../Store/User/userSelector'

const StripeForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(totalPrice)
    const currentUser = useSelector(selectedCurrentUser)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const response = await fetch('/api/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => {
            return res.json()
        })

        const clientSecret = response.paymentIntent.client_secret
        const cardElement = elements.getElement(CardElement)

        if (!cardElement) {
            throw new Error('Card element not found')
        }

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: currentUser?.displayName,
                },
            },
        })

        if (paymentResult.error) {
            alert(paymentResult.error.message)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!')
            }
        }
    }

    return (
        <div className="stripe-form-container">
            <form className="stripe-form" onSubmit={handleSubmit}>
                <h2>Pay with Stripe</h2>
                <CardElement className="stripe-card" />
                <Button buttonType="inverted">Pay Now</Button>
            </form>
        </div>
    )
}

export default StripeForm
