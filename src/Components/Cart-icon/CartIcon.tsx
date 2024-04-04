import React from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import './CartIcon.styles.scss'
import { CartDropdownOpenStatus } from '../../Store/Cart/cartSelector'
import { totalQuantity } from '../../Store/Cart/cartSelector'
import { useDispatch, useSelector } from 'react-redux'
import { setCartDropdownOpen } from '../../Store/Cart/cartSlice'

const CartIcon = () => {
    const dispatch = useDispatch()
    const isDropdownOpen = useSelector(CartDropdownOpenStatus)
    const currentTotalQuantity = useSelector(totalQuantity)

    return (
        <div
            className="cart-icon-container"
            onClick={() => dispatch(setCartDropdownOpen(!isDropdownOpen))}
        >
            <LuShoppingBag className="cart-icon" />
            <p>{currentTotalQuantity}</p>
        </div>
    )
}

export default CartIcon
