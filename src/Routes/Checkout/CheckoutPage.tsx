import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import './CheckoutPage.styles.scss'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return (
        <>
            <div className="checkout-container">
                <Link className="continue-shopping" to="/toys">continue shopping</Link>
                <CheckoutTable />
            </div>
        </>
    )
}

export default CheckoutPage
