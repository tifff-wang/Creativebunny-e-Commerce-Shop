import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import StripePayment from '../../Components/Stripe-form/StripePayment'
import ShippingForm from '../../Components/Checkout/ShippingForm'
import { currentCheckoutDeliveryStatus } from '../../Store/Checkout/checkoutSelector'
import { useSelector } from 'react-redux'
import './CheckoutPage.styles.scss'

const CheckoutPage = () => {
    const isDeliverySaved = useSelector(currentCheckoutDeliveryStatus)

    return (
        <div className="checkout-page-container">
            <div className="cart-summary">
                <h2 className="cart-summary-text">1. Cart Summary</h2>
                <CheckoutTable canChangeQty={false} />
            </div>
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
        </div>
    )
}

export default CheckoutPage
