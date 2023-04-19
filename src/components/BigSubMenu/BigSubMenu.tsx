import ArrayOfNamesOfBigSubMenu from 'utils/ArrayOfNamesOfBigSubMenu'
import Slider from 'react-slick'
import './BigSubMenu.scss'
import './slick.css'
import { Link } from 'react-router-dom'
type PropsList = {
    index: number
}

const BigSubMenu = ({ index }: PropsList) => {
    const filteredList = ArrayOfNamesOfBigSubMenu.find(
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
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

export default BigSubMenu
