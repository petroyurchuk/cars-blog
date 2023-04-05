import Preview from 'components/Preview/Preview'
import Title from 'components/Title/Title'
import './Cars.scss'
import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
import PostListWithPagination from 'components/PostListWithPagination/PostListWithPagination'

import SearchSortPostsOnPages from 'components/SearchSortPostsOnPages/SearchSortPostsOnPages'
import { useAppSelector } from 'redux/hooks'
import SocialList from 'components/Social/SocialList'
import { socialListArray } from 'utils/socialListArray'
import SideBarHeader from 'components/SideBar/SideBarHeader'

type Props = {}
const Cars = (props: Props) => {
    const postsArray = useAppSelector((state) => state.posts.filteredPosts)
    return (
        <div className="cars-page__container">
            <Title>Cars</Title>
            <Preview dataPosts={ArrayOfAllPostsHomePage} />
            <div className="cars-page-main-content-wrapper">
                <PostListWithPagination
                    posts={postsArray}
                    postsPerPage={10}
                    numberForPlus={0}
                    numberForMinus={1}
                />
                <div className="wrapper-right-side">
                    <SearchSortPostsOnPages />
                    <SocialList socialListData={socialListArray} />
                    <SideBarHeader>Weather</SideBarHeader>
                </div>
            </div>
        </div>
    )
}
export default Cars
