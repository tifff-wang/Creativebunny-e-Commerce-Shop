import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import './ViewCartPage.styles.scss'
import { Link } from 'react-router-dom'

const ViewCartPage = () => {
    return (
        <>
            <div className="cart-container">
                <Link className="continue-shopping" to="/products">
                    continue shopping
                </Link>
                <CheckoutTable />
            </div>
        </>
    )
}

export default ViewCartPage
