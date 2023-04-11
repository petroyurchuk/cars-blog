import ProductPostsListItem from './ProductPostsListItem'
import { Grid as MuiGrid } from '@mui/material'
import { Grid, Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
    id: number
    image: string
    category: string
    title: string
    author: string
    date: string
    description: string
}

type PropsAllPosts = {
    collectionOfData: {
        firstArray: Props[]
        secondArray: Props[]
        thirdArray: Props[]
    }
}
const AllPosts = ({ collectionOfData }: PropsAllPosts) => {
    const ArrayOfAllArrays = [
        ...collectionOfData.firstArray,
        ...collectionOfData.secondArray,
        ...collectionOfData.thirdArray,
    ]

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
                    {ArrayOfAllArrays.map(
                        (
                            {
                                id,
                                image,
                                category,
                                title,
                                author,
                                date,
                                description,
                            },
                            index
                        ) => (
                            <SwiperSlide
                                className="all-posts__slide"
                                key={index}
                            >
                                <MuiGrid
                                    item
                                    className="product-post__container"
                                >
                                    <ProductPostsListItem
                                        id={id}
                                        image={image}
                                        category={category}
                                        title={title}
                                        author={author}
                                        data={date}
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
