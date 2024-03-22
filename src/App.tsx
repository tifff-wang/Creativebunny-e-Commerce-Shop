import { Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import SignIn from './Routes/Sign-in/SignIn'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="signIn" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default App
