import React from 'react'
import { PasskeyModel } from '../../Model/Passkey/PasskeyModel'
import { GoPasskeyFill } from 'react-icons/go'
import './PasskeyCard.styles.scss'

interface PassKeyInfoCardProps {
    passkey: PasskeyModel
    email: string
}

const PassKeyInfoCard = ({ passkey, email }: PassKeyInfoCardProps) => {
    const passkeyCreateTimestamp = passkey.createdAt
    const date = new Date(passkeyCreateTimestamp)
    const formatedDate = date.toLocaleString()

    return (
        <div className="passkey-container">
            <div className="passkey-card">
                <h3>Your Passkey:</h3>
                <div className="passkey-info">
                    <GoPasskeyFill size={30} />
                    <h4>{email}</h4>
                </div>
                <p className="passkey-create-date">
                    Created on: {formatedDate}
                </p>
            </div>
        </div>
    )
}

export default PassKeyInfoCard
