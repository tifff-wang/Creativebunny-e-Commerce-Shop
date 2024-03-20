import React from 'react'
import './categoryItem.styles.scss'
import { categoryModel } from '../../Model/categoryModel'
interface CategoryItemProps {
    category: categoryModel
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const { name, url } = category
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${url})` }}
            />
            <div className="category-body-container">
                <h2>{name}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem
