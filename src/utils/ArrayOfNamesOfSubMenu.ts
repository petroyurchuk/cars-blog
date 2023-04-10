type PropsArray = {
    index: number
    namesOfList: string[]
    className: string
    linksNames: string[]
}

const ArrayOfNamesOfSubMenu: PropsArray[] = [
    {
        index: 2,
        namesOfList: [
            'All',
            'Auto Shows',
            'First Contact',
            'Hi-Tech',
            'Motor sports',
            'New Generations',
            'Oldies',
        ],
        className: 'sub-menu sub-menu__cars',
        linksNames: [
            '/cars/',
            '/cars/auto-shows',
            '/cars/first-contact',
            '/cars/hi-tech',
            '/cars/motor-sports',
            '/cars/new-generations',
            '/cars/oldies',
        ],
    },
    {
        index: 5,
        namesOfList: ['Deals', 'Life', 'Tuning'],
        className: 'sub-menu sub-menu__more',
        linksNames: ['/more/deals', '/more/life', '/more/tuning'],
    },
]

export default ArrayOfNamesOfSubMenu
