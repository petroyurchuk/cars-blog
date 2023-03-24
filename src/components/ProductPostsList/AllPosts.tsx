import ProductPostsData from 'utils/ProductPostsData'
import ProductPostsListItem from './ProductPostsListItem'
import { Grid as MuiGrid } from '@mui/material'
import { Grid, Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}
const AllPosts = (props: Props) => {
    return (
        <div className="all-posts__container">
            <Swiper
                className="products-slider__container"
                modules={[Grid, Navigation, A11y]}
                navigation={true}
                spaceBetween={20}
                direction="vertical"
                slidesPerView={5}
            >
                <MuiGrid container spacing={3}>
                    {ProductPostsData.map(
                        ({
                            id,
                            image,
                            category,
                            title,
                            author,
                            data,
                            description,
                        }) => (
                            <SwiperSlide className="all-posts__slide" key={id}>
                                <MuiGrid
                                    item
                                    className="product-post__container"
                                >
                                    <ProductPostsListItem
                                        image={image}
                                        category={category}
                                        title={title}
                                        author={author}
                                        data={data}
                                        description={description}
                                    />
                                </MuiGrid>
                            </SwiperSlide>
                        )
                    )}
                </MuiGrid>
            </Swiper>
        </div>
    )
}
export default AllPosts
