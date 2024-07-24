import React from 'react'
import './ProductListTable.styles.scss'
import { AdminProductModel } from '../../Model/AdminProductModel'
import { MdOutlineEdit } from 'react-icons/md'

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

    return (
        <div className="all-products-table-container">
            <table>
                <thead>
                    <tr className="table-header">
                        <th className="item">Item</th>
                        <th className="name">Name</th>
                        <th className="price">Unit Price</th>
                        <th className="stock">Stock</th>
                        <th className="sku">SKU</th>
                        <th className="publish">Publish</th>
                    </tr>
                </thead>

                {productData.map((item) => (
                    <tbody key={item.id}>
                        <tr>
                            <td className="image">
                                <img
                                    className="item-image"
                                    src={item.imageUrl}
                                    alt=""
                                />
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.SKU}</td>
                            <td>{item.isPublish ? 'Yes' : 'No'}</td>
                            <td>
                                <div>
                                    <MdOutlineEdit className="table-icon" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default ProductListTable
