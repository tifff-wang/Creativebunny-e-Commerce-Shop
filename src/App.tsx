import { Routes, Route } from 'react-router-dom'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'
import ToyPreviewPage from './Routes/Toys/ToyPreviewPage'
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
import Footer from './Routes/Footer/Footer'
import ToyDetailPage from './Routes/Toys/ToyDetailPage'
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs'
import ViewCartPage from './Routes/Checkout/ViewCartPage'
import CheckoutPage from './Routes/Checkout/CheckoutPage'
import { createCollectionAndDocuments } from './Utils/Firebase/Firebase.utils'
import TOY_DATA from './toys-data'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     createCollectionAndDocuments('categories', TOY_DATA)
    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(`currentUser: ${user}`)
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

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <NavBar />
            <Breadcrumbs />
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="auth" element={<AuthPage />} />

                    <Route
                        path="products/:categoryName/:productId"
                        element={<ToyDetailPage />}
                    />
                    <Route
                        path="products/:categoryName"
                        element={<ToyListPage />}
                    />
                    <Route path="products/*" element={<ToyPreviewPage />} />
                    <Route path="cart" element={<ViewCartPage />} />
                    <Route path="cart/checkout" element={<CheckoutPage />} />
                    <Route path="completion" element={<PayCompletionPage />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
