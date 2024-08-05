import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthState } from '../Model/AuthStateModel'
import AdminDashboardPage from '../Routes/Admin/AdminDashboardPage'
import AdminProductListPage from '../Routes/Admin/AdminProductListPage'
import AdminUserListPage from '../Routes/Admin/AdminUserListPage'
import AdminOrderListPage from '../Routes/Admin/AdminOrderListPage'
import AdminAuthPage from '../Routes/Admin/AdminAuthPage'

interface RequireAdminAuthProps {
    currentUser: AuthState | null
}

const AdminRouters = ({ currentUser }: RequireAdminAuthProps) => {
    if (!currentUser) {
        return (
            <Routes>
                <Route path="*" element={<AdminAuthPage />} />
            </Routes>
        )
    }
    if (currentUser.role === 'admin') {
        return (
            <Routes>
                <Route path="/" element={<AdminDashboardPage />} />
                <Route path="products" element={<AdminProductListPage />} />
                <Route path="users" element={<AdminUserListPage />} />
                <Route path="orders" element={<AdminOrderListPage />} />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="*" element={<AdminAuthPage />} />
            </Routes>
        )
    }
}

export default AdminRouters
