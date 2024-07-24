import { CartItemModel } from "./CartItemModel";
import { DeliveryInfoModel } from "./DeliveryInfoModel";

export interface OrderModel {
    id: string;
    orderItems: CartItemModel[];
    deliveryInfo: DeliveryInfoModel;
    userId: string;
    totalPrice: number;
    deliveryStatus: string;
    trackingNumber: string
    paymentIntent: string
    orderStatus: string
  }