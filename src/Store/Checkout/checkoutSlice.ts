import { createSlice } from '@reduxjs/toolkit'
import { DeliveryInfoModel } from '../../Model/DeliveryInfoModel'


interface checkoutInitialState {
    deliveryInfo: DeliveryInfoModel
    deliveryDetailSaved: boolean
    
}

export const CHECKOUT_INITIAL_STATE: checkoutInitialState = {
    deliveryInfo: {
      email: "",
      firstName: "",
      lastName: "",
      deliveryAddress: "",
      message: ""
    },
    deliveryDetailSaved: false,
}


export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: CHECKOUT_INITIAL_STATE,
    reducers: {
        setDeliveryDetailSaved(state, action) {
            state.deliveryDetailSaved = action.payload
        },
        setDeliveryInfo(state, action) {
          state.deliveryInfo = action.payload
        }
    },
})

export const { setDeliveryDetailSaved, setDeliveryInfo } = checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer


