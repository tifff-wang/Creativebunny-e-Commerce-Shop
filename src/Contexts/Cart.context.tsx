import React, { createContext, ReactNode, useState } from 'react'
import { ToyModel } from '../Model/ToyModel'
import { CartItemModel } from '../Model/CartItemModel'

interface CartContextProps {
    cartDropdownOpen: boolean
    setCartDropdownOpen: React.Dispatch<React.SetStateAction<any>>
    cartItemList: CartItemModel[]
    addItemToCart: (item: ToyModel) => void
    totalQuantity: number
}

export const CartContext = createContext<CartContextProps>({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => null,
    cartItemList: [],
    addItemToCart: (item: ToyModel) => null,
    totalQuantity: 0,
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

    const value = {
        cartDropdownOpen,
        setCartDropdownOpen,
        cartItemList,
        addItemToCart,
        totalQuantity,
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
