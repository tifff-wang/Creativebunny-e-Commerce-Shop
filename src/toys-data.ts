import { ToyDataModel } from './Model/ToyDataModel'
import { v4 as uuid} from "uuid"

const TOY_DATA: ToyDataModel[] = [
    {
        category: 'Kitchen',
        products: [
            {
                id: uuid(),
                name: 'Oven pizza and baguette grill set',
                imageUrl: '/images/toy-photos/oven-baguette.webp',
                price: 28,
                description:
                    "Hungry? Let's grill some yummy pizza! Simply put the pizza on the grill pan and slide it into the oven. Cut the pizza into four pieces and share them with your friends!\n " +
                    '100% quality beech wood\n' +
                    'Size: grill pan- 19 x 8.5 x 4cm\n' +
                    'pizza: dia 8 x 2cm\n' +
                    'oven: 11.5 x 11.5 x 9cm\n' +
                    'baguette - 9.5 x 5 x 2cm\n' +
                    'Age 3yrs+\n',
            },
            {
                id: uuid(),
                name: 'Ice Crusher, Frappe Maker',
                imageUrl: '/images/toy-photos/frappe-maker.webp',
                price: 22,
                description:
                    'This pretend-play set comes with an ice crusher with a rotatable handle, frappe blocks, bowls, spoons, juice and fruits. Have fun making yummy frappe with your choice of flavour.\n' +
                    'Age 3yrs+\n' +
                    'Packing size: 23 x 17 x 25cm',
            },
            {
                id: uuid(),
                name: 'Rice Cooker Set',
                imageUrl: '/images/toy-photos/rick-cooker.webp',
                price: 24,
                description:
                    'This rice cooker set contains: 1 x Rice Cooker, 1 x Rice Cooker bowl, 2 x Bowls, 1 x Rice scoop, 2 x Chopstick in a pair, 4 x Rice (Plain white rice, Red rice, Chestnut Rice, Yellow Rice\n' +
                    'Packing Size: 18 x 17 x 20cm\n' +
                    'Age 3yrs+',
            },
            {
                id: uuid(),
                name: 'Toaster, bread, cake and dessert set',
                imageUrl: '/images/toy-photos/toaster-set.webp',
                price: 26,
                description:
                    'This set features a wooden toaster, three slices of toast attached by Velcro, a plate, a cake roll, a birthday cake, a pudding and a hotcake. Made of quality beech wood with eco-friendly paint. \n' +
                    'Toaster size: 9 x 6 x 6.5cm\n' +
                    'Age 3yrs+',
            },
            {
                id: uuid(),
                name: 'Veggie Slicing and Chopping Set',
                imageUrl: '/images/toy-photos/veggie-chopping.webp',
                price: 26,
                description:
                    'The set includes 7 sliceable veggie (carrot, corn, eggplant, tomato, red onion, mushroom and cucumber), a cutting board and a knife. Made of natural rubberwood with eco-friendly paint. \n' +
                    'Chopping board size: 26 x 17 x 6cm\n' +
                    'Age 3yrs+',
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
                    "LOVELY MO's wooden pieces are crafted with different types of high-quality solid wood to create their distinctive natural colours.\n" +
                    'Material: Rubberwood and Sapele wood\n' +
                    'Size: 9.3 x 9.5 x 1.8 cm\n' +
                    'Age 3yrs+',
            },
            {
                id: uuid(),
                name: 'Cat Shaker',
                imageUrl: '/images/toy-photos/cat-shaker.webp',
                price: 20,
                description:
                    'A beautiful teether with a cute cat character with rolling eyes. Wrapped in a sweet bag and kraft box.\n' +
                    "LOVELY MO's wooden pieces are crafted with different types of high-quality solid wood to create their distinctive natural colours.\n" +
                    'Material: Rubberwood and Sapele wood\n' +
                    'Size: 8.7 x 7.8 x 2.3cm',
            },
            {
                id: uuid(),
                name: 'Star Shaker',
                imageUrl: '/images/toy-photos/star-shaker.webp',
                price: 26,
                description:
                    'This lovely twinkle star shaker is wrapped in a sweet bag and kraft box. \n' +
                    "LOVELY MO's wooden pieces are crafted with different types of high-quality solid wood to create their distinctive natural colours.\n" +
                    'Material: Rubberwood and Sapele wood\n' +
                    'Size: 13.7 x 7 x 1.2cm\n' +
                    'Age 3yrs+',
            },
        ],
    },
    {
        category: 'Construction',
        products: [
            {
                id: uuid(),
                name: 'Shape Slide',
                imageUrl: '/images/toy-photos/shape-slide.webp',
                price: 10,
                description:
                    "Beautiful 10-piece-set wooden stacking blocks that will not only provide an open-ended resource that stimulates your child's hand-eye coordination and find-motor skill development but also can be used as a lovely nursery decoration.  \n" +
                    'Come with a craft box size 16 x 10 x 5cm \n' +
                    'Stone size from 4 x 2.5 x 2.5cm to 5 x 4 x 4cm\n' +
                    'Age 3yrs+',
            },

            {
                id: uuid(),
                name: 'Stacking Stone',
                imageUrl: '/images/toy-photos/stacking-stone.webp',
                price: 15,
                description:
                    'Beautiful shape and colour matching puzzle to nurture cognitive development. Slide the shapes around to group the shapes in different ways, it encourages problem-solving skills as well as their fine motor skills. \n' +
                    'Material: natural solid wood with non-toxic paint\n' +
                    'Size: 13 x 17.5 x 3cm\n' +
                    'Age 3yrs+',
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
                    'This toy carpenter toolbox set comes with all the tools that a little carpenter may need. All the tools come in a wooden cabinet with a latch which holds everything neatly in place. The two drawers are provided to store the smaller nuts and bolts. \n' +
                    'Material: quality solid wood with non-toxic water paint. \n' +
                    'Size: 21 x 30 x 8cm\n' +
                    'Age 3yrs+',
            },

            {
                id: uuid(),
                name: '7 Buttons Toy Accordion',
                imageUrl: '/images/toy-photos/accordion.webp',
                price: 25,
                description:
                    "7-button design along with 2 bass buttons and one air valve. A fantastic add-on to your child's musical instrument collection.Help to develop the children's musical talent, improving their sense of rhythm.\n" +
                    'This music toy is just the right size for young hands. \n' +
                    'Made of high quality and eco-friendly material.\n' +
                    'A must for our future musicians.\n' +
                    'Price is for one accordion. Please indicate which colour you like when you purchase.\n' +
                    'Size: 18 x 10.5 x17.5cm \n' +
                    'Age 3yrs+',
            },
        ],
    },
]

export default TOY_DATA
