import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToysContext } from '../../Contexts/Toy.context'
import ProductCard from '../../Components/Product-Card/ProductCard'
import './ToyListPage.styles.scss'
import { ToyModel } from '../../Model/ToyModel'

const ToyListPage = () => {
    const { categoryName } = useParams()
    const { toysData } = useContext(ToysContext)
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
            <h2 className="category-title">{categoryName}</h2>
            <div className="toys-card-container">
                {products &&
                    products.map((product) => {
                        return <ProductCard key={product.id} toy={product} />
                    })}
            </div>
        </div>
    )
}

export default ToyListPage
