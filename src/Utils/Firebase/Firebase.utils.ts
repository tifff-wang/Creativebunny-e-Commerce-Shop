import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyC03aXbzBnVAaewz6BYd_PWRFjy6MUnFZU',
    authDomain: 'creativebunny-shop-db.firebaseapp.com',
    projectId: 'creativebunny-shop-db',
    storageBucket: 'creativebunny-shop-db.appspot.com',
    messagingSenderId: '125740951017',
    appId: '1:125740951017:web:63baaeda55575f1c35d778',
}

const firebaseApp = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocument = async (
    userAuth: {
        uid: string
        displayName: string | null
        email: string | null
    },
    additionalInfomation = {}
) => {
    if (!userAuth) return

    const userRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfomation,
            })
        } catch {
            console.log('error creating the user')
        }
    }

    return userRef
}

export const createAuthUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}
