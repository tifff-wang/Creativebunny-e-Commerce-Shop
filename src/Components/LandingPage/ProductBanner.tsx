import React from 'react'
import Button from '../Button/Button'
import './ProductBanner.styles.scss'
import { useNavigate } from 'react-router-dom'

const ProductBanner = () => {
    const navigate = useNavigate()

    return (
        <>
            <div
                className="product-hightlight-container"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div className="product-image-container">
                    <img
                        src="/images/toy-photos/oven-bagette.webp"
                        alt="a pizza set toy"
                        className="product-image"
                    />
                </div>
                <div className="product-description-container">
                    <h2 className="product-title">
                        Our wooden kitchen range comes with a variety of
                        kitchenware and pretend play food
                    </h2>
                    <Button
                        buttonType="inverted"
                        onClick={() => navigate('products/kitchen')}
                    >
                        SHOP NOW
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductBanner
