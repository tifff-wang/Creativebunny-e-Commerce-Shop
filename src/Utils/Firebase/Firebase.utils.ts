import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    updateProfile,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'
import { ToyDataModel } from '../../Model/ToyDataModel'
import { ToyModel } from '../../Model/ToyModel'
import { OrderModel } from '../../Model/OrderModel'

export interface CustomUser extends User {
    role: string
}

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createCollectionAndDocuments = async (
    collectionKey: string,
    items: ToyDataModel[]
) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    items.forEach((item) => {
        const newDocument = doc(collectionRef, item.category.toLowerCase())
        batch.set(newDocument, item)
    })

    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const querySnapshot = await getDocs(query(collectionRef))

    return querySnapshot.docs.map((doc) => doc.data())
}

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
    password: string,
    additionalInformation = {}
) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
    const user = userCredential.user
    await createUserDocument(user, additionalInformation)

    return userCredential
}

export const signInAuthUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    if (!email || !password) return

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user
        const userRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
            const userData = userDoc.data()
            return userData.role
        } else {
            console.error('No such document!')
            return null
        }
    } catch (error) {
        console.error('Error signing in:', error)
        return null
    }
}

export const updateUserProfile = async (displayName: string) => {
    if (!auth.currentUser) {
        throw new Error('No authenticated user found.')
    }

    try {
        await updateProfile(auth.currentUser, { displayName })
    } catch (error) {
        console.error('Failed to update user profile:', error)
        throw error
    }
}

export const signOutAuthUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (
    callback: (user: CustomUser | null) => void
) => {
    return onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userRef = doc(db, 'users', user.uid)
            const userSnapshot = await getDoc(userRef)

            let userWithRole: CustomUser = user as CustomUser
            if (userSnapshot.exists()) {
                const userData = userSnapshot.data()
                const role = userData.role || 'user'
                userWithRole = { ...user, role }
            } else {
                await setDoc(userRef, {
                    uid: user.uid,
                    email: user.email,
                    role: 'user',
                })
                userWithRole = { ...user, role: 'user' }
            }
            callback(userWithRole)
        } else {
            callback(null)
        }
    })
}

export const createOrderDocuments = async (order: OrderModel) => {
    if (!order) return

    const orderRef = doc(db, 'orders', order.id)
    const {
        orderItems,
        deliveryInfo,
        userId,
        totalPrice,
        deliveryStatus,
        paymentIntent,
    } = order
    const createdAt = new Date()

    try {
        await setDoc(orderRef, {
            orderItems,
            deliveryInfo,
            userId,
            totalPrice,
            deliveryStatus,
            paymentIntent,
            createdAt,
        })
    } catch {
        console.log('error creating the user')
    }
}
