import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import { CategoryModel } from '../../Model/ToyCategoryModel'
import './Listings.styles.scss'

interface ListingsProps {
    categories: CategoryModel[]
}
const Listings = ({ categories }: ListingsProps) => {
    return (
        <div className="listings-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Listings
