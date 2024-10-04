import { useNavigate, useNavigationType } from 'react-router-dom'

const useUserNavigate = () => {
    const navigate = useNavigate()
    const navigationType = useNavigationType()

    const safeNavigate = (fallbackUrl = '/') => {
        if (navigationType === 'POP') {
            navigate(fallbackUrl)
        } else {
            navigate(-1)
        }
    }

    return safeNavigate
}

export default useUserNavigate
