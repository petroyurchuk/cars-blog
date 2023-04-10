import Preview from 'components/Preview/Preview'
import Title from 'components/Title/Title'
import PostListWithPagination from 'components/PostListWithPagination/PostListWithPagination'
import SearchSortPostsOnPages from 'components/SearchSortPostsOnPages/SearchSortPostsOnPages'
import { useAppSelector } from 'redux/hooks'
import SocialList from 'components/Social/SocialList'
import { socialListArray } from 'utils/socialListArray'
import Sidebar from 'components/SideBar/Sidebar'

import { HiTechData } from 'utils/ProductPostsData'

type Props = {}
const HiTech = (props: Props) => {
    const postsArray = useAppSelector(
        (state) => state.posts.filteredHiTechPosts
    )

    return (
        <div className="cars-page__container">
            <Title>Hi-Tech</Title>
            <Preview dataPosts={HiTechData} categoryForSort="hi-tech" />
            <div className="cars-page-main-content-wrapper">
                <PostListWithPagination
                    posts={postsArray}
                    postsPerPage={10}
                    numberForPlus={0}
                    numberForMinus={1}
                />
                <div className="wrapper-right-side">
                    <SearchSortPostsOnPages
                        nameOfPosts="postsHiTech"
                        nameOfFilteredPosts="filteredHiTechPosts"
                    />
                    <SocialList socialListData={socialListArray} />
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default HiTech
