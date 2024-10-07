import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AuthState } from '../../Model/AuthStateModel'

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
                const { uid, accessToken, displayName, email } = action.payload
                state.currentUser = {
                    uid: uid || '',
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
