import React from 'react'
import './Footer.styles.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-card footer-message">
                    Thanks for stopping by, Nullam hendrerit hendrerit nisl, ac
                    euismod arcu convallis eget. Donec dapibus pellentesque
                    tortor.
                </div>
                <div className="footer-card footer-nav">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Toys</li>
                        <li>Shipping</li>
                        <li>Terms & Condition</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-card">
                    <Link className="logo-container" to="/">
                        <img
                            className="footer-image"
                            src="/images/logo.webp"
                            alt="logo"
                        />
                    </Link>
                </div>
            </div>
            <div className="copyright-container">
                <p>@ Copyright 2024 Creative Bunny LTD. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
