import React from 'react'
import CategoryItem from '../Category/CategoryItem'
import { categoryModel } from '../../Model/CategoryModel'
import './Listings.styles.scss'

interface ListingsProps {
    categories: categoryModel[]
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
