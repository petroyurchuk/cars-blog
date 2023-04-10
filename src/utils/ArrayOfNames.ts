type ListItem = {
    id: number
    name: string
    to: string
}
const ArrayOfNames: ListItem[] = [
    {
        id: 1,
        name: 'Home',
        to: '/',
    },
    {
        id: 2,
        name: 'Cars',
        to: '/cars',
    },
    {
        id: 3,
        name: 'Reviews',
        to: '/reviews',
    },
    {
        id: 4,
        name: 'Tests',
        to: '/tests',
    },
    {
        id: 5,
        name: 'More',
        to: '/more/deals',
    },
    { id: 6, name: 'About', to: '/about' },
    {
        id: 7,
        name: 'Contact',
        to: '/contact',
    },
]

export default ArrayOfNames
