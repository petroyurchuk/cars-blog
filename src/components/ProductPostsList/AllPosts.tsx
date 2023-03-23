import ProductPostsData from 'utils/ProductPostsData'
import ProductPostsListItem from './ProductPostsListItem'
import { Grid } from '@mui/material'

type Props = {}
const AllPosts = (props: Props) => {
    return (
        <div>
            <Grid container spacing={3}>
                {ProductPostsData.slice(0, 5).map(
                    ({
                        id,
                        image,
                        category,
                        title,
                        author,
                        data,
                        description,
                    }) => (
                        <Grid item key={id} className="product-post__container">
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
        </div>
    )
}
export default AllPosts
