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
        linksNames: ['/cars/all', '/cars/auto-shows'],
    },
    {
        index: 5,
        namesOfList: ['Deals', 'Life', 'Tuning'],
        className: 'sub-menu sub-menu__more',
        linksNames: ['/more/deals'],
    },
]

export default ArrayOfNamesOfSubMenu
