import React from 'react'
import './ProductListTable.styles.scss'
import { AdminProductModel } from '../../Model/AdminProductModel'
import SortableTable from '../Table/SortableTable'
import { MdDeleteOutline } from 'react-icons/md'
import { IoMdAddCircle } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'

const ProductListTable = () => {
    const productData: AdminProductModel[] = [
        {
            id: '3d14d922-eded-42d8-83e6-ef477c750909',
            name: 'Oven pizza grill set',
            imageUrl: '/images/toy-photos/oven-pizza.webp',
            price: 28,
            description:
                "Hungry? Let's grill some yummy pizza! Simply put the pizza on the grill pan and slide it into the oven. Cut the pizza into four pieces and share them with your friends!",
            material: '100% quality beech wood',
            size: [
                'grill pan: 19 x 8.5 x 4cm',
                'pizza: dia 8 x 2cm',
                'oven: 11.5 x 11.5 x 9cm',
            ],
            age: '3yrs+',
            SKU: '2456',
            category: 'kitchen',
            isPublish: true,
            stock: 12,
        },
    ]

    const configProductData = [
        {
            header: 'Item',
            render: (data: AdminProductModel) => (
                <img className="item-image" src={data.imageUrl} alt="" />
            ),
        },
        {
            header: 'Name',
            render: (data: AdminProductModel) => data.name,
            sortedValue: (data: AdminProductModel) => data.name,
            dataType: 'string',
        },
        {
            header: 'Unit Price',
            render: (data: AdminProductModel) => `$${data.price}`,
            sortedValue: (data: AdminProductModel) => data.price,
            dataType: 'number',
        },
        {
            header: 'Stock',
            render: (data: AdminProductModel) => data.stock,
            sortedValue: (data: AdminProductModel) => data.stock,
            dataType: 'number',
        },
        {
            header: 'SKU',
            render: (data: AdminProductModel) => data.SKU,
        },
        {
            header: 'Publish',
            render: (data: AdminProductModel) =>
                data.isPublish ? 'yes' : 'no',
        },
        { header: '', render: () => <MdDeleteOutline size={15} /> },
        { header: '', render: () => <FiEdit size={15} /> },
    ]

    const getKeyForTable = (data: AdminProductModel) => {
        return data.id
    }

    return (
        <>
            <div className="add-product">
                <IoMdAddCircle size={20} /> <span>Add Product</span>
            </div>
            <div className="all-products-table-container">
                <SortableTable
                    tableData={productData}
                    config={configProductData}
                    getKey={getKeyForTable}
                />
            </div>
        </>
    )
}

export default ProductListTable
