const { exec } = require('child_process')

// Manual argument parsing
const args = process.argv.slice(2)
const useEmulator = args.includes('--emulator')

let command = 'react-scripts start'

if (useEmulator) {
    console.log(`useEmulator`)
    console.log('Starting with Firebase Emulator...')
    command = 'cross-env REACT_APP_FIREBASE_EMULATOR=true react-scripts start'
}

const child = exec(command)

child.stdout.on('data', (data) => {
    console.log(data)
})

child.stderr.on('data', (data) => {
    console.error(data)
})

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`)
})
