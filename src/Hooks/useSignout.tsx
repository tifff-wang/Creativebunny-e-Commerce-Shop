import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOutAuthUser } from "../Utils/Firebase/Firebase.utils"
import { setCurrentUser } from "../Store/User/userSlice"

const useSignOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signOutAndNavigate = async (redirectPath: string) => {
        try {
            await signOutAuthUser()
            dispatch(setCurrentUser(null))
            navigate(redirectPath)
        } catch (error) {
            console.error('Failed to sign out:', error)
        }
    }

    return signOutAndNavigate
}

export default useSignOut
