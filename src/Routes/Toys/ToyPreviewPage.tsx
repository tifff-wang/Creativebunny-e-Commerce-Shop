import React, { useContext } from 'react'
import { ToysContext } from '../../Contexts/Toy.context'
import ProductCard from '../../Components/Product-Card/ProductCard'
import './ToyPreviewPage.styles.scss'
import { Link } from 'react-router-dom'

const ToyPage = () => {
    const { toysData } = useContext(ToysContext)

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
