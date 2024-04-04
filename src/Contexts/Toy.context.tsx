import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../Utils/Firebase/Firebase.utils'
import { ToyModel } from '../Model/ToyModel'

interface ToysContextProps {
    toysData: { [key: string]: ToyModel[] }
}

export const ToysContext = createContext<ToysContextProps>({
    toysData: {},
})

export const ToysProvider = ({ children }: { children: ReactNode }) => {
    const [toysData, setToysData] = useState<{ [key: string]: ToyModel[] }>({})

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getCategoriesAndDocuments()
    //         setToysData(data)
    //     }
    //     fetchData()
    // }, [])

    const value = { toysData }
    return <ToysContext.Provider value={value}>{children}</ToysContext.Provider>
}
