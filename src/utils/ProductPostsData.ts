type Props = {
    image: string
    category: string
    title: string
    author: string
    data: string
    description: string
}
const ProductPostsData: Props[] = [
    {
        image: '/images/Products/PopularPosts/popular-posts-01.jpg',
        category: 'deals',
        title: '10 Best Car Deals of the Month in January',
        author: 'Alex Reeve',
        data: 'December 28, 2015',
        description:
            'A breathless session saw a quite staggering 23 cars blanketed by just eight tenths of a second with positions changing at almost every moment. Such was the competitiveness that the ballast-laden VW of Jason Plato could only manage 22nd on the grid, although the double champion has cited an as yet unknown problem with...',
    },
]
export default ProductPostsData
