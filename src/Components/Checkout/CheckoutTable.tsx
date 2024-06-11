import React from 'react'
import CheckoutItem from './CheckoutItem'
import './CheckoutTable.styles.scss'
import { useSelector } from 'react-redux'
import {
    discountedPrice,
    selectedCartItems,
    totalPrice,
} from '../../Store/Cart/cartSelector'

const CheckoutTable = ({ canChangeQty }: { canChangeQty: boolean }) => {
    const currentCartItems = useSelector(selectedCartItems)
    const subtotal = Number(useSelector(totalPrice).toFixed(2))
    const currentTotalPrice = Number(useSelector(discountedPrice).toFixed(2))
    const discount = Number((subtotal - currentTotalPrice).toFixed(2))
    const shipping = Number((6.99).toFixed(2))

    return (
        <div className="cart-table-container">
            <table>
                <thead>
                    <tr className="table-header">
                        <th className="item">Item</th>
                        <th className="name">Name</th>
                        <th className="price">Unit Price</th>
                        <th className="qty">Qty</th>
                        <th className="subtotal">Total</th>
                    </tr>
                </thead>

                {currentCartItems.length > 0 ? (
                    <>
                        {currentCartItems.map((item) => (
                            <tbody key={item.id}>
                                <CheckoutItem
                                    item={item}
                                    canChangeQty={canChangeQty}
                                />
                            </tbody>
                        ))}
                        <tfoot>
                            <tr className="foot-row">
                                <th
                                    className="subtotal-row"
                                    scope="row"
                                    colSpan={4}
                                >
                                    Subtotal:
                                </th>
                                <td className="subtotal-row">${subtotal}</td>
                            </tr>
                            <tr className="foot-row discount-row">
                                <th scope="row" colSpan={4}>
                                    20% Off Discount:
                                </th>
                                <td>{`-$${discount}`}</td>
                            </tr>
                            <tr className="foot-row">
                                <th
                                    className="shipping"
                                    scope="row"
                                    colSpan={4}
                                >
                                    Shipping:
                                </th>
                                <td className="shipping">${shipping}</td>
                            </tr>
                            <tr className="foot-row total-price">
                                <th scope="row" colSpan={4}>
                                    Total Price: &nbsp;
                                </th>
                                <td>
                                    $
                                    {Number(
                                        currentTotalPrice + shipping
                                    ).toFixed(2)}
                                </td>
                            </tr>
                        </tfoot>
                    </>
                ) : (
                    <tbody>
                        <tr className="cart-empty">
                            <td colSpan={5}>The cart is empty</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default CheckoutTable
