import React from 'react'
import { signInWithGooglePopup, createUserDocument } from '../../Utils/Firebase/Firebase.utils'

const SignIn = () => {
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup()
    const userRef = createUserDocument(user)
  }
  return (
      <>
          <div>SignIn</div>
          <button onClick={logGoogleUser}>Sign In From Google</button>
      </>
  )
}

export default SignIn