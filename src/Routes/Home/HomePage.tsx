import React from 'react'
import { CategoryModel } from '../../Model/CategoryModel'
import Listings from '../../Components/Listings/Listings'
import HeroSection from '../../Components/LandingPage/HeroSection'
import InfoSection from '../../Components/LandingPage/InfoSection'
import ProductBanner from '../../Components/LandingPage/ProductBanner'
import ScrollingText from '../../Components/TextEffects/ColorChangingText'

const HomePage = () => {
    const categories: CategoryModel[] = [
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
    return (
        <>
            <HeroSection />
            <ScrollingText />
            <InfoSection />
            <ProductBanner />
            <Listings categories={categories} />
        </>
    )
}

export default HomePage
