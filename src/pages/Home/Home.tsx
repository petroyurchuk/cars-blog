import HomeSlider from 'components/HomeSlider/HomeSlider'
import HomeTextSlider from 'components/HomeTextSlider/HomeTextSlider'
import LatestArticles from 'components/LatestArticles/LatestArticles'
import PopularPosts from 'components/PopularPosts/PopularPosts'
import PostListWithPagination from 'components/PostListWithPagination/PostListWithPagination'
import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
import { useState } from 'react'

type Props = {}
const Home = (props: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div>
            {currentPage <= 1 && <HomeSlider />}
            {currentPage <= 1 && <HomeTextSlider />}
            {currentPage <= 1 && <PopularPosts />}
            {currentPage <= 1 && <LatestArticles />}
            <PostListWithPagination
                posts={ArrayOfAllPostsHomePage}
                postsPerPage={5}
                onChangePage={handlePageChange}
            />
        </div>
    )
}
export default Home
