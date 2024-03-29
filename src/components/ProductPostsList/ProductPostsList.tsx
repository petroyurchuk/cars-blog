import { Grid, Container } from '@mui/material'
import ProductPostsListItem from './ProductPostsListItem'
type Props = {
    id: number
    image: string
    category: string
    title: string
    author: string
    date: string
    description: string
}
type PropsProductPostsList = {
    posts: Props[]
}
const ProductPostsList = ({ posts }: PropsProductPostsList) => {
    return (
        <Container className="popular-posts__container">
            <Grid container spacing={3}>
                {posts.map(
                    ({
                        id,
                        image,
                        category,
                        title,
                        author,
                        date,
                        description,
                    }) => (
                        <Grid key={id} item className="product-post__container">
                            <ProductPostsListItem
                                id={id}
                                image={image}
                                category={category}
                                title={title}
                                author={author}
                                date={date}
                                description={description}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    )
}
export default ProductPostsList
