import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const USER_INITIAL_STATE = {
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: USER_INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        },
    },
})

export const { setCurrentUser } = userSlice.actions
export const selectedCurrentUser = (state: RootState) => state.user.currentUser
export const userReducer = userSlice.reducer
