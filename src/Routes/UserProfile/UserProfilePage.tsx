import React, { useEffect, useState } from 'react'
import './UserProfilePage.style.scss'
import { useSelector } from 'react-redux'
import { selectedCurrentUser } from '../../Store/User/userSlice'
import { getUserPasskeys } from '../../Utils/Firebase/Firebase.utils'
import { PasskeyModel } from '../../Model/PasskeyModel'
import PassKeyInfoCard from '../../Components/Passkey/PassKeyInfoCard'
import PasskeyRegisterCard from '../../Components/Passkey/PasskeyRegisterCard'

const UserProfilePage = () => {
    const [passkeys, setPasskeys] = useState<PasskeyModel[]>([])
    const [loading, setLoading] = useState(true)
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
    }, [currentUser])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <section className="passkey-register-container">
            {passkeys.length > 0 ? (
                <PassKeyInfoCard passkey={passkeys[0]} email={email} />
            ) : (
                <PasskeyRegisterCard />
            )}
        </section>
    )
}

export default UserProfilePage
