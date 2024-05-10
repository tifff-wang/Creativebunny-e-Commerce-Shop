import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import StripePayment from '../../Components/Stripe-form/StripePayment'
import ShippingForm from '../../Components/Checkout/ShippingForm'
import { currentCheckoutDeliveryStatus } from '../../Store/Checkout/checkoutSelector'
import { useSelector } from 'react-redux'
import './CheckoutPage.styles.scss'
import { Link } from 'react-router-dom'
import { selectedCurrentUser } from '../../Store/User/userSelector'

const CheckoutPage = () => {
    const currentUser = useSelector(selectedCurrentUser)
    const isDeliverySaved = useSelector(currentCheckoutDeliveryStatus)
    console.log(isDeliverySaved)

    return (
        <div className="checkout-page-container">
            <div className="cart-summary">
                <h2 className="cart-summary-text">1. Cart Summary</h2>
                <CheckoutTable canChangeQty={false} />
            </div>

            {currentUser ? (
                <div className="delivery-info">
                    <ShippingForm />
                    <h2
                        className="cart-summary-text"
                        style={{ opacity: isDeliverySaved ? '1' : '0.3' }}
                    >
                        3. Payment
                    </h2>
                    {isDeliverySaved && <StripePayment />}
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
    )
}

export default CheckoutPage
