import { Container } from '@mui/material'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import ProductPostsList from 'components/ProductPostsList/ProductPostsList'
import { popularPostsData } from 'utils/BreadCrumbsData'
type Props = {}
const PopularPosts = (props: Props) => {
    return (
        <Container className="popular-posts__container">
            <BreadCrumbs data={popularPostsData} />
            <ProductPostsList />
        </Container>
    )
}
export default PopularPosts
