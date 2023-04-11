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
                {latestArticlesDataProduct.map(
                    ({
                        id,
                        image,
                        category,
                        title,
                        author,
                        date,
                        description,
                    }) => (
                        <Grid item key={id} className="product-post__container">
                            <ProductPostsListItem
                                id={id}
                                image={image}
                                category={category}
                                title={title}
                                author={author}
                                data={date}
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
