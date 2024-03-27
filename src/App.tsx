import { Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'
import ToyPage from './Routes/Toys/ToyPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="toys" element={<ToyPage />} />
            </Route>
        </Routes>
    )
}

export default App
