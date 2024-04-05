import React from 'react'
import CheckoutItem from './CheckoutItem'
import './CheckoutTable.styles.scss'
import { useSelector } from 'react-redux'
import { selectedCartItems, totalPrice } from '../../Store/Cart/cartSelector'

const CheckoutTable = () => {
    const currentCartItems = useSelector(selectedCartItems)
    const currentTotalPrice = useSelector(totalPrice)
    return (
        <table className="checkout-table">
            <thead>
                <tr className="table-header">
                    <th className="item">Item</th>
                    <th className="name">Name</th>
                    <th className="price">Unit Price</th>
                    <th className="qty">Quantity</th>
                    <th className="subtotal">Subtotal</th>
                </tr>
            </thead>

            <tbody>
                {currentCartItems.length > 0 ? (
                    currentCartItems.map((item) => {
                        return <CheckoutItem item={item} />
                    })
                ) : (
                    <tr className="cart-empty">
                        <th scope="row" colSpan={6}>
                            The cart is empty
                        </th>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row" colSpan={5}>
                        Total Price:
                    </th>
                    <td>${currentTotalPrice}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CheckoutTable
