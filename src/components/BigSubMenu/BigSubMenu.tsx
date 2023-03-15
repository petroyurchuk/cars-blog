import ArrayOfNamesOfBigSubMenu from 'utils/ArrayOfNamesOfBigSubMenu'
import Slider from 'react-slick'
import './BigSubMenu.scss'
import './slick.css'
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
    const { namesOfList, className, images, title } = filteredList

    return (
        <ul className={className}>
            <Slider {...settings}>
                {namesOfList.map((name, idx) => (
                    <li key={idx} className="sub-menu__item">
                        <a href="/" className="sub-menu__link">
                            <div className="image-wrapper">
                                <img src={images[idx]} alt={title} />
                                <span className="title-link">{title}</span>
                            </div>
                            {name}
                        </a>
                    </li>
                ))}
            </Slider>
        </ul>
    )
}

export default BigSubMenu
