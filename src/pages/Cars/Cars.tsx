import Preview from 'components/Preview/Preview'
import Title from 'components/Title/Title'
import './Cars.scss'
import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
import PostListWithPagination from 'components/PostListWithPagination/PostListWithPagination'
import { useState } from 'react'
type Props = {}
const Cars = (props: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }
    console.log(currentPage)
    return (
        <div className="cars-page__container">
            <Title>Cars</Title>
            <Preview dataPosts={ArrayOfAllPostsHomePage} />
            <PostListWithPagination
                posts={ArrayOfAllPostsHomePage}
                postsPerPage={5}
                onChangePage={handlePageChange}
                numberForPlus={0}
                numberForMinus={1}
            />
        </div>
    )
}
export default Cars
