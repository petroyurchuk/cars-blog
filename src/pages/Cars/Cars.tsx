import Preview from 'components/Preview/Preview'
import Title from 'components/Title/Title'
import './Cars.scss'
import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
import PostListWithPagination from 'components/PostListWithPagination/PostListWithPagination'

import { postsArray } from 'utils/postsArray'

type Props = {}
const Cars = (props: Props) => {
    return (
        <div className="cars-page__container">
            <Title>Cars</Title>
            <Preview dataPosts={ArrayOfAllPostsHomePage} />
            <PostListWithPagination
                posts={postsArray}
                postsPerPage={10}
                numberForPlus={0}
                numberForMinus={1}
            />
        </div>
    )
}
export default Cars
