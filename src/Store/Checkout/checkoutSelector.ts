import { createSelector } from 'reselect'
import { RootState } from '../store'

const checkoutReducer = (state: RootState) => state.checkout

export const currentCheckoutDeliveryStatus = createSelector(
    [checkoutReducer],
    (checkout) => checkout.deliveryDetailSaved
)