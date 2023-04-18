import ArrayOfNamesOfMenuInSubMenu from 'utils/ArrayOfNamesOfMenuInSubMenu'
import Slider from 'react-slick'

import '../BigSubMenu/BigSubMenu.scss'
import './MenuInSubMenu.scss'
import { Link } from 'react-router-dom'

type PropsList = {
    index: number
}

const MenuInSubMenu = ({ index }: PropsList) => {
    const filteredList = ArrayOfNamesOfMenuInSubMenu.find(
        (item) => item.index === index
    )

    if (!filteredList) {
        return null
    }
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
    const { namesOfList, className, images, title, ids } = filteredList

    return (
        <ul className={className}>
            <Slider {...settings}>
                {namesOfList.map((name, idx) => (
                    <li key={idx} className="sub-menu__item">
                        <Link
                            to={`/posts/${ids[idx]}`}
                            className="sub-menu__link"
                        >
                            <div className="image-wrapper">
                                <img src={images[idx]} alt={title} />

                                <span className="title-link">{title}</span>
                            </div>
                            {name}
                        </Link>
                    </li>
                ))}
            </Slider>
        </ul>
    )
}

export default MenuInSubMenu
