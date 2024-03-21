import React from 'react'
import { categoryModel } from '../../Model/CategoryModel'
import Listings from '../../Components/Listing/Listings'

const HomePage = () => {
    const categories: categoryModel[] = [
        {
            id: 1,
            name: 'Pretend Play',
            url: 'https://i.ibb.co/7Q2wVTT/dolltoy.webp',
        },
        {
            id: 2,
            name: 'Math',
            url: 'https://i.ibb.co/Cvcgy1v/mathtoy.webp',
        },
        {
            id: 3,
            name: 'Cooking',
            url: 'https://i.ibb.co/r78BSvP/fruittoy.webp',
        },
        {
            id: 4,
            name: 'Baking',
            url: 'https://i.ibb.co/X7wXP2d/eggset.webp',
        },
        {
            id: 5,
            name: 'Carpentry',
            url: 'https://i.ibb.co/2vZ3b7P/toychair.webp',
        },
    ]
    return <Listings categories={categories} />
}

export default HomePage
