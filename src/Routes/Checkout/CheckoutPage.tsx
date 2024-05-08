import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import StripePayment from '../../Components/Stripe-form/StripePayment'
import './CheckoutPage.styles.scss'
import ShippingForm from '../../Components/Checkout/ShippingForm'
import { currentCheckoutDeliveryStatus } from '../../Store/Checkout/checkoutSelector'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const isDeliverySaved = useSelector(currentCheckoutDeliveryStatus)

    return (
        <div className="checkout-page-container">
            <div className="checkout-summary">
                <h2 className="cart-summary-text">Cart Summary</h2>
                <CheckoutTable canChangeQty={false} />
            </div>
            <div className="stripe-payment">
                <ShippingForm />
                {isDeliverySaved && <StripePayment />}
            </div>
        </div>
    )
}

export default CheckoutPage
