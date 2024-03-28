import { Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'
import ToyPage from './Routes/Toys/ToyPage'
import CheckoutPage from './Routes/Checkout/CheckoutPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="toys" element={<ToyPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Route>
        </Routes>
    )
}

export default App
