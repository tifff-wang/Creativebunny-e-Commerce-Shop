import React from 'react'
import './Footer.styles.scss'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <footer className="footer-container">
                <div className="footer-card footer-message">
                    Thanks for stopping by, we appreciate your support and look
                    forward to being a part of your child's playtime!
                </div>
                <div className="footer-card footer-nav">
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="footer-link"
                                onClick={() => window.scroll(0, 0)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>About Us</li>
                        <li>
                            {' '}
                            <Link
                                to="products"
                                className="footer-link"
                                onClick={() => window.scroll(0, 0)}
                            >
                                Category
                            </Link>
                        </li>
                        <li>Shipping</li>
                        <li>Terms & Condition</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-card">
                    <div className="logo-container">
                        <img
                            className="footer-image"
                            src="/images/logo.webp"
                            alt="creative bunny shop logo"
                        />
                    </div>
                </div>
            </footer>
            <div className="copyright-container">
                <p>@ Copyright 2024 Creative Bunny LTD. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
