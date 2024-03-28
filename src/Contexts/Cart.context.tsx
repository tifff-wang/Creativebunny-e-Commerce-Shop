import React, { createContext, ReactNode, useState } from 'react'
import { ToyModel } from '../Model/ToyModel'
import { CartItemModel } from '../Model/CartItemModel'

interface CartContextProps {
    cartDropdownOpen: boolean
    setCartDropdownOpen: React.Dispatch<React.SetStateAction<any>>
    cartItemList: CartItemModel[]
    addItemToCart: (item: ToyModel) => void
    totalQuantity: number
    totalPrice: number
    changeItemQty: (item: CartItemModel, isUp: boolean) => void
    deleteItem: (item: CartItemModel) => void
}

export const CartContext = createContext<CartContextProps>({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => null,
    cartItemList: [],
    addItemToCart: () => null,
    totalQuantity: 0,
    totalPrice: 0,
    changeItemQty: () => null,
    deleteItem: () => null,
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
    const [cartItemList, setCartItemList] = useState<CartItemModel[]>([])
    const addItemToCart = (item: ToyModel) => {
        setCartItemList(addCartItem(cartItemList, item))
    }
    const totalQuantity = cartItemList.reduce(
        (acc, currentItem) => acc + currentItem.quantity,
        0
    )
    const totalPrice = cartItemList.reduce(
        (acc, currentItem) => acc + currentItem.quantity * currentItem.price,
        0
    )
    const changeItemQty = (item: CartItemModel, isUp: boolean) => {
        setCartItemList(changeQty(cartItemList, item, isUp))
    }
    const deleteItem = (item: CartItemModel) => {
        setCartItemList(deleteCartItem(cartItemList, item))
    }

    const value = {
        cartDropdownOpen,
        setCartDropdownOpen,
        cartItemList,
        addItemToCart,
        totalQuantity,
        totalPrice,
        changeItemQty,
        deleteItem,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const addCartItem = (cartItemList: CartItemModel[], item: ToyModel) => {
    const existingCartItem = cartItemList.filter((cartItem) => {
        return cartItem.id === item.id
    })

    if (existingCartItem.length > 0) {
        const updatedCartItems = cartItemList.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem
        })
        return updatedCartItems
    }

    return [...cartItemList, { ...item, quantity: 1 }]
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
    return updatedCartItems
}

const deleteCartItem = (
    cartItemList: CartItemModel[],
    itemToDelete: CartItemModel
) => {
    const updatedCartItems = cartItemList.filter(
        (item) => item.id !== itemToDelete.id
    )
    return updatedCartItems
}
