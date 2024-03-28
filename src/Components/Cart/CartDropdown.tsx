import { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart.context'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import './CartDropdown.styles.scss'

import React from 'react'
import CartItem from './CartItem'

const CartDropdown = () => {
    const { cartItemList, setCartDropdownOpen } = useContext(CartContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/checkout')
        setCartDropdownOpen(false)
    }
    return (
        <div className="cart-dropdown-container">
            {cartItemList.length > 0 ? (
                <>
                    <div className="cart-items-container">
                        {cartItemList.map((item) => {
                            return <CartItem item={item} />
                        })}
                    </div>
                    <Button buttonType="inverted" onClick={handleClick}>
                        Checkout
                    </Button>
                </>
            ) : (
                <div className="cart-empty">The cart is empty</div>
            )}
        </div>
    )
}

export default CartDropdown
