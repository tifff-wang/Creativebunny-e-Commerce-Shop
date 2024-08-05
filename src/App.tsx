import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getCategoriesAndDocuments,
    onAuthStateChangedListener,
} from './Utils/Firebase/Firebase.utils'
import { selectedCurrentUser, setCurrentUser } from './Store/User/userSlice'
import { setCategories } from './Store/Category/categorySlice'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomePage from './Routes/Home/HomePage'
import NavBar from './Routes/Nav/NavBar'
import AuthPage from './Routes/Auth/AuthPage'
import ToyPreviewPage from './Routes/Toys/ToyPreviewPage'
import ToyListPage from './Routes/Toys/ToyListPage'
import PayCompletionPage from './Routes/Checkout/PayCompletionPage'
import Footer from './Routes/Footer/Footer'
import ToyDetailPage from './Routes/Toys/ToyDetailPage'
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs'
import ViewCartPage from './Routes/Checkout/ViewCartPage'
import CheckoutPage from './Routes/Checkout/CheckoutPage'
import AdminNavBar from './Routes/Nav/AdminNavbar'
import AdminAuthPage from './Routes/Admin/AdminAuthPage'
import AdminRouters from './Routers/AdminRouters'

const App = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const isAdminRoute = location.pathname.startsWith('/admin')
    const currentUser = useSelector(selectedCurrentUser)

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
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

    //fade-up scroll effect
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            {!isAdminRoute ? <NavBar /> : <AdminNavBar />}
            {!isAdminRoute && <Breadcrumbs />}
            <Routes>
                <Route path="/" element={<HomePage />} />
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
                <Route path="admin/adminAuthPage" element={<AdminAuthPage />} />
                <Route
                    path="admin/*"
                    element={<AdminRouters currentUser={currentUser} />}
                />
            </Routes>
            {!isAdminRoute && <Footer />}
        </>
    )
}

export default App
