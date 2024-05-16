import React from 'react'
import Button from '../Button/Button'
import './HeroSection.styles.scss'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="hero-container">
                <div className="hero-image-container">
                    <img
                        src="/images/toy-photos/star-shaker-hero.webp"
                        alt="a bunny shaker"
                        className="hero-image"
                    />
                </div>
                <div className="hero-description-container">
                    <h1 className="hero-title">Premium Wooden Toys</h1>
                    <h2 className="hero-subtilte">
                        Carefully handcrafted that provides fun and safey
                    </h2>
                    <Button
                        buttonType="inverted"
                        onClick={() => navigate('/products')}
                    >
                        SHOP NOW
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HeroSection
