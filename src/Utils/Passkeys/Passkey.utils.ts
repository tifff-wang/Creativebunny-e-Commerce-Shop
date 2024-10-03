import { getFunctions, httpsCallable } from 'firebase/functions'
import { startRegistration, startAuthentication } from '@simplewebauthn/browser'
import {
    PublicKeyCredentialCreationOptionsJSON,
    PublicKeyCredentialRequestOptionsJSON,
} from '@simplewebauthn/types'

export async function registerPasskey() {
    const passkeyOptionsFunction = await httpsCallable(
        getFunctions(),
        'generatePasskeyRegistration'
    )
    const passkeyOptionsResponse = await passkeyOptionsFunction()
    const options =
        passkeyOptionsResponse.data as PublicKeyCredentialCreationOptionsJSON

    const attestationResponse = await startRegistration(options)

    const verifyPasskeyFunction = await httpsCallable(
        getFunctions(),
        'verifyPasskeyRegistration'
    )
    const request = {
        credential: JSON.stringify(attestationResponse),
    }

    try {
        const verificationResponse = await verifyPasskeyFunction(request)
        console.log(verificationResponse)
    } catch (error) {
        console.log(error)
    }
}

export async function loginPasskey() {
    const loginOptionsFunction = await httpsCallable(
        getFunctions(),
        'generatePassKeyLogin'
    )
    const loginOptionsResponse = await loginOptionsFunction()
    const optionsData = loginOptionsResponse.data as loginPasskeyOptionsResponse

    const attestationResponse = await startAuthentication(optionsData.options)
    const verifyLoginFunction = await httpsCallable(
        getFunctions(),
        'verifyPasskeyLogin'
    )

    const request = {
        credential: JSON.stringify(attestationResponse),
        challengeId: optionsData.challengeId,
    }

    try {
        const loginResponse = await verifyLoginFunction(request)
        console.log(loginResponse)
    } catch (error) {
        console.log(error)
    }
}

interface loginPasskeyOptionsResponse {
    challengeId: string
    options: PublicKeyCredentialRequestOptionsJSON
}
