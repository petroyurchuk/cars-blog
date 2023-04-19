type PropsArray = {
    title: string
    index: number
    namesOfList: string[]
    className: string
    images: string[]
    ids: number[]
}

const ArrayOfNamesOfBigSubMenu: PropsArray[] = [
    {
        title: 'Reviews',
        index: 3,
        namesOfList: [
            '2016 Chevrolet Malibu: No Yawning!',
            'Having Fun on Country Roads with Audi R8',
            '2015 Chevrolet Camaro ZL1 Coupe',
            'Mercedes AMG C63 S Sedan',
            'Chevy Silverado Midnight Edition',
            'Volkswagen Golf SportWagen TDI',
        ],
        className: 'sub-menu__reviews big-sub-menu',
        images: [
            '/images/Reviews/reviews-01.jpg',
            '/images/Reviews/reviews-02.jpg',
            '/images/Reviews/reviews-03.jpg',
            '/images/Reviews/reviews-04.jpg',
            '/images/Reviews/reviews-05.jpg',
            '/images/Reviews/reviews-06.jpg',
        ],
        ids: [19, 20, 100, 101, 102, 103, 104],
    },
    {
        title: 'Tests',
        index: 4,
        namesOfList: [
            'Volkswagen Beetle R-Line is a Little Beast',
            '2016 Porsche Boxster Spyder: We’re Stoked!',
            'Land Rover Range Rover Sport’s New Diesel V6',
            'The New Jaguar Crossover “F-Pace”',
            'Ferrari Testing Right Hand Drive California',
            '2017 Ford Raptor Dominates Off-Road Trailchips',
        ],
        className: 'sub-menu__tests big-sub-menu',
        images: [
            '/images/Tests/tests-01.jpg',
            '/images/Tests/tests-02.jpg',
            '/images/Tests/tests-03.jpg',
            '/images/Tests/tests-04.jpg',
            '/images/Tests/tests-05.jpg',
            '/images/Tests/tests-06.jpg',
        ],
        ids: [14, 15, 105, 106, 107, 108],
    },
]
export default ArrayOfNamesOfBigSubMenu
