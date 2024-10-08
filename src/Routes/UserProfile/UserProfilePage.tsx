import React, { useEffect, useState } from 'react'
import './UserProfilePage.style.scss'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import { getUserPasskeys } from '../../Utils/Firebase/Firebase.utils'
import { PasskeyModel } from '../../Model/Passkey/PasskeyModel'
import PassKeyInfoCard from '../../Components/Passkey/PassKeyInfoCard'
import PasskeyRegisterCard from '../../Components/Passkey/PasskeyRegisterCard'
import PasskeyRegisterSuccessModal from '../Passkey/PasskeyRegisterSuccessModal'

const UserProfilePage = () => {
    const [passkeys, setPasskeys] = useState<PasskeyModel[]>([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const currentUser = useSelector(selectedCurrentUser)
    const email = currentUser?.email || ''

    useEffect(() => {
        const fetchPasskeys = async () => {
            if (currentUser?.uid) {
                setLoading(true)
                const fetchedPasskeys = await getUserPasskeys(currentUser.uid)
                setPasskeys(fetchedPasskeys || [])
                setLoading(false)
            }
        }
        fetchPasskeys()
    }, [currentUser, refresh])

    const handleRefresh = async () => {
        setRefresh((prev) => !prev)
        setShowSuccessPopup(false) // Toggle to trigger re-fetch
    }

    const handleRegisterSuccess = () => {
        setShowSuccessPopup(true) // Show success popup
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <section className="user-passkey-container">
            {passkeys.length > 0 ? (
                <PassKeyInfoCard passkey={passkeys[0]} email={email} />
            ) : (
                <PasskeyRegisterCard onSuccess={handleRegisterSuccess} />
            )}
            {showSuccessPopup && (
                <PasskeyRegisterSuccessModal onClose={handleRefresh} />
            )}
        </section>
    )
}

export default UserProfilePage
