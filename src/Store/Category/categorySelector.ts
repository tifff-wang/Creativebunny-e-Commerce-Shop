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

export const selectProductById = (productId: number) =>
    createSelector([categoriesData], (categoryMap) => {
        for (const categoryProducts of Object.values(categoryMap)) {
            const foundProduct = categoryProducts.find(
                (product) => product.id === productId
            )
            if (foundProduct) {
                return foundProduct
            }
        }
       
        return null
    })


