import { createSelector } from 'reselect'
import { RootState } from '../store'

const checkoutReducer = (state: RootState) => state.checkout

export const currentDeliveryDetailSaved = createSelector(
    [checkoutReducer],
    (checkout) => checkout.deliveryDetailSaved
)

export const currentDeliveryInfoStatus = createSelector(
  [checkoutReducer],
  (checkout) => checkout.deliveryInfo
)