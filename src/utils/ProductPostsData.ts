import { getNextPostId } from './ArrayOfAllPostsHomePage'

type Props = {
    id: number
    image: string
    category: string
    title: string
    author: string
    date: string
    description: string
}
const defaultDescription =
    'A breathless session saw a quite staggering 23 cars blanketed by just eight tenths of a second with positions changing at almost every moment. Such was the competitiveness that the ballast-laden VW of Jason Plato could only manage 22nd on the grid, although the double champion has cited an as yet unknown problem with...'
const ProductPostsData: Props[] = [
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-01.jpg',
        category: 'deals',
        title: '10 Best Car Deals of the Month in January',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-02.jpg',
        category: 'New Generations',
        title: 'Lamborghini Aventador Will Blow Your Mind',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-03.jpg',
        category: 'deals',
        title: 'Tesla Reportedly Loses $4,000 on Each Model S',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-04.jpg',
        category: 'hi-tech',
        title: '400-hp BMW Diesel Just Around the Corner',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-05.jpg',
        category: 'tests',
        title: '2016 Porsche Boxster Spyder: We’re Stoked!',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-06.jpg',
        category: 'deals',
        title: 'Out-of-This-World Mansory Lamborghini Aventador',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/PopularPosts/popular-posts-06.jpg',
        category: 'deals',
        title: 'Out-of-This-World Mansory Lamborghini Aventador',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
]

export const NewGenerationsData: Props[] = [
    {
        id: getNextPostId(),
        image: '/images/Products/New-Generations/new-generations-01.jpg',
        category: 'new generations',
        title: 'Lamborghini Aventador Will Blow Your Mind',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/New-Generations/new-generations-02.jpg',
        category: 'Auto shows',
        title: 'Ford GT Spotted on Detroit Highway',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/New-Generations/new-generations-03.jpg',
        category: 'new generations',
        title: '2016 Mercedes CLS Coupe',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/New-Generations/new-generations-04.jpg',
        category: 'new generations',
        title: '2016 Camaro Starts at $26.695',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/New-Generations/new-generations-05.jpg',
        category: 'life',
        title: 'Dodge Unveils 2015 Charger Pursuit',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/New-Generations/new-generations-06.jpg',
        category: 'new generations',
        title: '2017 Mercedes-AMG C63 Coupe Revealed',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
]
export const FirstContactData: Props[] = [
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-01.jpg',
        category: 'new generations',
        title: 'Ford GT Spotted on Detroit Highway',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-02.jpg',
        category: 'first contact',
        title: '2016 Hyundai Sonata Hybrid',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-03.jpg',
        category: 'first contact',
        title: 'Tesla Model S Convertible',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-04.jpg',
        category: 'first contact',
        title: '2016 Lincoln MKX',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-05.jpg',
        category: 'first contact',
        title: 'Buick Enclave Tuscan Edition',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-06.jpg',
        category: 'first contact',
        title: 'Land Rover Discovery Sport',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/First-Contact/first-contact-07.jpg',
        category: 'first contact',
        title: 'Roush Stage 3 Mustang',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
]
export const HiTechData: Props[] = [
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-01.jpg',
        category: 'hi-tech',
        title: '400-hp BMW Diesel Just Around the Corner',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-02.jpg',
        category: 'auto shows',
        title: 'Ford GT Spotted on Detroit Highway',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-03.jpg',
        category: 'hi-tech',
        title: 'The Corvette Hoverboard is Here and it’s Real',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-04.jpg',
        category: 'hi-tech',
        title: '605 HP Audi S8 Plus Dials the Power',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-05.jpg',
        category: 'hi-tech',
        title: 'Volkswagen e-Golf SEL Premium',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-06.jpg',
        category: 'hi-tech',
        title: 'Land Rover Recreates 1948 Production Line',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Hi-Tech/hi-tech-07.jpg',
        category: 'hi-tech',
        title: 'The Bloodhound Supersonic Car',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
]

export const latestArticlesDataProduct: Props[] = [
    {
        id: getNextPostId(),
        image: '/images/Products/Latest-Articles/latest-articles-01.jpg',
        category: 'deals',
        title: 'BFGoodrich Unveils Supersport G-Force Tires',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Latest-Articles/latest-articles-02.jpg',
        category: 'deals',
        title: 'New Car Financing and Cash Offers for Youngsters',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Latest-Articles/latest-articles-03.jpg',
        category: 'deals',
        title: '10 Best Car Deals of the Month in January',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Latest-Articles/latest-articles-04.jpg',
        category: 'deals',
        title: 'Out-of-This-World Mansory Lamborghini Aventador',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
    {
        id: getNextPostId(),
        image: '/images/Products/Latest-Articles/latest-articles-05.jpg',
        category: 'deals',
        title: 'Tesla Reportedly Loses $4,000 on Each Model S',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
    },
]

export default ProductPostsData
