import { ToyDataModel } from "./Model/ToyDataModel"

const TOY_DATA: ToyDataModel[] = [
    {
        category: 'Pretend play',
        products: [
            {
                id: 5,
                name: 'Carpentry Tool Box',
                imageUrl: '/images/toy-photos/carpentry.webp',
                price: 28,
            },
            {
                id: 6,
                name: 'Pizza Set',
                imageUrl: '/images/toy-photos/pizza-set.webp',
                price: 26,
            },
            {
                id: 7,
                name: 'Bakery Set',
                imageUrl: '/images/toy-photos/bakery-set.webp',
                price: 24,
            },
        ],
    },
    {
        category: 'Baby Shakers',
        products: [
            {
                id: 2,
                name: 'Bunny Shaker',
                imageUrl: '/images/toy-photos/bunny-shaker.webp',
                price: 26,
            },
            {
                id: 3,
                name: 'Cat Shaker',
                imageUrl: '/images/toy-photos/cat-shaker.webp',
                price: 20,
            },
            {
                id: 4,
                name: 'Star Shaker',
                imageUrl: '/images/toy-photos/star-shaker.webp',
                price: 26,
            },
        ],
    },
    {
        category: 'Construction',
        products: [
            {
                id: 1,
                name: 'Shape Slide',
                imageUrl: '/images/toy-photos/shape-slide.webp',
                price: 10,
            },

            {
                id: 8,
                name: 'Stacking Stone',
                imageUrl: '/images/toy-photos/stacking-stone.webp',
                price: 15,
            },
        ],
    },
]

export default TOY_DATA
