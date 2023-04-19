import ArrayOfShowAllSubmenu from 'utils/ArrayOfShowAllSubmenu'
import Slider from 'react-slick'

import '../BigSubMenu/BigSubMenu.scss'
import '../MenuInSubMenu/MenuInSubMenu.scss'
import './ShowAllSubMenu.scss'
import 'slick-carousel/slick/slick.css'
import './slick-theme.css'
import { Link } from 'react-router-dom'
type PropsList = {
    index: number
}

const ShowAllSubMenu = ({ index }: PropsList) => {
    const filteredList = ArrayOfShowAllSubmenu.find(
        (item) => item.index === index
    )

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    if (!filteredList) {
        return null
    }

    const { namesOfList, className, images, title, ids } = filteredList

    return (
        <ul className={className}>
            <Slider {...settings}>
                {namesOfList.map((name, idx) =>
                    name.map((item, index) => (
                        <li key={index} className="sub-menu__item">
                            <Link
                                to={`/posts/${ids[idx][index]}`}
                                className="sub-menu__link"
                            >
                                <div className="image-wrapper">
                                    <img
                                        src={images[idx][index]}
                                        alt={title[idx]}
                                    />
                                    <span className="title-link">
                                        {title[idx]}
                                    </span>
                                </div>
                                {item}
                            </Link>
                        </li>
                    ))
                )}
            </Slider>
        </ul>
    )
}

export default ShowAllSubMenu
