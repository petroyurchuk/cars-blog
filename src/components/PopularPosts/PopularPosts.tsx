import { Container } from '@mui/material'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'

import { popularPostsData } from 'utils/BreadCrumbsData'
type Props = {}
const PopularPosts = (props: Props) => {
    return (
        <Container className="popular-posts__container">
            <BreadCrumbs data={popularPostsData} />
        </Container>
    )
}
export default PopularPosts
