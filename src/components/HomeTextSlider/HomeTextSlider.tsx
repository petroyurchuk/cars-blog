import { Container } from '@mui/material'
import 'swiper/swiper-bundle.min.css'
import { Autoplay, Navigation, A11y, EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './HomeTextSlider.scss'
import { ArraySliderText } from 'utils/ArrayDataOfMainSlider'
import { Link } from 'react-router-dom'
type Props = {}
const HomeTextSlider = (props: Props) => {
    return (
        <Container className="home-text-slider__container">
            <span className="home-text-slider__trending">Trending now</span>
            <Swiper
                className="text-slider__container"
                modules={[Autoplay, Navigation, A11y, EffectCreative]}
                loop={true}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
            >
                {ArraySliderText.map(({ title, id }) => (
                    <SwiperSlide key={id} className="slide-text">
                        <Link to={`/posts/${id}`} className="slide-text__link">
                            {title}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
export default HomeTextSlider
