import { PublicKeyCredentialRequestOptionsJSON } from '@simplewebauthn/types'

export interface loginPasskeyOptionsResponse {
    challengeId: string
    options: PublicKeyCredentialRequestOptionsJSON
}

export interface verifyPasskeyloginResponse {
    success: boolean
    authToken: string
}
