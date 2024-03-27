import React, { createContext, ReactNode, useState, useEffect } from 'react'
import TOYS from '../toys-data.json'
import { ToyModel } from '../Model/ToyModel'

interface ToysContextProps {
    toysData: ToyModel[]
}

export const ToysContext = createContext<ToysContextProps>({
    toysData: [],
})

export const ToysProvider = ({ children }: { children: ReactNode }) => {
    const [toysData, setToysData] = useState(TOYS)
    const value = { toysData }
    return <ToysContext.Provider value={value}>{children}</ToysContext.Provider>
}
