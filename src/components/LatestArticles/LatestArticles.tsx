import { Container } from '@mui/material'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import { latestArticlesData } from 'utils/BreadCrumbsData'
import { latestArticlesDataProduct } from 'utils/ProductPostsData'
import ProductPostsListItem from 'components/ProductPostsList/ProductPostsListItem'
import { Grid } from '@mui/material'
type Props = {}
const LatestArticles = (props: Props) => {
    return (
        <Container className="latest-articles__container">
            <BreadCrumbs data={latestArticlesData} />

            <Grid container spacing={3}>
                {latestArticlesDataProduct
                    .slice(0, 5)
                    .map(
                        ({
                            id,
                            image,
                            category,
                            title,
                            author,
                            data,
                            description,
                        }) => (
                            <Grid
                                item
                                key={id}
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
                            </Grid>
                        )
                    )}
            </Grid>
        </Container>
    )
}
export default LatestArticles
