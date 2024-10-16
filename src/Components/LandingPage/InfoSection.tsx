import React from 'react'
import './InfoSection.styles.scss'
import { infoSectionData } from '../../Constants/InfoSectionData'

const InfoSection = () => {
    return (
        <div className="info-section-container">
            {infoSectionData.map((card) => (
                <div
                    key={card.id}
                    className="info-card"
                    data-aos="fade-up"
                    data-aos-duration={card.fadeUpDuration}
                >
                    <div className="info-image-container">
                        <img src={card.src} alt={card.alt} />
                    </div>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default InfoSection
