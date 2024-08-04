import React from 'react'
import './ProductListTable.styles.scss'
import { OrderModel } from '../../Model/OrderModel'
import { formatDate } from '../../Helpers/common'
import SortableTable from '../Table/SortableTable'

const OrderListTable = () => {
    const orderData: OrderModel[] = [
        {
            id: '08baaeb8-c1f1-4cd7-8c60-20ae6efec3e1',
            orderItems: [
                {
                    id: '3',
                    imageUrl: '/images/toy-photos/cat-shaker.webp',
                    name: 'cat shaker',
                    price: 26,
                    quantity: 2,
                    SKU: '3456',
                },
            ],
            deliveryInfo: {
                deliveryAddress: '33A Glen Vista Place, Bayview',
                email: 'thiffanyjun@gmail.com',
                firstName: 'Tiffany',
                lastName: 'Wang',
                message: '',
            },
            userId: '5mGHZyhnKdhVsvYV4VYNor9VlFV2',
            totalPrice: 46,
            deliveryStatus: 'pending',
            trackingNumber: '',
            paymentIntent: 'pi_3PFtQ4LVPXMW8Iw7179bogfY',
            orderStatus: 'processing',
            createdAt: new Date('2018-01-01T00:00:00'),
            userName: 'Tiffany Wang',
        },
    ]

    const configOrderData = [
        {
            header: 'Id',
            render: (data: OrderModel) => data.id,
        },
        {
            header: 'User',
            render: (data: OrderModel) => data.userName,
            sortedValue: (data: OrderModel) => data.userName,
            dataType: 'string',
        },
        {
            header: 'Created At',
            render: (data: OrderModel) => formatDate(data.createdAt),
            sortedValue: (data: OrderModel) => formatDate(data.createdAt),
            dataType: 'string',
        },
        {
            header: 'Total Price',
            render: (data: OrderModel) => data.totalPrice,
        },
        {
            header: 'Order Status',
            render: (data: OrderModel) => data.orderStatus,
        },
        {
            header: 'Delivery Status',
            render: (data: OrderModel) => data.deliveryStatus,
        },
    ]

    const getKeyForTable = (data: OrderModel) => {
        return data.id
    }

    return (
        <div className="all-products-table-container">
            <SortableTable
                tableData={orderData}
                config={configOrderData}
                getKey={getKeyForTable}
            />
        </div>
    )
}

export default OrderListTable
