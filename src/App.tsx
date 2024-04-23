import { Routes, Route } from 'react-router-dom'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'
import ToyPreviewPage from './Routes/Toys/ToyPreviewPage'
import CheckoutPage from './Routes/Checkout/CheckoutPage'
import ToyListPage from './Routes/Toys/ToyListPage'
import React, { useEffect } from 'react'
import {
    createUserDocument,
    getCategoriesAndDocuments,
    onAuthStateChangedListener,
} from './Utils/Firebase/Firebase.utils'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './Store/User/userSlice'
import { setCategories } from './Store/Category/categorySlice'
import PayCompletionPage from './Routes/Checkout/PayCompletionPage'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocument(user)
                dispatch(setCurrentUser(user))
            } else {
                dispatch(setCurrentUser(null))
            }
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        const getCategoriesData = async () => {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setCategories(categoriesArray))
        }

        getCategoriesData()
    }, [])

    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="toys/*" element={<ToyPreviewPage />} />
                <Route path="toys/:categoryName" element={<ToyListPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="completion" element={<PayCompletionPage />} />
            </Route>
        </Routes>
    )
}

export default App
