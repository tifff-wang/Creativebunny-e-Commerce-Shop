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
                <p>
                    Our wooden toys bring endless fun and joy to children,
                    sparking their imagination and creativity.
                </p>
            </div>
            <div
                className="info-card"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="info-image-container">
                    <img src="/images/tree.svg" alt="an illustratin of trees" />
                </div>
                <p>
                    Crafted from high-quality wood, our toys are sustainably
                    sourced, ensuring durability and a connection to nature.
                </p>
            </div>
            {/* <div
                className="info-card"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="info-image-container">
                    <img src="/images/puzzle.svg" alt="an illustration of a 4 piece puzzle" />
                </div>
                <p>
                    Our wooden puzzles encourage problem-solving skills and
                    cognitive development in a playful, engaging way.
                </p>
            </div> */}
        </div>
    )
}

export default InfoSection
