import React, { useEffect } from 'react'
import { categoryModel } from '../../Model/CategoryModel'
import Listings from '../../Components/Listing/Listings'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../Utils/Firebase/Firebase.utils'
import { setCategories } from '../../Store/Category/categorySlice'

const HomePage = () => {
    
    const categories: categoryModel[] = [
        {
            id: 1,
            name: 'Pretend Play',
            url: 'https://i.ibb.co/7Q2wVTT/dolltoy.webp',
            route: 'toys/pretend play',
        },
        {
            id: 2,
            name: 'Construction',
            url: 'https://i.ibb.co/Cvcgy1v/mathtoy.webp',
            route: 'toys/construction',
        },
        {
            id: 3,
            name: 'Cooking',
            url: 'https://i.ibb.co/r78BSvP/fruittoy.webp',
            route: 'toys/cooking',
        },
        {
            id: 4,
            name: 'Baking',
            url: 'https://i.ibb.co/X7wXP2d/eggset.webp',
            route: 'toys/baking',
        },
        {
            id: 5,
            name: 'Carpentry',
            url: 'https://i.ibb.co/2vZ3b7P/toychair.webp',
            route: 'toys/carpentry',
        },
    ]
    return <Listings categories={categories} />
}

export default HomePage
