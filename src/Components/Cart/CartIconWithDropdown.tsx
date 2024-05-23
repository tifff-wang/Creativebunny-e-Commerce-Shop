import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import React, { useRef, useState } from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { selectedCartItems, totalQuantity } from '../../Store/Cart/cartSelector'
import { LuShoppingBag } from 'react-icons/lu'
import useClickOutside from '../../Hooks/useClickOutside'
import './CartIconWithDropdown.styles.scss'

const CartIconWithDropdown = () => {
    const navigate = useNavigate()
    const currentCartItems = useSelector(selectedCartItems)
    const currentTotalQuantity = useSelector(totalQuantity)
    const [openDropdown, setOpenDropdown] = useState(false)
    const cartDropdownRef = useRef<HTMLDivElement | null>(null)
    useClickOutside(cartDropdownRef, () => setOpenDropdown(false))

    const handleClick = () => {
        navigate('/cart')
        setOpenDropdown(false)
    }

    return (
        <div className="cartIcon-with-dropdown-container" ref={cartDropdownRef}>
            <div
                className="cart-icon-container"
                onClick={() => setOpenDropdown(!openDropdown)}
            >
                <LuShoppingBag className="cart-icon" />
                <p>{currentTotalQuantity}</p>
            </div>
            {openDropdown && (
                <div className="cart-dropdown-container">
                    {currentCartItems.length > 0 ? (
                        <>
                            <div className="cart-items-container">
                                {currentCartItems.map((item) => {
                                    return <CartItem item={item} />
                                })}
                            </div>

                            <Button buttonType="default" onClick={handleClick}>
                                View Cart
                            </Button>
                        </>
                    ) : (
                        <div className="cart-empty">The cart is empty</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CartIconWithDropdown
