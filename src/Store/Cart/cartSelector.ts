import { createSelector } from 'reselect'
import { RootState } from '../store'

const cartReducer = (state: RootState) => state.cart

export const CartDropdownOpenStatus = createSelector(
    [cartReducer],
    (cart) => cart.cartDropdownOpen
)

export const selectedCartItems = createSelector(
    [cartReducer],
    (cart) => cart.cartItems
)

export const totalPrice = createSelector([selectedCartItems], (cartItems) =>
    cartItems.reduce(
        (acc, currentItem) => acc + currentItem.quantity * currentItem.price,
        0
    )
)

export const totalQuantity = createSelector([selectedCartItems], (cartItems) =>
    cartItems.reduce((acc, currentItem) => acc + currentItem.quantity, 0)
)
