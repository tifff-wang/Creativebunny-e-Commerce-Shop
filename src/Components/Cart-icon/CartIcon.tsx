import React, { useContext } from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import './CartIcon.styles.scss'
import { CartContext } from '../../Contexts/Cart.context'

const CartIcon = () => {
    const { cartDropdownOpen, setCartDropdownOpen, totalQuantity } =
        useContext(CartContext)
    return (
        <div
            className="cart-icon-container"
            onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
        >
            <LuShoppingBag className="cart-icon" />
            <p>{totalQuantity}</p>
        </div>
    )
}

export default CartIcon
