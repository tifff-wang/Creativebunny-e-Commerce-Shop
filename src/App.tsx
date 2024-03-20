import CategoryItem from './Components/category/categoryItem'
import "./categories.styles.scss"
import { categoryModel } from './Model/categoryModel'
import React from 'react'

function App() {
    const categories: categoryModel[] = [
        {
            id: 1,
            name: 'Pretend Play',
            url: 'abc',
        },
    ]
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default App
