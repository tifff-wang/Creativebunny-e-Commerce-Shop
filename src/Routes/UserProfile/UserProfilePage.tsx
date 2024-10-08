import { platformAuthenticatorIsAvailable } from '@simplewebauthn/browser'
import React, { useEffect, useState } from 'react'
import PasskeySection from '../../Components/Passkey/PasskeySection'

const UserProfilePage = () => {
    const [passkeyAvailable, setPasskeyAvailable] = useState(false)

    useEffect(() => {
        const checkPasskeyAvailability = async () => {
            const result = await platformAuthenticatorIsAvailable()
            setPasskeyAvailable(result)
        }

        checkPasskeyAvailability()
    }, [])
    return <section>{passkeyAvailable && <PasskeySection />}</section>
}

export default UserProfilePage
