import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import './CartDropdown.styles.scss'
import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCartItems } from '../../Store/Cart/cartSelector'
import { setCartDropdownOpen } from '../../Store/Cart/cartSlice'

const CartDropdown = () => {
    const dispatch = useDispatch()
    const currentCartItems = useSelector(selectedCartItems)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/cart')
        dispatch(setCartDropdownOpen(false))
    }
    return (
        <div className="cart-dropdown-container">
            {currentCartItems.length > 0 ? (
                <>
                    <div className="cart-items-container">
                        {currentCartItems.map((item) => {
                            return <CartItem item={item} />
                        })}
                    </div>
                    <Button buttonType="inverted" onClick={handleClick}>
                        View Cart
                    </Button>
                </>
            ) : (
                <div className="cart-empty">The cart is empty</div>
            )}
        </div>
    )
}

export default CartDropdown
