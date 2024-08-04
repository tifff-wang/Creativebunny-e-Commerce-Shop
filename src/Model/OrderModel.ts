import { DeliveryInfoModel } from './DeliveryInfoModel'
import { OrderToyModel } from './OrderToyModel'

export interface OrderModel {
    id: string
    createdAt: Date
    orderItems: OrderToyModel[]
    deliveryInfo: DeliveryInfoModel
    userId: string
    totalPrice: number
    deliveryStatus: string
    trackingNumber: string
    paymentIntent: string
    orderStatus: string
    userName: string
}
