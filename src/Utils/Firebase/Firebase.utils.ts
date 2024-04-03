import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User,
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
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const querySnapshot = await getDocs(query(collectionRef))

    const categoryMap: { [key: string]: ToyModel[] } = {}

    querySnapshot.forEach((doc) => {
        const categoryData = doc.data()
        const key = categoryData.category.toLowerCase()

        if (!categoryMap[key]) {
            categoryMap[key] = []
        }

        categoryMap[key].push(...categoryData.products)
    })

    return categoryMap
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

export const signOutAuthUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
    onAuthStateChanged(auth, callback)
