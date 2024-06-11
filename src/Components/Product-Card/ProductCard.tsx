import React, { useState } from 'react'
import { ToyModel } from '../../Model/ToyModel'
import './ProductCard.styles.scss'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../Store/Cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { HiDotsHorizontal } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'

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
    const [icon, setIcon] = useState(<TbShoppingBagPlus size={30} />)

    const handleClick = (productId: string) => {
        navigate(`/products/${categoryName}/${productId}`)
    }

    const handleIconClick = (toy: ToyModel) => {
        setIcon(<HiDotsHorizontal size={30} />)
        setTimeout(() => {
            dispatch(
                addItemToCart({
                    item: toy,
                    addQuantity: quantity,
                })
            )
            setIcon(<TiTick size={30} />)

            setTimeout(() => {
                setIcon(<TbShoppingBagPlus size={30} />)
            }, 1000)
        }, 500)
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt="" onClick={() => handleClick(id)} />
            <div className="product-info">
                <div className="name-price-container">
                    <span className="name">{name}</span>
                    <span className="price">${Number(price.toFixed(2))}</span>
                </div>
                <div
                    className="add-to-cart-icon-container"
                    aria-label="add to cart"
                    onClick={() => handleIconClick(toy)}
                >
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
