import { getNextPostId } from './ArrayOfAllPostsHomePage'

export type PropsPosts = {
    id: number
    title: string
    category: string
    author: string
    date: string
    description: string
    image: string
}
type PropsPostPageInfo = {
    id: number
    chapter: string
    title?: string
    img?: string
    classNameForChapter: string
}
const defaultDescription =
    'A breathless session saw a quite staggering 23 cars blanketed by just eight tenths of a second with positions changing at almost every moment....'
export const postsArray: PropsPosts[] = [
    {
        id: getNextPostId(),
        title: 'Could Your Child Win a Season’s Racing?',
        category: 'motor sports',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-01.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Octane’s Goodwood Festival of Speed',
        category: 'motor sports',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-02.jpg',
    },
    {
        id: getNextPostId(),
        title: 'All the Best Bits of Goodwood Motorsport',
        category: 'motor sports',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-03.jpg',
    },
    {
        id: getNextPostId(),
        title: 'LaFerrari, McLaren P1, and Porsche 918 On-Track',
        category: 'motor sports',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-04.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Mercedes-Benz Plans GLE Hybrid to Debut in New York',
        category: 'Auto Shows',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-05.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Two New Scion Models Confirmed for the New York Auto Show',
        category: 'Auto Shows',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-06.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Aston Martin DBX Concept: Gorgeous AWD Electric Sports Car',
        category: 'Auto Shows',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-07.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Acura to Bring Updated RDX to 2015 Chicago Auto Show',
        category: 'Auto Shows',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-08.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Our Picks for the Very Best from the 2015 Geneva Auto Show',
        category: 'Auto Shows',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-09.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Audi Q7 Debuts with Next-Gen Styling at Detroit',
        category: 'Auto Shows',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-10.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Monterey Auctions See $393 M in Sales',
        category: 'Oldies',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-11.jpg',
    },
    {
        id: getNextPostId(),
        title: 'What Next for the Barn Finds?',
        category: 'Oldies',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-12.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Little Knobbly Lives Again',
        category: 'Oldies',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-13.jpg',
    },
    {
        id: getNextPostId(),
        title: 'TVR stages a More Credible Comeback',
        category: 'Oldies',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-14.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Holyrood Concours of Elegance',
        category: 'Oldies',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-15.jpg',
    },
    {
        id: getNextPostId(),
        title: 'That Time Bugatti Almost Built a Sedan',
        category: 'Oldies',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-16.jpg',
    },
    {
        id: getNextPostId(),
        title: '400-hp BMW Diesel Just Around the Corner',
        category: 'Hi-Tech',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-17.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Land Rover Recreates 1948 Production Line',
        category: 'Hi-Tech',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-18.jpg',
    },
    {
        id: getNextPostId(),
        title: 'The Corvette Hoverboard is Here and it’s Real',
        category: 'Hi-Tech',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-19.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Volkswagen e-Golf SEL Premium',
        category: 'Hi-Tech',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-20.jpg',
    },
    {
        id: getNextPostId(),
        title: '605 HP Audi S8 Plus Dials the Power',
        category: 'Hi-Tech',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-21.jpg',
    },
    {
        id: getNextPostId(),
        title: 'The Bloodhound Supersonic Car',
        category: 'Hi-Tech',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-22.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Buick Enclave Tuscan Edition',
        category: 'first contact',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-23.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Hyundai Sonata Hybrid',
        category: 'first contact',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-24.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Roush Stage 3 Mustang',
        category: 'first contact',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-25.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Lincoln MKX',
        category: 'first contact',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-26.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Land Rover Discovery Sport',
        category: 'first contact',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-27.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Tesla Model S Convertible',
        category: 'first contact',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-28.jpg',
    },
    {
        id: getNextPostId(),
        title: '2017 Mercedes-AMG C63 Coupe Revealed',
        category: 'new generations',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-29.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Lamborghini Aventador Will Blow Your Mind',
        category: 'new generations',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-30.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Mercedes CLS Coupe',
        category: 'new generations',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-31.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Camaro Starts at $26.695',
        category: 'new generations',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-32.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Ford GT Spotted on Detroit Highway',
        category: 'new generations',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Cars-page/cars-page-33.jpg',
    },
]
export const postsReviewsArray: PropsPosts[] = [
    {
        id: getNextPostId(),
        title: '2015 Chevrolet Camaro ZL1 Coupe',
        category: 'reviews',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Reviews-page/reviews-page-01.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Mercedes AMG C63 S Sedan',
        category: 'reviews',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Reviews-page/reviews-page-02.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Chevy Silverado Midnight Edition',
        category: 'reviews',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Reviews-page/reviews-page-03.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Volkswagen Golf SportWagen TDI',
        category: 'reviews',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Reviews-page/reviews-page-04.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Camaro Starts at $26.695',
        category: 'reviews',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Reviews-page/reviews-page-05.jpg',
    },
]
export const postsTestsArray: PropsPosts[] = [
    {
        id: getNextPostId(),
        title: 'Land Rover Range Rover Sport’s New Diesel V6',
        category: 'tests',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Tests-page/tests-page-01.jpg',
    },
    {
        id: getNextPostId(),
        title: 'The New Jaguar Crossover “F-Pace”',
        category: 'tests',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Tests-page/tests-page-02.jpg',
    },
    {
        id: getNextPostId(),
        title: 'Ferrari Testing Right Hand Drive California',
        category: 'tests',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Tests-page/tests-page-03.jpg',
    },
    {
        id: getNextPostId(),
        title: '2017 Ford Raptor Dominates Off-Road Trailchips',
        category: 'tests',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Tests-page/tests-page-04.jpg',
    },
    {
        id: getNextPostId(),
        title: '2016 Mercedes CLS Coupe',
        category: 'tests',
        author: 'Alex Reeve',
        date: 'December',
        description: defaultDescription,
        image: '/images/Posts/Tests-page/tests-page-05.jpg',
    },
]
export const postsDealsArray: PropsPosts[] = [
    {
        id: getNextPostId(),
        title: 'BFGoodrich Unveils Supersport G-Force Tires',
        category: 'deals',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Deals-page/deals-page-01.jpg',
    },
    {
        id: getNextPostId(),
        category: 'deals',
        title: 'New Car Financing and Cash Offers for Youngsters',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Deals-page/deals-page-02.jpg',
    },
    {
        id: getNextPostId(),
        category: 'deals',
        title: '10 Best Car Deals of the Month in January',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Deals-page/deals-page-03.jpg',
    },
    {
        id: getNextPostId(),
        category: 'deals',
        title: 'Out-of-This-World Mansory Lamborghini Aventador',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Deals-page/deals-page-04.jpg',
    },
    {
        id: getNextPostId(),
        category: 'deals',
        title: 'Tesla Reportedly Loses $4,000 on Each Model S',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Deals-page/deals-page-05.jpg',
    },
]
export const postsLifeArray: PropsPosts[] = [
    {
        id: getNextPostId(),
        category: 'life',
        title: 'Mad Max Fury Road Re-Created With Go-Karts',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Life-page/life-page-01.jpg',
    },
    {
        id: getNextPostId(),
        category: 'life',
        title: 'Cars in Miniature Swarm Greater Boston Area',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Life-page/life-page-02.jpg',
    },
    {
        id: getNextPostId(),
        category: 'life',
        title: 'Get Ready for New Diesel Cadillacs',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Life-page/life-page-03.jpg',
    },
    {
        id: getNextPostId(),
        category: 'life',
        title: 'All But 2 Buick Models Built Overseas',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Life-page/life-page-04.jpg',
    },
    {
        id: getNextPostId(),
        category: 'life',
        title: 'Dodge Unveils 2015 Charger Pursuit',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Life-page/life-page-05.jpg',
    },
]
export const postsTuningArray: PropsPosts[] = [
    {
        id: getNextPostId(),
        category: 'tuning',
        title: 'There’s Nothing Funny About Toyota’s Fuel Leaks',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Tuning-page/tuning-page-01.jpg',
    },
    {
        id: getNextPostId(),
        category: 'tuning',
        title: 'Hackers Seize Control of a Tesla Model S',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Tuning-page/tuning-page-02.jpg',
    },
    {
        id: getNextPostId(),
        category: 'tuning',
        title: 'Modify Your New Mercedes-Benz C-Class',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Tuning-page/tuning-page-03.jpg',
    },
    {
        id: getNextPostId(),
        category: 'tuning',
        title: 'Volvo 142 Drift Car Project Hits Swedish Street',
        author: 'Alex Reeve',
        date: 'December 28, 2015',
        description: defaultDescription,
        image: '/images/Posts/Tuning-page/tuning-page-04.jpg',
    },
]
export const postPageInfo: PropsPostPageInfo[] = [
    {
        id: 1,
        chapter: `A breathless session saw a quite staggering 23 cars blanketed by just eight tenths of a second with positions changing at almost every moment. Such was the competitiveness that the ballast-laden VW of Jason Plato could only manage 22nd on the grid, although the double champion has cited an as yet unknown problem with his Team BMR RCIB Insurance machine. Jason Plato, right after the race:`,
        classNameForChapter: 'default-chapter',
    },
    {
        id: 2,
        title: `“TODAY IT WAS A COMPLETELY DIFFERENT CAR TO THE ONE WE HAD IN FREE PRACTICE”`,
        chapter: `Sam Tordoff looked to have stolen pole position from under the nose of Motorbase Performance’s Mat Jackson, with the latter combination going for their first ever P1 in qualifying. Tordoff’s BMW 125i M Sport flashed across the line to move to the summit with just two minutes to go.`,
        img: '/images/Posts/Post-page/post-page-common-photo-01.jpg',
        classNameForChapter: 'default-chapter',
    },
    {
        id: 3,
        chapter: `Regular Knockhill front row starter Rob Austin could only manage sixth this time around, but it still represented his best performance of the season in the Exocet AlcoSense Audi A4. Neal held on to seventh despite his spin.`,
        classNameForChapter: 'default-chapter',
    },
    {
        id: 4,
        chapter: `MG’s Andrew Jordan took eighth with his last attempt also ruined after he ran wide and into the gravel in his Pirtek-backed MG6.
Ninth wouldn’t normally be something to celebrate for Colin Turkington, but the reigning champion was Team BMR RCIB Insurance’s top performer and he also maintained his record of qualifying inside the top ten of every 2015 event.

Adam Morgan’s WIX Racing Mercedes was relegated to tenth by Turkington with the duo split by just 0.001s. Unbelievably close gaps continued throughout the order notable absentees from the top ten.`,
        img: '/images/Posts/Post-page/post-page-common-photo-02.jpg',
        classNameForChapter: 'right-side-chapter',
    },
    {
        id: 5,
        chapter: `Plato was another to abort his last flyer attempt following a trip through the gravel and the double champion had to settle for the lowest grid position in his BTCC career – the championship leader will have it all to do from 22nd on the grid. Plato has suggested, however, that he’ll likely start from the pitlane – as he did at Croft earlier this season – in a bid to grab pole position for race two.`,
        classNameForChapter: 'default-chapter',
    },
    {
        id: 6,
        title: `“IT WAS A TOUGH SESSION, THERE WAS ONLY A VERY SHORT WINDOW TO SQUEEZE THE LAP TIME I NEEDED”`,
        chapter: `He continued: “It’s dangerous to expect anything, I knew coming into the weekend that we’d be strong, but to be fair I’ve had to get my head around the circuit, it’s been a long time since I raced here! A few things have changed, the kerbs are different through the chicane for example which makes a big difference. The track was going up and down in grip level, and while it didn’t drop massively it was pretty greasy and in those conditions it’s very easy to make a mistake. I knew that we had to be out there and get that free lap, and we stole it right at the end which is mega really.”`,

        classNameForChapter: 'default-chapter',
    },
    {
        id: 7,
        chapter: `Gordon Shedden made it a significant double in the second practice session as the Scotsman fired out a warning ahead of this afternoon’s Dunlop MSA British Touring Car Championship qualifying session.`,
        img: '/images/Posts/Post-page/post-page-common-photo-03.jpg',
        classNameForChapter: 'default-chapter',
    },
    {
        id: 8,
        title: `“I THINK THERE’S STILL A LITTLE MORE TO COME FROM THE CAR TOO”`,
        chapter: `he said. “It’s important that we do it when it matters though and that’s in qualifying. It’s going okay but I’m sure the others will find some time too.” Honda Yuasa Racing’s Shedden became the first and only driver to break the 52 second barrier in either of the practice sessions and now his Civic Type R, which shed some success ballast coming into the event, looks in particularly good shape for the weekend.`,
        classNameForChapter: 'default-chapter',
    },
    {
        id: 9,
        chapter: `Smith wasn’t the only driver to return to the track relatively unscathed after a spin as both the Honda of Matt Neal and Ford Focus of Alex Martin also endured moments during the session.

West Surrey Racing again showed well in third, fifth and seventh respectively with championship challenger Sam Tordoff getting the better of his more experienced team-mates Andy Priaulx and Rob Collard.

Mat Jackson and Andrew Jordan proved that they’ll be in the mix again this afternoon with solid top six results in practice.`,
        img: '/images/Posts/Post-page/post-page-common-photo-04.jpg',
        classNameForChapter: 'left-side-chapter',
    },
    {
        id: 10,
        chapter: `Morgan again left it late to fire his Mercedes A-Class up the order while Plato’s Team BMR RCIB Insurance squad admits it may not be setting the ultimate pace this weekend. Speedworks again broke into the leading ten with Ingram, but its achilles heel seems to be getting much beyond that. Qualifying will determine whether Ingram can haul his Toyota Avensis into the fight for a top six grid berth.`,
        classNameForChapter: 'default-chapter',
    },
]
