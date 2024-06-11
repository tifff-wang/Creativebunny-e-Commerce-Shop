import React from 'react'
import CheckoutTable from '../../Components/Checkout/CheckoutTable'
import './ViewCartPage.styles.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import { selectedCartItems } from '../../Store/Cart/cartSelector'
import { useSelector } from 'react-redux'

const ViewCartPage = () => {
    const navigate = useNavigate()
    const currentCartItems = useSelector(selectedCartItems)
    return (
        <>
            <div className="cart-container">
                <Link className="continue-shopping" to="/products">
                    Continue shopping
                </Link>
                <CheckoutTable canChangeQty={true} />

                {currentCartItems.length > 0 && (
                    <Button
                        buttonType="default"
                        onClick={() => navigate('/cart/checkout')}
                    >
                        Check Out
                    </Button>
                )}
            </div>
        </>
    )
}

export default ViewCartPage
