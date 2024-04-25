import React from 'react'
import { CartItemModel } from '../../Model/CartItemModel'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import './CheckoutItem.styles.scss'
import { useDispatch } from 'react-redux'
import {
    changeItemQuantity,
    deleteItemfromCart,
} from '../../Store/Cart/cartSlice'

const CheckoutItem = ({ item }: { item: CartItemModel }) => {
    const dispatch = useDispatch()
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
                    <IoMdArrowDropdown
                        className="checkout-table-icon"
                        onClick={() =>
                            dispatch(
                                changeItemQuantity({ item: item, isUp: false })
                            )
                        }
                    />
                    {item.quantity}
                    <IoMdArrowDropup
                        className="checkout-table-icon"
                        onClick={() =>
                            dispatch(
                                changeItemQuantity({ item: item, isUp: true })
                            )
                        }
                    />
                </div>
            </th>
            <th>${subtotal}</th>
            <th>
                <MdDeleteOutline
                    className="checkout-table-icon"
                    onClick={() => dispatch(deleteItemfromCart(item))}
                />
            </th>
        </tr>
    )
}

export default CheckoutItem
