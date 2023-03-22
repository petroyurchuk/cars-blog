import ProductPostsData from 'utils/ProductPostsData'
import ProductPostsListItem from './ProductPostsListItem'
import { Grid } from '@mui/material'
type Props = {}
const PopularPostsList = (props: Props) => {
    return (
        <div>
            <Grid container spacing={4}>
                {ProductPostsData.map(
                    ({ image, category, title, author, data, description }) => (
                        <Grid item>
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
export default PopularPostsList
