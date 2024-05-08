import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import StripePayment from '../../Components/Stripe-form/StripePayment'
import "./CheckoutPage.styles.scss"

const CheckoutPage = () => {
  return (
      <div className="checkout-page-container">
          <div className="checkout-summary">
            <h2>Cart Summary</h2>
              <CheckoutTable canChangeQty={false} />
          </div>
          <div className="stripe-payment">
              <StripePayment />
          </div>
      </div>
  )
}

export default CheckoutPage