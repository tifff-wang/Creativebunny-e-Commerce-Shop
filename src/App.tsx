import './categories.styles.scss'
import { categoryModel } from './Model/categoryModel'
import React from 'react'
import Listings from './Components/listing/listings'

function App() {
    const categories: categoryModel[] = [
        {
            id: 1,
            name: 'Pretend Play',
            url: 'abc',
        },
    ]
    return <Listings categories={categories} />
}

export default App
