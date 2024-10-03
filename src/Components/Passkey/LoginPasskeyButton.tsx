import React, { useState } from 'react'
import Button from '../Button/Button'
import { loginPasskey } from '../../Utils/Passkeys/Passkey.utils'


const LoginPasskeyButton = () => {
 const [errorMessage, setErrorMessage] = useState('')
 const loginWithPasskey = async () => {
     try {
         await loginPasskey()
     } catch (error) {
         setErrorMessage(error.message)
     }
 }

 return (
     <>
         <Button buttonType="inverted" type="button" onClick={loginWithPasskey}>
            Login With Passkey
         </Button>
         {!errorMessage || (
             <p className="signin-error-message">{errorMessage}</p>
         )}
     </>
 )
}

export default LoginPasskeyButton