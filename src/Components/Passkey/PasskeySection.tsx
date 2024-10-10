import React, { useEffect, useState } from 'react'
import './PasskeySection.style.scss'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import { getUserPasskeys } from '../../Utils/Firebase/Firebase.utils'
import { PasskeyModel } from '../../Model/Passkey/PasskeyModel'
import PassKeyInfoCard from './PassKeyInfoCard'
import PasskeyRegisterCard from './PasskeyRegisterCard'
import PasskeyRegisterSuccessModal from '../Passkey/PasskeyRegisterSuccessModal'

const PasskeySection = () => {
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
                setTimeout(() => {
                    setPasskeys(fetchedPasskeys || [])
                    setLoading(false) 
                }, 1000)
            }
        }
        fetchPasskeys()
    }, [currentUser, refresh])

    const handleRefresh = async () => {
        setRefresh((prev) => !prev)
        setShowSuccessPopup(false) 
    }

    const handleRegisterSuccess = () => {
        setShowSuccessPopup(true) 
    }

    if (loading) {
        return <div className="loading">Loading...</div>
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

export default PasskeySection
