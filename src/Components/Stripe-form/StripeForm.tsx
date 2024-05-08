import React, { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../Button/Button'
import './StripeForm.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../Store/Cart/cartSlice'
import CartItem from '../Cart/CartItem'
import { selectedCartItems } from '../../Store/Cart/cartSelector'

const StripeForm = () => {
    const stripe = useStripe()
    const dispatch = useDispatch()
    const elements = useElements()
    const cartItems = useSelector(selectedCartItems)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsProcessing(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`,
            },
        })

        if (error) {
            alert(error.message)
        } 

        setIsProcessing(false)
    }

    return (
        <div className="stripe-form-container">
            <form className="stripe-form" onSubmit={handleSubmit}>
                <h2>Pay with Stripe</h2>
                <div className="stripe-inputs-container">
                    <PaymentElement className="stripe-card" />
                    <Button buttonType="inverted">
                        {isProcessing ? 'Proseccing...' : 'Pay Now'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default StripeForm
