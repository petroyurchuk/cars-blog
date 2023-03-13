type PropsList = {
    title: string
    index: number
    namesOfList: string[]
    className: string
    images: string[]
}

const ArrayOfNamesOfMenuInSubMenu: PropsList[] = [
    {
        title: 'Auto Shows',
        index: 1,
        namesOfList: [
            'Mercedes-Benz Plans GLE Hybrid to Debut in New York',
            'Two New Scion Models Confirmed for the New York Auto Show',
            'Aston Martin DBX Concept: Gorgeous AWD Electric Sports Car',
            'Acura to Bring Updated RDX to 2015 Chicago Auto Show',
        ],
        className: 'menu-in-sub-menu sub-menu__cars__auto-shows big-sub-menu',
        images: [
            '/images/Auto-shows/auto-shows-01.jpg',
            '/images/Auto-shows/auto-shows-02.jpg',
            '/images/Auto-shows/auto-shows-03.jpg',
            '/images/Auto-shows/auto-shows-04.jpg',
        ],
    },
    {
        title: 'First Contact',
        index: 2,
        namesOfList: [
            'Buick Enclave Tuscan Edition',
            '2016 Hyundai Sonata Hybrid',
            'Roush Stage 3 Mustang',
            '2016 Lincoln MKX',
        ],
        className: 'menu-in-sub-menu sub-menu__cars__first-contact big-sub-menu',
        images: [
            '/images/First-contact/first-contact-01.jpg',
            '/images/First-contact/first-contact-02.jpg',
            '/images/First-contact/first-contact-03.jpg',
            '/images/First-contact/first-contact-04.jpg',
        ],
    },
    {
        title: 'Ho-Tech',
        index: 3,
        namesOfList: [
            '400-hp BMW Diesel Just Around the Corner',
            'Land Rover Recreates 1948 Production Line',
            'The Corvette Hoverboard is Here and it’s Real',
            'Volkswagen e-Golf SEL Premium',
        ],
        className: 'menu-in-sub-menu sub-menu__cars__hi-tech big-sub-menu',
        images: [
            '/images/Hi-tech/hi-tech-01.jpg',
            '/images/Hi-tech/hi-tech-02.jpg',
            '/images/Hi-tech/hi-tech-03.jpg',
            '/images/Hi-tech/hi-tech-04.jpg',
        ],
    },
     {
        title: 'Motor Sports',
        index: 4,
        namesOfList: [
            'Scenes From the 2015 Pebble Beach Tour',
            '’70s F1 cars will star at Goodwood',
            'Could Your Child Win a Season’s Racing?',
            'Octane’s Goodwood Festival of Speed',
        ],
        className: 'menu-in-sub-menu sub-menu__cars__motor-sports big-sub-menu',
        images: [
            '/images/Motor-sports/motor-sports-01.jpg',
            '/images/Motor-sports/motor-sports-02.jpg',
            '/images/Motor-sports/motor-sports-03.jpg',
            '/images/Motor-sports/motor-sports-04.jpg',
        ],
    },
    {
        title: 'New Generations',
        index: 5,
        namesOfList: [
            '2017 Mercedes-AMG C63 Coupe Revealed',
            'Lamborghini Aventador Will Blow Your Mind',
            'Dodge Unveils 2015 Charger Pursuit',
            '2016 Mercedes CLS Coupe',
        ],
        className: 'menu-in-sub-menu sub-menu__cars__new-generations big-sub-menu',
        images: [
            '/images/New-generations/new-generations-01.jpg',
            '/images/New-generations/new-generations-02.jpg',
            '/images/New-generations/new-generations-03.jpg',
            '/images/New-generations/new-generations-04.jpg',
        ],
    },
     {
        title: 'Oldies',
        index: 6,
        namesOfList: [
            'Monterey Auctions See $393 M in Sales',
            'What Next for the Barn Finds?',
            'Little Knobbly Lives Again',
            'TVR stages a More Credible Comeback',
        ],
        className: 'menu-in-sub-menu sub-menu__cars__oldies big-sub-menu',
        images: [
            '/images/Oldies/oldies-01.jpg',
            '/images/Oldies/oldies-02.jpg',
            '/images/Oldies/oldies-03.jpg',
            '/images/Oldies/oldies-04.jpg',
        ],
    },
]
export default ArrayOfNamesOfMenuInSubMenu
