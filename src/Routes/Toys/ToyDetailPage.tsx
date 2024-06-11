import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import { ToyModel } from '../../Model/ToyModel'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductById } from '../../Store/Category/categorySelector'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { addItemToCart } from '../../Store/Cart/cartSlice'
import './ToyDetailPage.styles.scss'

const ToyDetailPage = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const selectedProduct = useSelector(selectProductById(productId || ''))
    const [product, setProduct] = useState<ToyModel>()
    const [quantity, setQuantity] = useState(1)
    const [buttonText, setButtonText] = useState('Add to Cart')

    useEffect(() => {
        if (productId && selectedProduct) {
            setProduct(selectedProduct)
        }
    }, [productId, selectedProduct])

    const handleClick = (product: ToyModel) => {
        setButtonText('Adding...')
        setTimeout(() => {
            dispatch(
                addItemToCart({
                    item: product,
                    addQuantity: quantity,
                })
            )
            setButtonText('Added ✅')

            setTimeout(() => {
                setButtonText('Add to Cart')
            }, 1000)
        }, 1000)
    }

    return (
        <>
            {product && (
                <div className="product-detail-container">
                    <div className="product-detail-image-container">
                        <img
                            className="product-detail-image"
                            src={product.imageUrl}
                            alt=""
                        />
                    </div>
                    <div className="product-detail-info">
                        <h2 className="product-name">{product.name}</h2>
                        <h3 className="product-price">${product.price}</h3>
                        <div className="add-to-cart-container">
                            <div className="quantity-icon-container">
                                <AiOutlineMinusCircle
                                    className="checkout-table-icon"
                                    onClick={() =>
                                        setQuantity(Math.max(quantity - 1, 1))
                                    }
                                    size={20}
                                />

                                <div className="product-quantity">
                                    {quantity}
                                </div>

                                <AiOutlinePlusCircle
                                    className="checkout-table-icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                    size={20}
                                />
                            </div>
                            {product && (
                                <Button
                                    buttonType="default"
                                    onClick={() => handleClick(product)}
                                    disabled={buttonText !== 'Add to Cart'}
                                >
                                    {buttonText}
                                </Button>
                            )}
                        </div>
                        <div className="product-description-container">
                            <p className="product-description">
                                {product.description}
                            </p>
                            <p className="product-description">
                                Material: {product.material}
                            </p>
                            <ul className="product-description size-list">
                                Size:
                                {product?.size.map((item) => (
                                    <li className="size" key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="product-description">
                                For age: {product?.age}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ToyDetailPage
