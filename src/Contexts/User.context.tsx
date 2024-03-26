import React, { createContext, ReactNode, useState, useEffect } from 'react'
import { createUserDocument, onAuthStateChangedListener } from '../Utils/Firebase/Firebase.utils'

interface UserContextProps {
    currentUser: any
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>
}

export const UserContext = createContext<UserContextProps>({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<any>(null)
    const value = { currentUser, setCurrentUser }

    useEffect(()=>{
      const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
          createUserDocument(user)
        }
        console.log(user)
        setCurrentUser(user)
      })
      return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
