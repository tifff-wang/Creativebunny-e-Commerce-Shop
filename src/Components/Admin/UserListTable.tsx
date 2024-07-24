import React from 'react'
import './ProductListTable.styles.scss'
import { UserModel } from '../../Model/UserModel'

const UserDataTable = () => {
    const userData: UserModel[] = [
        {
            id: 'dff03876-c162-40a5-a797-4334a77317c2',
            createdAt: new Date('2018-01-01T00:00:00'),
            displayName: 'Tiffany Wang',
            email: 'abc@test.com',
        },
    ]

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US').format(date)
    }

    return (
        <div className="all-products-table-container">
            <table>
                <thead>
                    <tr className="table-header">
                        <th className="id">Id</th>
                        <th className="name">User Name</th>
                        <th className="email">Email</th>
                        <th className="email">Created At</th>
                    </tr>
                </thead>

                {userData.map((user) => (
                    <tbody key={user.id}>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>{formatDate(user.createdAt)}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default UserDataTable
