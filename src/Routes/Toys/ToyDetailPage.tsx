import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import { ToyModel } from '../../Model/ToyModel'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../Store/Category/categorySelector'
import './ToyDetailPage.styles.scss'

const ToyDetailPage = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const id = Number(productId)
    const selectedProduct = useSelector(selectProductById(id))
    const [product, setProduct] = useState<ToyModel>()

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
                    <div className= "add-to-cart-container">
                        <div>- amount +</div>
                        <Button buttonType="default">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToyDetailPage
