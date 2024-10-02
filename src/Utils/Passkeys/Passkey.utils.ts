// async function registerPasskey() {
//     const passkeyOptions = await firebase
//         .functions()
//         .httpsCallable('generatePasskeyRegistration')()
//     const credential = await navigator.credentials.create({
//         publicKey: passkeyOptions.data,
//     })

//     // Send the generated credential to the server for verification
//     await firebase.functions().httpsCallable('verifyPasskeyRegistration')({
//         credential,
//     })
// }
