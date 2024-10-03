import { getFunctions, httpsCallable } from 'firebase/functions'
import { startRegistration } from '@simplewebauthn/browser'
import { PublicKeyCredentialCreationOptionsJSON } from '@simplewebauthn/types'

export async function registerPasskey() {
    const passkeyOptionsFunction = await httpsCallable(
        getFunctions(),
        'generatePasskeyRegistration'
    )
    const passkeyOptionsResponse = await passkeyOptionsFunction()
    const options =
        passkeyOptionsResponse.data as PublicKeyCredentialCreationOptionsJSON

    const attestationResponse = await startRegistration(options)
    console.log(attestationResponse)

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
