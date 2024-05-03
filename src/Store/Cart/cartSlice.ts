import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartItemModel } from '../../Model/CartItemModel'
import { ToyModel } from '../../Model/ToyModel'

interface CartInitialState {
    cartItems: CartItemModel[]
    cartDropdownOpen: boolean
}

const CART_INITIAL_STATE: CartInitialState = {
    cartItems: JSON.parse(localStorage.getItem('cart') || '[]'),
    cartDropdownOpen: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        setCartDropdownOpen(state, action: PayloadAction<boolean>) {
            state.cartDropdownOpen = action.payload
        },
        addItemToCart(
            state,
            action: PayloadAction<{ item: ToyModel; addQuantity: number }>
        ) {
            state.cartItems = addCartItem(
                state.cartItems,
                action.payload.item,
                action.payload.addQuantity
            )
        },
        changeItemQuantity(
            state,
            action: PayloadAction<{ item: CartItemModel; isUp: boolean }>
        ) {
            state.cartItems = changeQty(
                state.cartItems,
                action.payload.item,
                action.payload.isUp
            )
        },
        deleteItemfromCart(state, action) {
            state.cartItems = deleteCartItem(state.cartItems, action.payload)
        },
        clearCart(state) {
            state.cartItems = []
            localStorage.removeItem('cart')
        },
    },
})

export const {
    setCartDropdownOpen,
    addItemToCart,
    changeItemQuantity,
    deleteItemfromCart,
    clearCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer

const addCartItem = (
    cartItemList: CartItemModel[],
    item: ToyModel,
    addQuantity: number
): CartItemModel[] => {
    const existingCartItem = cartItemList.filter((cartItem) => {
        return cartItem.id === item.id
    })

    if (existingCartItem.length > 0) {
        const updatedCartItems = cartItemList.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + addQuantity,
                }
            }
            return cartItem
        })
        localStorage.setItem('cart', JSON.stringify(updatedCartItems))
        return updatedCartItems
    }
    const updatedCartItems = [
        ...cartItemList,
        { ...item, quantity: addQuantity },
    ]
    localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    return updatedCartItems
}

const changeQty = (
    cartItemList: CartItemModel[],
    item: CartItemModel,
    isUp: boolean
) => {
    const updatedCartItems = cartItemList.map((cartItem) => {
        if (cartItem.id === item.id) {
            return {
                ...cartItem,
                quantity: Math.max(cartItem.quantity + (isUp ? 1 : -1), 1),
            }
        }

        return cartItem
    })
    localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    return updatedCartItems
}

const deleteCartItem = (
    cartItemList: CartItemModel[],
    itemToDelete: CartItemModel
): CartItemModel[] => {
    const updatedCartItems = cartItemList.filter(
        (item) => item.id !== itemToDelete.id
    )
    localStorage.setItem('cart', JSON.stringify(updatedCartItems))
    return updatedCartItems
}

// const clearCartItems = (cartItemList: CartItemModel[]): CartItemModel[] => {
//     const updatedCartItems = cartItemList.filter((item) => item === null)
//     localStorage.removeItem('cart')
//     return updatedCartItems
// }
