import React, { useContext } from 'react'
import { ToysContext } from '../../Contexts/Toy.context'
import ProductCard from '../../Components/Product-Card/ProductCard'
import './ToyPage.styles.scss'

const ToyPage = () => {
    const { toysData } = useContext(ToysContext)
    return (
        <div className='toys-card-container'>
            {toysData.map((toy) => {
                return <ProductCard key={toy.id} toy={toy} />
            })}
        </div>
    )
}

export default ToyPage
