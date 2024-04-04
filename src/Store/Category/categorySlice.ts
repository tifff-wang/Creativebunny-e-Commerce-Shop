import { createSlice } from '@reduxjs/toolkit'
import { ToyDataModel } from '../../Model/ToyDataModel'

interface categoryInitialState {
    categories: ToyDataModel[]
}

export const CATEGORIES_INITIAL_STATE: categoryInitialState = {
    categories: [],
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        },
    },
})

export const { setCategories } = categorySlice.actions
export const categoryReducer = categorySlice.reducer
