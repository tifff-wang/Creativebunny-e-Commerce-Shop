import { useContext } from 'react'
import { CartContext } from '../../Contexts/Cart.context'
import Button from '../Button/Button'
import './CartDropdown.styles.scss'

import React from 'react'
import CartItem from './CartItem'

const CartDropdown = () => {
    const { cartItemList } = useContext(CartContext)
    return (
        <div className="cart-dropdown-container">
            {cartItemList.length > 0 ? (
                <div className="cart-items-container">
                    {cartItemList.map((item) => {
                        return <CartItem item={item} />
                    })}
                </div>
            ) : (
                <div className="cart-empty">The cart is Empty</div>
            )}

            <Button buttonType="inverted">Checkout</Button>
        </div>
    )
}

export default CartDropdown
