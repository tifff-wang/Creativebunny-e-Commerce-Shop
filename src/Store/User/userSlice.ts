import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AuthState {
    accessToken: string
    displayName: string
    email: string
}

interface UserState {
    currentUser: AuthState | null
}

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: USER_INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            if (action.payload) {
                const { accessToken, displayName, email } = action.payload
                state.currentUser = {
                    accessToken: accessToken || '',
                    displayName: displayName || '',
                    email: email || '',
                }
            } else {
                state.currentUser = null
            }
        },
    },
})

export const { setCurrentUser } = userSlice.actions
export const selectedCurrentUser = (state: RootState) => state.user.currentUser
export const userReducer = userSlice.reducer
