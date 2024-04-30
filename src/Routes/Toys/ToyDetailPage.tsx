import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import { ToyModel } from '../../Model/ToyModel'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductById } from '../../Store/Category/categorySelector'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { addItemToCart } from '../../Store/Cart/cartSlice'
import './ToyDetailPage.styles.scss'

const ToyDetailPage = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const id = Number(productId)
    const selectedProduct = useSelector(selectProductById(id))
    const [product, setProduct] = useState<ToyModel>()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (id && selectedProduct) {
            setProduct(selectedProduct)
        }
    }, [id, selectedProduct])

    return (
        <>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="product-detail-container">
                <div className="product-detail-image-container">
                    <img
                        className="product-detail-image"
                        src={product?.imageUrl}
                        alt={product?.name}
                    />
                </div>
                <div className="product-detail-info">
                    <h2 className="product-name">{product?.name}</h2>
                    <h3 className="product-price">${product?.price}</h3>
                    <div className="add-to-cart-container">
                        <div className="quantity-icon-container">
                            
                                <AiOutlineMinusCircle
                                    className="checkout-table-icon"
                                    onClick={() =>
                                        setQuantity(Math.max(quantity - 1, 1))
                                    }
                                    size={20}
                                />
                        

                            <div className="product-quantity">{quantity}</div>
                           
                                <AiOutlinePlusCircle
                                    className="checkout-table-icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                    size={20}
                                />
                           
                        </div>
                        {product && (
                            <Button
                                buttonType="inverted"
                                onClick={() =>
                                    dispatch(
                                        addItemToCart({
                                            item: product,
                                            addQuantity: quantity,
                                        })
                                    )
                                }
                            >
                                Add to cart
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToyDetailPage
