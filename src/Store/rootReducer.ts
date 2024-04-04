import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './User/userSlice'
import { categoryReducer } from './Category/categorySlice'
import { cartReducer } from './Cart/cartSlice'

export const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
})
