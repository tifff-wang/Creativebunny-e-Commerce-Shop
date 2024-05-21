import React, { useState } from 'react'
import { ToyModel } from '../../Model/ToyModel'
import './ProductCard.styles.scss'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../Store/Cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import { TbShoppingBagPlus } from 'react-icons/tb'

interface Props {
    toy: ToyModel
    categoryName: string
}

const ProductCard = (props: Props) => {
    const { toy, categoryName } = props
    const { id, name, imageUrl, price } = toy
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)

    const handleClick = (productId: string) => {
        navigate(`/products/${categoryName}/${productId}`)
    }

    return (
        <div className="product-card-container">
            <img
                src={imageUrl}
                alt=""
                onClick={() => handleClick(id)}
            />
            <div className="product-info">
                <div className="name-price-container">
                    <span className="name">{name}</span>
                    <span className="price">${Number(price.toFixed(2))}</span>
                </div>
                <div className="add-to-cart-icon-container" aria-label='add to cart'>
                    <TbShoppingBagPlus
                        onClick={() =>
                            dispatch(
                                addItemToCart({
                                    item: toy,
                                    addQuantity: quantity,
                                })
                            )
                        }
                        size={30}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
