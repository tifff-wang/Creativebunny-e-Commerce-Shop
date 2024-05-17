import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import './ViewCartPage.styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'

const ViewCartPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="cart-container">
                <Link className="continue-shopping" to="/products">
                    continue shopping
                </Link>
                <CheckoutTable canChangeQty={true} />

                <Button
                    buttonType="default"
                    onClick={() => navigate('/cart/checkout')}
                >
                    Check Out
                </Button>
            </div>
        </>
    )
}

export default ViewCartPage
