import { createSlice } from '@reduxjs/toolkit'

interface checkoutInitialState {
    deliveryDetailSaved: boolean
}

export const CHECKOUT_INITIAL_STATE: checkoutInitialState = {
    deliveryDetailSaved: false,
}


export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: CHECKOUT_INITIAL_STATE,
    reducers: {
        setDeliveryDetailSaved(state, action) {
            state.deliveryDetailSaved = action.payload
        },
    },
})

export const { setDeliveryDetailSaved } = checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer
