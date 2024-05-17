import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product-Card/ProductCard'
import './ToyListPage.styles.scss'
import { ToyModel } from '../../Model/ToyModel'
import { useSelector } from 'react-redux'
import { categoriesData } from '../../Store/Category/categorySelector'


const ToyListPage = () => {
    const { categoryName } = useParams()
  
    const toysData = useSelector(categoriesData)
    const [products, setProducts] = useState<ToyModel[]>([])

    useEffect(() => {
        if (categoryName && toysData[categoryName]) {
            setProducts(toysData[categoryName])
        } else {
            setProducts([])
        }
    }, [toysData, categoryName])

    return (
        <div className="toys-list-container">
            <h3 className="category-title">{categoryName}</h3>
            <div className="toys-card-container">
                {products &&
                    categoryName &&
                    products.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                toy={product}
                                categoryName={categoryName}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default ToyListPage
