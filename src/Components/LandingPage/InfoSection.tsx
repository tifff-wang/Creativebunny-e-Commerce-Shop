import React, { useEffect } from 'react'
import './InfoSection.styles.scss'

const InfoSection = () => {  
    return (
        <div className="info-section-container">
            <div
                className="info-card"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <div className="info-image-container">
                    <img src="/images/children.svg" alt="an illustration of three children holding hand" />
                </div>
                <h3>
                    Our wooden toys bring endless fun and joy to children,
                    sparking their imagination and creativity.
                </h3>
            </div>
            <div
                className="info-card"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="info-image-container">
                    <img src="/images/tree.svg" alt="an illustratin of trees" />
                </div>
                <h3>
                    Crafted from high-quality wood, our toys are sustainably
                    sourced, ensuring durability and a connection to nature.
                </h3>
            </div>
            <div
                className="info-card"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="info-image-container">
                    <img src="/images/puzzle.svg" alt="an illustration of a 4 piece puzzle" />
                </div>
                <h3>
                    Our wooden puzzles encourage problem-solving skills and
                    cognitive development in a playful, engaging way.
                </h3>
            </div>
        </div>
    )
}

export default InfoSection
