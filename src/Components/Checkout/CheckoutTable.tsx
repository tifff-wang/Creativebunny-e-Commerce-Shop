import React, { useContext } from 'react'
import CheckoutItem from './CheckoutItem'
import { CartContext } from '../../Contexts/Cart.context'
import './CheckoutTable.styles.scss'

const CheckoutTable = () => {
    const { cartItemList, totalPrice } = useContext(CartContext)
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
                {cartItemList.length > 0 ? (
                    cartItemList.map((item) => {
                        return <CheckoutItem item={item} />
                    })
                ) : (
                    <tr className='cart-empty'>
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
                    <td>${totalPrice}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CheckoutTable
