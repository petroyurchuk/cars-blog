import ArrayDataOfMainSlider from 'utils/ArrayDataOfMainSlider'
import { Autoplay, Navigation, Pagination, A11y, EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from 'react'
import './HomeSlider.scss'
import 'swiper/swiper-bundle.min.css'
type Props = {}
const HomeSlider = (props: Props) => {
    const [arrayOfImages, setArrayOfImages] = useState<string[]>([])

    useEffect(() => {
        const updateArrayOfImages = () => {
            const images = ArrayDataOfMainSlider.map((item) => {
                if (window.innerWidth <= 950) {
                    return item.imageSrcResponsiveFirst
                } else {
                    return item.imageSrc
                }
            })
            setArrayOfImages(images)
        }
        updateArrayOfImages()
        window.addEventListener('resize', updateArrayOfImages)
        return () => window.removeEventListener('resize', updateArrayOfImages)
    }, [])
    return (
        <div className="home-slider-wrapper">
            <div className="home-slider__container">
                <Swiper
                    modules={[
                        Autoplay,
                        EffectCreative,
                        Navigation,
                        Pagination,
                        A11y,
                    ]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['-100%', 0, 0],
                        },
                    }}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
                >
                    {ArrayDataOfMainSlider.map(
                        ({ id, title, author }, index) => (
                            <SwiperSlide key={id} className="wrapper-slide">
                                <a href="/" className="link-slide">
                                    <img
                                        src={arrayOfImages[index]}
                                        alt={title}
                                    />
                                    <h1 className="title-slide">{title}</h1>
                                    <span className="author-slide">
                                        {author} - December 28, 2015
                                    </span>
                                </a>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </div>
    )
}
export default HomeSlider
