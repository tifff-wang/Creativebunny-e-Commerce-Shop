import { Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<AuthPage />} />
            </Route>
        </Routes>
    )
}

export default App
