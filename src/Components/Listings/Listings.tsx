import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import { CategoryModel } from '../../Model/CategoryModel'
import './Listings.styles.scss'

interface ListingsProps {
    categories: CategoryModel[]
}
const Listings = ({ categories }: ListingsProps) => {
    return (
        <div className="categories-section-container">
            <div className="categories-section-title">
                <h2>POPULAR CATEGORIES</h2>
            </div>
            <div className="listings-container">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default Listings
