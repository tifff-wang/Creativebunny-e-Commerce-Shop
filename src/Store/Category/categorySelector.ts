import { createSelector } from 'reselect'
import { RootState } from '../store'
import { ToyModel } from '../../Model/ToyModel'

const categoryReducer = (state: RootState) => state.category

export const selectCategories = createSelector(
    [categoryReducer],
    (category) => category.categories
)

export const categoriesData = createSelector(
    [selectCategories],
    (categories) => {
        const categoryMap: { [key: string]: ToyModel[] } = {}

        categories.forEach((item) => {
            const { category, products } = item
            const key = category.toLowerCase()

            if (!categoryMap[key]) {
                categoryMap[key] = []
            }

            categoryMap[key].push(...products)
        })

        return categoryMap
    }
)
