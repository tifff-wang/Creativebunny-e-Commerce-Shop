import React, { FormEvent, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../Button/Button'
import './StripeForm.styles.scss'
import { currentDeliveryInfoStatus } from '../../Store/Checkout/checkoutSelector'
import { selectedCurrentUser } from '../../Store/User/userSelector'
import { selectedCartItems, totalPrice } from '../../Store/Cart/cartSelector'
import { OrderModel } from '../../Model/OrderModel'
import { createOrderDocuments } from '../../Utils/Firebase/Firebase.utils'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const StripeForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [isProcessing, setIsProcessing] = useState(false)
    const currentDeliveryInfo = useSelector(currentDeliveryInfoStatus)
    const currentUser = useSelector(selectedCurrentUser)
    const currentTotalPrice = useSelector(totalPrice)
    const orderItems = useSelector(selectedCartItems)
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsProcessing(true)

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`,
            },
            redirect: 'if_required',
        })

        if (error) {
            alert(error.message)
            setIsProcessing(false)
            return
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            if (currentDeliveryInfo && currentUser) {
                const order: OrderModel = {
                    id: uuid(),
                    orderItems,
                    deliveryInfo: currentDeliveryInfo,
                    userId: currentUser.uid,
                    deliveryStatus: 'pending',
                    totalPrice: currentTotalPrice,
                    paymentIntent: paymentIntent.id,
                }

                createOrderDocuments(order)
            }
            navigate('/completion')
        } else {
            console.log('Payment failed')
        }

        setIsProcessing(false)
    }

    return (
        <div className="stripe-form-container">
            <form className="stripe-form" onSubmit={handleSubmit}>
                <div className="stripe-inputs-container">
                    <PaymentElement className="stripe-card" />
                    <Button buttonType="default">
                        {isProcessing ? 'Processing...' : 'Pay Now'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default StripeForm
