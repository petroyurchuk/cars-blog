import ArrayDataOfMainSlider from 'utils/ArrayDataOfMainSlider'
import { Autoplay, Navigation, Pagination, A11y, EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
type Props = {}
const ResponsiveHomeSlider = (props: Props) => {
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
                        ({ id, title, author, imageSrcResponsiveFirst }) => (
                            <SwiperSlide key={id} className="wrapper-slide">
                                <a href="/" className="link-slide">
                                    <img
                                        src={imageSrcResponsiveFirst}
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
export default ResponsiveHomeSlider
