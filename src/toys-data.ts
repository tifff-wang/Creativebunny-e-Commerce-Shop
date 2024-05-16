import { ToyDataModel } from './Model/ToyDataModel'
import { v4 as uuid } from 'uuid'

const TOY_DATA: ToyDataModel[] = [
    {
        category: 'Kitchen',
        products: [
            {
                id: uuid(),
                name: 'Oven pizza grill set',
                imageUrl: '/images/toy-photos/oven-pizza.webp',
                price: 28,
                description:
                    "Hungry? Let's grill some yummy pizza! Simply put the pizza on the grill pan and slide it into the oven. Cut the pizza into four pieces and share them with your friends!",
                material: '100% quality beech wood',
                size: [
                    'grill pan: 19 x 8.5 x 4cm',
                    'pizza: dia 8 x 2cm',
                    'oven: 11.5 x 11.5 x 9cm',
                ],
                age: '3yrs+',
            },

            {
                id: uuid(),
                name: 'Rice Cooker Set',
                imageUrl: '/images/toy-photos/rice-cooker.webp',
                price: 24,
                description:
                    'This rice cooker set contains: 1 x Rice Cooker, 1 x Rice Cooker bowl, 2 x Bowls, 1 x Rice scoop, 2 x Chopstick in a pair, 4 x Rice (Plain white rice, Red rice, Chestnut Rice, Yellow Rice',
                material: '100% quality beech wood',
                size: ['Packing Size: 18 x 17 x 20cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Pastry Set',
                imageUrl: '/images/toy-photos/pastry.webp',
                price: 26,
                description:
                    'This set features a wooden toaster, three slices of toast attached by Velcro, a plate, a cake roll, a birthday cake, a pudding and a hotcake. Made of quality beech wood with eco-friendly paint.',
                material: '100% quality beech wood',
                size: ['Toaster: 9 x 6 x 6.5cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Veggie Slicing and Chopping Set',
                imageUrl: '/images/toy-photos/veggie-chopping.webp',
                price: 26,
                description:
                    'The set includes 7 sliceable veggie (carrot, corn, eggplant, tomato, red onion, mushroom and cucumber), a cutting board and a knife. Made of natural rubberwood with eco-friendly paint.',
                material: '100% quality beech wood',
                size: ['Chopping board: 26 x 17 x 6cm'],
                age: '3yrs+',
            },
        ],
    },
    {
        category: 'Baby Shakers',
        products: [
            {
                id: uuid(),
                name: 'Bunny Shaker',
                imageUrl: '/images/toy-photos/bunny-shaker.webp',
                price: 26,
                description:
                    "A very special and exclusive design of teether. This beautiful sensory teether comes with crispy sound when the rabbit's ears are being shaken. Wrapped in a sweet bag and kraft box. A great gift for babies.\n" +
                    "LOVELY MO's wooden pieces are crafted with different types of high-quality solid wood to create their distinctive natural colours.",
                material: '100% quality beech wood',
                size: ['9.3 x 9.5 x 1.8 cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Cat Shaker',
                imageUrl: '/images/toy-photos/cat-shaker.webp',
                price: 20,
                description:
                    'A beautiful teether with a cute cat character with rolling eyes. Wrapped in a sweet bag and kraft box.\n' +
                    "LOVELY MO's wooden pieces are crafted with different types of high-quality solid wood to create their distinctive natural colours.",
                material: 'Rubberwood and Sapele wood',
                size: ['8.7 x 7.8 x 2.3cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Star Shaker',
                imageUrl: '/images/toy-photos/star-shaker.webp',
                price: 26,
                description:
                    'This lovely twinkle star shaker is wrapped in a sweet bag and kraft box. \n' +
                    "LOVELY MO's wooden pieces are crafted with different types of high-quality solid wood to create their distinctive natural colours.",
                material: 'Rubberwood and Sapele wood',
                size: ['13.7 x 7 x 1.2cm'],
                age: '3yrs+',
            },
        ],
    },
    {
        category: 'Construction',
        products: [
            {
                id: uuid(),
                name: 'Stacking Stone',
                imageUrl: '/images/toy-photos/stacking-stone.webp',
                price: 15,
                description:
                    "Beautiful 10-piece-set wooden stacking blocks that will not only provide an open-ended resource that stimulates your child's hand-eye coordination and find-motor skill development but also can be used as a lovely nursery decoration.  \n" +
                    'Come with a lovely craft box.',
                material: 'Beech wood',
                size: [
                    'Box size 16 x 10 x 5cm',
                    'Stone size from 4 x 2.5 x 2.5cm to 5 x 4 x 4cm',
                ],
                age: '3yrs+',
            },

            {
                id: uuid(),
                name: 'Shape Slide',
                imageUrl: '/images/toy-photos/shape-slide.webp',
                price: 10,
                description:
                    'Beautiful shape and colour matching puzzle to nurture cognitive development. Slide the shapes around to group the shapes in different ways, it encourages problem-solving skills as well as their fine motor skills.',
                material: 'natural solid wood with non-toxic paint',
                size: ['13 x 17.5 x 3cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Plug Tree Leaves',
                imageUrl: '/images/toy-photos/tree-leaves.webp',
                price: 20,
                description:
                    'Tree leaves wooden stacking, balancing and assembly toy. Children will enjoy inserting the leaves, branches and fruits into the holes, and make tree shapes they want. ',
                material: 'Made of premium wood material,',
                size: ['35 x 35cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Penguin Domino',
                imageUrl: '/images/toy-photos/penguin-domino.webp',
                price: 20,
                description:
                    'An adorable collection of colorful rectangular dominoes, penguin friends, and several fun accessory pieces to spice up the fun! It encourages problem-solving skills as well as their fine motor skills.',
                material: 'natural solid wood with non-toxic paint',
                size: ['100 piece set'],
                age: '3yrs+',
            },
        ],
    },
    {
        category: 'Pretend Play',
        products: [
            {
                id: uuid(),
                name: 'Carpentry Tool Box Set',
                imageUrl: '/images/toy-photos/carpentry.webp',
                price: 24,
                description:
                    'This toy carpenter toolbox set comes with all the tools that a little carpenter may need. All the tools come in a wooden cabinet with a latch which holds everything neatly in place. The two drawers are provided to store the smaller nuts and bolts.',
                material: 'quality solid wood with non-toxic water paint',
                size: ['21 x 30 x 8cm'],
                age: '3yrs+',
            },

            {
                id: uuid(),
                name: '7 Buttons Toy Accordion',
                imageUrl: '/images/toy-photos/accordion.webp',
                price: 25,
                description:
                    "7-button design along with 2 bass buttons and one air valve. A fantastic add-on to your child's musical instrument collection.Help to develop the children's musical talent, improving their sense of rhythm.\n" +
                    'This music toy is just the right size for young hands. \n' +
                    'A must for our future musicians.\n' +
                    'Price is for one accordion. Please indicate which colour you like when you purchase.',
                material: 'Made of high quality and eco-friendly material',
                size: ['18 x 10.5 x17.5cm'],
                age: '3yrs+',
            },
            {
                id: uuid(),
                name: 'Ice Crusher, Frappe Maker',
                imageUrl: '/images/toy-photos/frappe-maker.webp',
                price: 22,
                description:
                    'This pretend-play set comes with an ice crusher with a rotatable handle, frappe blocks, bowls, spoons, juice and fruits. Have fun making yummy frappe with your choice of flavour.',
                material: '100% quality beech wood',
                size: ['Packing size: 23 x 17 x 25cm'],
                age: '3yrs+',
            },
        ],
    },
]

export default TOY_DATA
