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

const CheckoutItem = ({
    item,
    canChangeQty,
}: {
    item: CartItemModel
    canChangeQty: boolean
}) => {
    const dispatch = useDispatch()
    const subtotal = item.price * item.quantity
    return (
        <tr>
            <td className="image">
                <img
                    className="item-image"
                    src={item.imageUrl}
                    alt={`${item.name}`}
                />
            </td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>
                {canChangeQty ? (
                    <div className="item-qty">
                        <IoMdArrowDropdown
                            className="checkout-table-icon"
                            onClick={() =>
                                dispatch(
                                    changeItemQuantity({
                                        item: item,
                                        isUp: false,
                                    })
                                )
                            }
                        />
                        {item.quantity}
                        <IoMdArrowDropup
                            className="checkout-table-icon"
                            onClick={() =>
                                dispatch(
                                    changeItemQuantity({
                                        item: item,
                                        isUp: true,
                                    })
                                )
                            }
                        />
                        <MdDeleteOutline
                            className="checkout-table-icon"
                            onClick={() => dispatch(deleteItemfromCart(item))}
                        />
                    </div>
                ) : (
                    <div>{item.quantity}</div>
                )}
            </td>

            <td className="subtotal">${subtotal}</td>
        </tr>
    )
}

export default CheckoutItem
