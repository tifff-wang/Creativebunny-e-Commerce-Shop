import React from 'react'
import CheckoutItem from './CheckoutItem'
import './CheckoutTable.styles.scss'
import { useSelector } from 'react-redux'
import { selectedCartItems, totalPrice } from '../../Store/Cart/cartSelector'

const CheckoutTable = ({ canChangeQty }: { canChangeQty: boolean }) => {
    const currentCartItems = useSelector(selectedCartItems)
    const discountPercent = 0.8
    const subtotal = useSelector(totalPrice)
    const currentTotalPrice = (subtotal * discountPercent).toFixed(2)
    const discount = (subtotal * 0.2).toFixed(2)
    const shipping = 6.99

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

                <tbody>
                    {currentCartItems.length > 0 ? (
                        currentCartItems.map((item) => {
                            return (
                                <CheckoutItem
                                    key={item.id}
                                    item={item}
                                    canChangeQty={canChangeQty}
                                />
                            )
                        })
                    ) : (
                        <tr className="cart-empty">
                            <th scope="row" colSpan={5}>
                                The cart is empty
                            </th>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr className="foot-row">
                        <th scope="row" colSpan={4}>
                            Subtotal:
                        </th>
                        <td>${subtotal}</td>
                    </tr>
                    <tr className="foot-row discount-row">
                        <th scope="row" colSpan={4}>
                            20% 0ff Discount:
                        </th>
                        <td>- ${discount}</td>
                    </tr>
                    <tr className="foot-row">
                        <th className="shipping" scope="row" colSpan={4}>
                            Shipping:
                        </th>
                        <td className="shipping">$ {shipping}</td>
                    </tr>
                    <tr className="foot-row total-price">
                        <th scope="row" colSpan={4}>
                            Total Price:
                        </th>
                        <td>${Number(currentTotalPrice) + shipping}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default CheckoutTable
