import React from 'react'
import Button from '../Button/Button'
import "./ProductBanner.styles.scss"

const ProductBanner = () => {
    return (
        <>
            <div className="product-hightlight-container">
                <div className="product-image-container">
                    <img
                        src="/images/toy-photos/pizza-set.webp"
                        alt="a pizza set toy"
                        className="product-image"
                    />
                </div>
                <div className="product-description-container">
                    <h2 className="product-title">Our wooden kitchen range comes with a variety of kitchen tools and food</h2>
                    <Button buttonType="default">SHOP NOW</Button>
                </div>
            </div>
        </>
    )
}

export default ProductBanner
