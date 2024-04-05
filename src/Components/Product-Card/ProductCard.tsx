import React from 'react'
import { ToyModel } from '../../Model/ToyModel'
import Button from '../Button/Button'
import './ProductCard.styles.scss'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../Store/Cart/cartSlice'

const ProductCard = ({ toy }: { toy: ToyModel }) => {
    const { name, imageUrl, price } = toy
    const dispatch = useDispatch()
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-info">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button
                buttonType="inverted"
                onClick={() => dispatch(addItemToCart(toy))}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard
