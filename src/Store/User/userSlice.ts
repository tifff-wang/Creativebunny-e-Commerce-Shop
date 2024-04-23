import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AuthState {
    accessToken: string
    displayName: string
    email: string
}

interface UserState {
    currentUser: AuthState
}

const USER_INITIAL_STATE: UserState = {
    currentUser: {
        accessToken: '',
        displayName: '',
        email: '',
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState: USER_INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            const { accessToken, displayName, email } = action.payload
            state.currentUser = {
                accessToken,
                displayName,
                email,
            }
        },
    },
})

export const { setCurrentUser } = userSlice.actions
export const selectedCurrentUser = (state: RootState) => state.user.currentUser
export const userReducer = userSlice.reducer
