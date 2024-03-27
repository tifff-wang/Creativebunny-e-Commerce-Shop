import React from 'react'
import { ToyModel } from '../../Model/ToyModel'
import Button from '../Button/Button'
import './ProductCard.styles.scss'

const ProductCard = ({ toy }: { toy: ToyModel }) => {
    const { name, imageUrl, price } = toy
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-info">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted">Add to cart</Button>
        </div>
    )
}

export default ProductCard
