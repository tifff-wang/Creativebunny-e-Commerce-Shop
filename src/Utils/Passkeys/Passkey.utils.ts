import { getFunctions, httpsCallable } from 'firebase/functions'
import { startRegistration, startAuthentication } from '@simplewebauthn/browser'
import { PublicKeyCredentialCreationOptionsJSON } from '@simplewebauthn/types'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { getApp } from 'firebase/app'
import { verifyPasskeyLoginRequest } from '../../Model/Passkey/PasskeyRequestModel'
import {
    loginPasskeyOptionsResponse,
    verifyPasskeyloginResponse,
} from '../../Model/Passkey/PasskeyResponseModel'

const functions = getFunctions(getApp(), 'australia-southeast1')

export async function registerPasskey() {
    const passkeyOptionsFunction = await httpsCallable(
        functions,
        'generatePasskeyRegistration'
    )
    const passkeyOptionsResponse = await passkeyOptionsFunction()
    const options =
        passkeyOptionsResponse.data as PublicKeyCredentialCreationOptionsJSON

    try {
        const attestationResponse = await startRegistration(options)

        const verifyPasskeyFunction = await httpsCallable(
            functions,
            'verifyPasskeyRegistration'
        )
        const request = {
            credential: JSON.stringify(attestationResponse),
        }

        await verifyPasskeyFunction(request)
    } catch (error) {
        throw error
    }
}

export async function loginPasskey() {
    const loginOptionsFunction = await httpsCallable(
        functions,
        'generatePassKeyLogin'
    )
    const loginOptionsResponse = await loginOptionsFunction()
    const optionsData = loginOptionsResponse.data as loginPasskeyOptionsResponse

    try {
        const attestationResponse = await startAuthentication(
            optionsData.options
        )
        const verifyLoginFunction = await httpsCallable(
            functions,
            'verifyPasskeyLogin'
        )

        const request: verifyPasskeyLoginRequest = {
            challengeId: optionsData.challengeId,
            credential: JSON.stringify(attestationResponse),
        }

        const loginResponse = await verifyLoginFunction(request)
        const loginResult = loginResponse.data as verifyPasskeyloginResponse
        if (loginResult.success && loginResult.authToken) {
            await signInWithCustomToken(
                getAuth(getApp()),
                loginResult.authToken
            )
        }
    } catch (error) {
        throw error
    }
}
