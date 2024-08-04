import React from 'react'
import './ProductListTable.styles.scss'
import { UserModel } from '../../Model/UserModel'
import SortableTable from '../Table/SortableTable'
import { formatDate } from '../../Helpers/common'

const UserDataTable = () => {
    const userData: UserModel[] = [
        {
            id: 'dff03876-c162-40a5-a797-4334a77317c2',
            createdAt: new Date('2018-01-01T00:00:00'),
            displayName: 'Tiffany Wang',
            email: 'abc@test.com',
        },
    ]

    const configUserData = [
        {
            header: 'Id',
            render: (data: UserModel) => data.id,
        },
        {
            header: 'Display Name',
            render: (data: UserModel) => data.displayName,
            sortedValue: (data: UserModel) => data.displayName,
            dataType: 'string',
        },
        {
            header: 'Created At',
            render: (data: UserModel) => formatDate(data.createdAt),
            sortedValue: (data: UserModel) => formatDate(data.createdAt),
            dataType: 'string',
        },
        {
            header: 'Email',
            render: (data: UserModel) => data.email,
        },
    ]

    const getKeyForTable = (data: UserModel) => {
        return data.id
    }

    return (
        <div className="all-products-table-container">
            <SortableTable
                tableData={userData}
                config={configUserData}
                getKey={getKeyForTable}
            />
        </div>
    )
}

export default UserDataTable
