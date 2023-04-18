type PropsArray = {
    id: number
    title: string
    imageSrc: string
    author: string
    imageSrcResponsiveFirst: string
}
type PropsHomeTextSlider = {
    id: number
    title: string
}
const ArrayDataOfMainSlider: PropsArray[] = [
    {
        id: 99,
        title: 'Ford GT Spotted on Detroit Highway',
        imageSrc: '/images/HomeSlider/home-slider-car-01.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-01(534x462).jpg',
    },
    {
        id: 98,
        title: '2016 Camaro Starts at $26.695',
        imageSrc: '/images/HomeSlider/home-slider-car-02.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-02(534x462).jpg',
    },
    {
        id: 97,
        title: '2016 Mercedes CLS Coupe',
        imageSrc: '/images/HomeSlider/home-slider-car-03.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-03(534x462).jpg',
    },
    {
        id: 46,
        title: 'Dodge Unveils 2015 Charger Pursuit',
        imageSrc: '/images/HomeSlider/home-slider-car-04.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-04(534x462).jpg',
    },
    {
        id: 96,
        title: 'Lamborghini Aventador Will Blow Your Mind',
        imageSrc: '/images/HomeSlider/home-slider-car-05.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-05(534x462).jpg',
    },
    {
        id: 83,
        title: '400-hp BMW Diesel Just Around the Corner',
        imageSrc: '/images/HomeSlider/home-slider-car-06.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-06(534x462).jpg',
    },
    {
        id: 70,
        title: 'LaFerrari, McLaren P1, and Porsche 918 On-Track',
        imageSrc: '/images/HomeSlider/home-slider-car-07.jpg',
        author: 'Alex Reeve',
        imageSrcResponsiveFirst:
            '/images/HomeSlider/home-slider-car-07(534x462).jpg',
    },
]

export const ArraySliderText: PropsHomeTextSlider[] = [
    {
        id: 76,
        title: '2016 Audi Q7 Debuts with Next-Gen Styling at Detroit',
    },
    {
        id: 112,
        title: '10 Best Car Deals of the Month in January',
    },
    {
        id: 123,
        title: 'Volvo 142 Drift Car Project Hits Swedish Street',
    },
    {
        id: 67,
        title: 'Could Your Child Win a Season’s Racing?',
    },
    {
        id: 102,
        title: 'Chevy Silverado Midnight Edition',
    },
]
export default ArrayDataOfMainSlider
