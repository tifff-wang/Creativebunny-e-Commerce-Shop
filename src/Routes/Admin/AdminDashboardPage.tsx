import React from 'react'
import Button from '../../Components/Button/Button'
import './AdminDashboardPage.styles.scss'
import { useNavigate } from 'react-router-dom'

interface DashboardInfo {
    section: string
    amount: number
    navigate: string
}
const AdminDashboardPage = () => {
    const navigate = useNavigate()
    const dashboardInfo: DashboardInfo[] = [
        {
            section: 'Product',
            amount: 36,
            navigate: 'products',
        },
        {
            section: 'Orders',
            amount: 3,
            navigate: 'orders',
        },
    ]

    return (
        <>
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                {dashboardInfo.map((info) => {
                    return (
                        <div className="dashboard-card">
                            <div>
                                <h2>
                                    {info.amount} {''}
                                    {info.section}
                                </h2>
                            </div>
                            <Button
                                buttonType={'default'}
                                onClick={() =>
                                    navigate(`/admin/${info.navigate}`)
                                }
                            >
                                Manage
                            </Button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AdminDashboardPage
