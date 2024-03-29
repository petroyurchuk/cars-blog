import Preview from 'components/Preview/Preview'
import Title from 'components/Title/Title'

import PostListWithPagination from 'components/PostListWithPagination/PostListWithPagination'

import SearchSortPostsOnPages from 'components/SearchSortPostsOnPages/SearchSortPostsOnPages'
import { useAppSelector } from 'redux/hooks'
import SocialList from 'components/Social/SocialList'
import { socialListArray } from 'utils/socialListArray'
import Sidebar from 'components/SideBar/Sidebar'
import { NewGenerationsData } from 'utils/ProductPostsData'

type Props = {}
const NewGenerations = (props: Props) => {
    const postsArray = useAppSelector(
        (state) => state.posts.filteredNewGenerationsPosts
    )

    return (
        <div className="cars-page__container">
            <Title>New Generations</Title>
            <Preview
                dataPosts={NewGenerationsData}
                categoryForSort="new generations"
            />
            <div className="cars-page-main-content-wrapper">
                <PostListWithPagination
                    posts={postsArray}
                    postsPerPage={10}
                    numberForPlus={0}
                    numberForMinus={1}
                />
                <div className="wrapper-right-side">
                    <SearchSortPostsOnPages
                        nameOfPosts="postsNewGenerations"
                        nameOfFilteredPosts="filteredNewGenerationsPosts"
                    />
                    <SocialList socialListData={socialListArray} />
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default NewGenerations
