import React, { useContext } from 'react'
import { CartItemModel } from '../../Model/CartItemModel'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { CartContext } from '../../Contexts/Cart.context'
import { MdDeleteOutline } from 'react-icons/md'
import './CheckoutItem.styles.scss'

const CheckoutItem = ({ item }: { item: CartItemModel }) => {
    const { changeItemQty, deleteItem } = useContext(CartContext)
    const subtotal = item.price * item.quantity
    return (
        <tr className="table-row">
            <th>
                <img
                    className="item-image"
                    src={item.imageUrl}
                    alt={`${item.name}`}
                />
            </th>
            <th>{item.name}</th>
            <th>${item.price}</th>
            <th>
                <div>
                    <IoMdArrowDropup
                        className="checkout-table-icon"
                        onClick={() => changeItemQty(item, true)}
                    />
                    {item.quantity}
                    <IoMdArrowDropdown
                        className="checkout-table-icon"
                        onClick={() => changeItemQty(item, false)}
                    />
                </div>
            </th>
            <th>${subtotal}</th>
            <th>
                <MdDeleteOutline
                    className="checkout-table-icon"
                    onClick={() => deleteItem(item)}
                />
            </th>
        </tr>
    )
}

export default CheckoutItem
