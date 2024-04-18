import React from 'react'
import './CategoryItem.styles.scss'
import { CategoryModel } from '../../Model/CategoryModel'
import { useNavigate } from 'react-router-dom'
interface CategoryItemProps {
    category: CategoryModel
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const { name, url, route } = category
    const navigate = useNavigate()
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${url})` }}
            />
            <div
                onClick={() => navigate(`/${route}`)}
                className="category-body-container"
            >
                <h2>{name}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem
