import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product-Card/ProductCard'
import './ToyListPage.styles.scss'
import { ToyModel } from '../../Model/ToyModel'
import { useSelector } from 'react-redux'
import { categoriesData } from '../../Store/Category/categorySelector'

const ToyListPage = () => {
    const { categoryName } = useParams()
    const navigate = useNavigate()
    const toysData = useSelector(categoriesData)
    const [products, setProducts] = useState<ToyModel[]>([])

    useEffect(() => {
        if (categoryName && toysData[categoryName]) {
            setProducts(toysData[categoryName])
        } else {
            setProducts([])
        }
    }, [toysData, categoryName])

    const handleClick = (productId: number) => {
        navigate(`/toys/${categoryName}/${productId}`)
    }

    return (
        <div className="toys-list-container">
            <h2 className="category-title">{categoryName}</h2>
            <div className="toys-card-container">
                {products &&
                    products.map((product) => {
                        return (
                            <div onClick={() => handleClick(product.id)}>
                                <ProductCard key={product.id} toy={product} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ToyListPage
