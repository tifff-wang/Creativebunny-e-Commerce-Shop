import React from 'react'
import { CartItemModel } from '../../Model/CartItemModel'
import "./CartItem.styles.scss"

const CartItem = ({ item }: { item: CartItemModel }) => {
    return (
        <>
            <div className="cart-item-container">
                <img src={item.imageUrl} alt={`${item.name}`} />
                <div className="item-info">
                    <p className="name">{item.name}</p>
                    <p className="quantity">Qty: {item.quantity}</p>
                    <p className="price">${item.price}</p>
                </div>
            </div>
        </>
    )
}

export default CartItem
