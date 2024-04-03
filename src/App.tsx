import { Routes, Route} from 'react-router-dom'
import React from 'react'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'
import ToyPreviewPage from './Routes/Toys/ToyPreviewPage'
import CheckoutPage from './Routes/Checkout/CheckoutPage'
import ToyListPage from './Routes/Toys/ToyListPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="toys/*" element={<ToyPreviewPage />} />
                <Route path="toys/:categoryName" element={<ToyListPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Route>
        </Routes>
    )
}

export default App
