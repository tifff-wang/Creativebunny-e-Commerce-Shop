import React from 'react'
import CheckoutItem from './CheckoutItem'
import './CheckoutTable.styles.scss'
import { useSelector } from 'react-redux'
import { selectedCartItems, totalPrice } from '../../Store/Cart/cartSelector'


const CheckoutTable = ({canChangeQty}:{canChangeQty:boolean}) => {
    const currentCartItems = useSelector(selectedCartItems)
    const currentTotalPrice = useSelector(totalPrice)
    const shipping = 6.99

    return (
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
                <tr className="subtotal-and-shipping">
                    <th scope="row" colSpan={4}>
                        Subtotal:
                    </th>
                    <td>${currentTotalPrice}</td>
                </tr>
                <tr className="subtotal-and-shipping">
                    <th scope="row" colSpan={4}>
                        Shipping:
                    </th>
                    <td>$ {shipping}</td>
                </tr>
                <tr className="total-price">
                    <th scope="row" colSpan={4}>
                        Total Price:
                    </th>
                    <td>${currentTotalPrice + shipping}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CheckoutTable
