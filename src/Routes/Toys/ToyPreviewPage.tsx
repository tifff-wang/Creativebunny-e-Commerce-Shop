import React from 'react'
import ProductCard from '../../Components/Product-Card/ProductCard'
import './ToyPreviewPage.styles.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { categoriesData } from '../../Store/Category/categorySelector'

const ToyPage = () => {
    const toysData = useSelector(categoriesData)

    return (
        <>
            {Object.keys(toysData).map((categoryName) => (
                <div key={categoryName}>
                    <Link
                        to={`/toys/${categoryName}`}
                        className="category-title"
                    >
                        {categoryName.toUpperCase()}
                    </Link>
                    <div className="toys-card-container">
                        {toysData[categoryName]
                            .filter((_, index) => index < 3)
                            .map((product) => {
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
            ))}
        </>
    )
}

export default ToyPage
