import React from 'react'
import './InfoSection.styles.scss'

const InfoSection = () => {
    return (
        <div className="info-section-container">
            <div className="info-card">
                <div className="info-image-container">
                    <img src="/images/logo.webp" alt="info images" />
                </div>
                <h3>
                    Praesent at porta arcu, vitae dignissim ante. Morbi
                    facilisis urna est, eu pharetra arcu aliquam eu.{' '}
                </h3>
            </div>
            <div className="info-card">
                <div className="info-image-container">
                    {' '}
                    <img src="/images/logo.webp" alt="info images" />
                </div>
                <h3>
                    Praesent at porta arcu, vitae dignissim ante. Morbi
                    facilisis urna est, eu pharetra arcu aliquam eu.{' '}
                </h3>
            </div>
            <div className="info-card">
                <div className="info-image-container">
                    {' '}
                    <img src="/images/logo.webp" alt="info images" />
                </div>
                <h3>
                    Praesent at porta arcu, vitae dignissim ante. Morbi
                    facilisis urna est, eu pharetra arcu aliquam eu.{' '}
                </h3>
            </div>
        </div>
    )
}

export default InfoSection
